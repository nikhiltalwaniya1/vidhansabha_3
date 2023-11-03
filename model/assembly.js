const mongoose = require("mongoose");
const schema = mongoose.Schema;

const assemblySchema = new schema(
  {
    assemblyName: {
      type: schema.Types.String,
      required: true,
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)

module.exports = mongoose.model("assembly", assemblySchema);