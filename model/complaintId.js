const mongoose = require("mongoose");
const schema = mongoose.Schema;

const complaintNumberSchema = new schema(
  {
    complaintNumber: {
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

module.exports = mongoose.model("complaintNumber", complaintNumberSchema);