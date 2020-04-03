const Schema = require("mongoose").Schema;
module.exports = function (options = {}) {
  let {
    models,
    multiple = false,
    key,
    required = true,
    modelKey = "onModel",
    referenceKey = "ref"
  } = options;
  if (!key) key = multiple ? "references" : "reference";

  let reference_content = {
    [referenceKey]: {
      type: Schema.Types.ObjectId,
      required,
      refPath: `${key}.${modelKey}`
    },
    [modelKey]: {
      type: String,
      required,
      enum: models
    }
  };

  return {
    [key]: multiple ? [reference_content] : reference_content
  };
};
