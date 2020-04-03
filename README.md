# mongoose-reference

[![Build Status](https://travis-ci.org/ElderAS/mongoose-reference.svg?branch=master&style=flat-square)](https://travis-ci.org/ElderAS/mongoose-reference)
[![npm](https://img.shields.io/npm/dt/mongoose-reference.svg?style=flat-square)](https://www.npmjs.com/package/mongoose-reference)
[![npm](https://img.shields.io/npm/v/mongoose-reference.svg?style=flat-square)](https://www.npmjs.com/package/mongoose-reference)

[Mongoose](http://mongoosejs.com/) "plugin" for management of dynamic references.

### Installation

`npm install --save mongoose-reference`

### Usage

```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Reference = require("mongoose-reference");

let YourSchema = new Schema({
  title: String,
  description: String,
  author: String,
  ...Reference({ models: ["Company", "Group"], multiple: true })
});
```

After implementing `mongoose-reference` extends your Schema with `reference` or `references`.

E. g.

```js
// Example above after beeing extended
let YourSchema = new Schema({
  title: String,
  description: String,
  author: String,
  references: [
    {
      ref: {
        type: Schema.Types.ObjectId,
        required: true,
        refPath: "references.onModel"
      },
      onModel: {
        type: String,
        required: true,
        enum: ["Company", "Group"]
      }
    }
  ]
});
```

### Options

| Key          | Type    | Description                                                                                       |
| ------------ | ------- | ------------------------------------------------------------------------------------------------- |
| models       | Array   | Define all allowed reference types (enum). Must be the same as the name of the registered Schemas |
| key          | String  | Define your custom key. (Default: `reference` or `references`)                                    |
| multiple     | Boolean | Set to true if you want to have multiple references                                               |
| modelKey     | String  | Define your custom key for model value. (Default: `onModel`)                                      |
| referenceKey | String  | Define your custom key for reference value. (Default: `ref`)                                      |

**Important!** Mongoose has some reserved keys that will throw an error if used. See list here: [Reserved keys](https://mongoosejs.com/docs/api/schema.html#schema_Schema.reserved)

Example

```js
Reference({
  models: [...],
  key: 'CustomKey',
  multiple: true
})
```

## License

[The MIT License](http://opensource.org/licenses/MIT)
Copyright (c) Carsten Jacobsen
