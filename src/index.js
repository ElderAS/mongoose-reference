const Schema = require('mongoose').Schema

module.exports = function(options = {}) {
  let { models, multiple = false, key } = options
  if (!key) key = multiple ? 'references' : 'reference'

  let reference_content = {
    on: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: key + '.onModel',
    },
    onModel: {
      type: String,
      required: true,
      enum: models ? models : undefined,
    },
  }

  return {
    [key]: multiple ? [reference_content] : reference_content,
  }
}
