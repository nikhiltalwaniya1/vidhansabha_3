const mongoose = require("mongoose");
const schema = mongoose.Schema;

const assignComplaintSchema = new schema(
  {
    complaintId:{
      type: schema.Types.ObjectId,
      required: true,
      ref:"assembly"
    },
    userId:{
      type: schema.Types.ObjectId,
      required: true,
      ref:"user"
    },
    complaintStatus:{
      type: schema.Types.String,
      required: true,
      default:"Panding"
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)

module.exports = mongoose.model("assigncomplaint", assignComplaintSchema);