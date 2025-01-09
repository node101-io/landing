const cluster = require('cluster');
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');
const express = require('express');
const favicon = require('serve-favicon');
const http = require('http');
const mongoose = require('mongoose');
const os = require('os');
const path = require('path');

const enableDynamicInclude = require('./middleware/enableDynamicInclude');
const setLanguage = require('./middleware/setLanguage');

dotenv.config({ path: path.join(__dirname, '.env') });
const numCPUs = process.env.WEB_CONCURRENCY || os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++)
    cluster.fork();

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const app = express();
  const server = http.createServer(app);

  const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/node101';
  const PORT = process.env.PORT || 10101;
  const URL = process.env.URL || 'http://localhost:' + PORT;

  const indexRouteController = require('./routes/indexRoute');
  const subscribeRouteController = require('./routes/subscribeRoute');

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');

  mongoose.set('strictQuery', false);
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  app.use(express.static(path.join(__dirname, 'public')));
  app.use(favicon(path.join(__dirname, 'public/img/favicon/favicon.ico')));
  app.use(cookieParser());
  app.use(express.json({
    extended: true
  }));
  app.use((req, res, next) => {
    if (!req.query || typeof req.query != 'object')
      req.query = {};
    if (!req.body || typeof req.body != 'object')
      req.body = {};

    res.locals.url = URL;
    res.locals.dev = process.env.NODE_ENV === 'development';

    return next();
  });
  app.use(setLanguage);
  app.use(enableDynamicInclude);

  app.use('/', indexRouteController);
  app.use('/subscribe', subscribeRouteController);

  // temporary redirects
  app.use('/stake', (req, res) => {
    res.redirect('/#portfolio');
  });
  app.use('/blog/a_non_mathematical_introduction_to_zero_knowledge_proofs', (req, res) => {
    res.redirect('https://library.node101.io/blog/node101/a-non-mathematical-introduction-to-zero-knowledge-proofs');
  });
  app.all('*', (req, res) => res.redirect('/'));

  server.listen(PORT, () => {
    console.log(`Server is on port ${PORT} as Worker ${cluster.worker.id} running @ process ${cluster.worker.process.pid}`);
  });
};
