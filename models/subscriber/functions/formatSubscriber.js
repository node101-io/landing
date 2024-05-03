module.exports = (subscriber, callback) => {
  if (!subscriber || !subscriber._id)
    return callback('document_not_found');

  return callback(null, {
    _id: subscriber._id.toString(),
    email: subscriber.email,
    type: subscriber.type,
    created_at: subscriber.created_at
  });
};