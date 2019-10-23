const Schema = require('mongoose').Schema

module.exports = function(options = {}) {
  let { models, multiple = false, key, required = true } = options
  if (!key) key = multiple ? 'references' : 'reference'

  let reference_content = {
    on: {
      type: Schema.Types.ObjectId,
      required,
      refPath: key + '.onModel',
    },
    onModel: {
      type: String,
      required,
      enum: models,
    },
  }

  return {
    [key]: multiple ? [reference_content] : reference_content,
  }
}
