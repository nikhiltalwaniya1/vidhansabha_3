const mongoose = require("mongoose");
const schema = mongoose.Schema;

const complaintSchema = new schema(
  {
    complaintType: {
      type: schema.Types.String,
      required: true,
    },
    complaintNumber: {
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
    complaintDescription:{
      type: schema.Types.String,
      required: true,
      default:""
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

module.exports = mongoose.model("complaint", complaintSchema);