const mongoose = require("mongoose");
const schema = mongoose.Schema;

const suggestionSchema = new schema(
  {
    suggestionNumber: {
      type: schema.Types.Number,
      required: true,
    },
    assemblyId:{
      type: schema.Types.ObjectId,
      required: true,
      ref:"assembly"
    },
    wardId:{
      type: schema.Types.ObjectId,
      required: true,
      ref:"ward"
    },
    userId:{
      type: schema.Types.ObjectId,
      required: true,
      ref:"user"
    },
    suggestionDescription:{
      type: schema.Types.String,
      required: true,
      default:""
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)

module.exports = mongoose.model("suggestion", suggestionSchema);