const mongoose = require("mongoose");
const schema = mongoose.Schema;

const suggestionNumberSchema = new schema(
  {
    suggestionNumber: {
      type: schema.Types.Number,
      required: true,
      default:100000000
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)

module.exports = mongoose.model("suggestionNumber", suggestionNumberSchema);