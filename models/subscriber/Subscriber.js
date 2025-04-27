const mongoose = require('mongoose');
const validator = require('validator');

const formatSubscriber = require('./functions/formatSubscriber');
const generateKey = require('./functions/generateKey');

const DUPLICATED_UNIQUE_FIELD_ERROR_CODE = 11000;
const MAX_DATABASE_TEXT_FIELD_LENGTH = 1e4;
const TYPE_VALUES = ['general', 'klein', 'library', 'buildersweekistanbul']

const Schema = mongoose.Schema;

const SubscriberSchema = new Schema({
  key: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: MAX_DATABASE_TEXT_FIELD_LENGTH,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: MAX_DATABASE_TEXT_FIELD_LENGTH,
  },
  type: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: MAX_DATABASE_TEXT_FIELD_LENGTH
  },
  is_canceled: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    required: true
  }
});

SubscriberSchema.statics.createSubscriber = function (data, callback) {
  const Subscriber = this;

  if (!data || typeof data != 'object')
    return callback('bad_request');

  if (!data.email || typeof data.email != 'string' || !validator.isEmail(data.email.trim()) || data.email.trim().length > MAX_DATABASE_TEXT_FIELD_LENGTH)
    return callback('bad_request');

  if (!data.type || typeof data.type != 'string' || !TYPE_VALUES.includes(data.type.trim()))
    return callback('bad_request');

  const key = generateKey(data);

  if (!key) return callback('bad_request');

  const newSubscriber = new Subscriber({
    key,
    email: data.email,
    type: data.type,
    created_at: new Date()
  });

  newSubscriber.save((err, subscriber) => {
    if (err && err.code == DUPLICATED_UNIQUE_FIELD_ERROR_CODE)
      return callback('duplicated_unique_field');
    if (err)
      return callback('database_error');

    formatSubscriber(subscriber, (err, subscriber) => {
      if (err) return callback(err);

      return callback(null, subscriber);
    });
  });
};

SubscriberSchema.statics.findSubscriberById = function (id, callback) {
  const Subscriber = this;

  if (!id || !validator.isMongoId(id.toString()))
    return callback('bad_request');

  Subscriber.findById(mongoose.Types.ObjectId(id.toString()), (err, subscriber) => {
    if (err) return callback('database_error');
    if (!subscriber) return callback('document_not_found');

    return callback(null, subscriber);
  });
};

module.exports = mongoose.model('Subscriber', SubscriberSchema);
