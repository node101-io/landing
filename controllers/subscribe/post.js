const Subscriber = require('../../models/subscriber/Subscriber');

module.exports = (req, res) => {
  req.body.type = 'general';

  Subscriber.createSubscriber(req.body, (err, subscriber) => {
    if (err) return res.json({ error: err });

    return res.json({ data: subscriber });
  });
};