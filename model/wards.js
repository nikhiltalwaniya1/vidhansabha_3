const mongoose = require("mongoose");
const schema = mongoose.Schema;

const wardSchema = new schema(
  {
    wardName: {
      type: schema.Types.String,
      required: true,
    },
    assemblyId:{
      type: schema.Types.ObjectId,
      required: true,
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)

module.exports = mongoose.model("ward", wardSchema);