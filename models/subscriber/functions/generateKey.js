const validator = require('validator');

const MAX_DATABASE_TEXT_FIELD_LENGTH = 1e4;
const TYPE_VALUES = ['klein', 'library']

module.exports = data => {
  if (!data || typeof data != 'object')
    return null;

  if (!data.email || typeof data.email != 'string' || !validator.isEmail(data.email.trim()) || data.email.trim().length > MAX_DATABASE_TEXT_FIELD_LENGTH)
    return null;

  if (!data.type || typeof data.type != 'string' || !TYPE_VALUES.includes(data.type.trim()))
    return null;

  return `${data.type}-${data.email}`;
}