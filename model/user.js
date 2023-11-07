const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema(
  {
    name:{
      type: schema.Types.String, 
      required: true,
      default:""
    },
    phonenumber:{
      type: schema.Types.String, 
      required: true,
      default:""
    },
    password:{
      type: schema.Types.String, 
      required: true,
      default:""
    },
    address:{
      type: schema.Types.String, 
      required: true,
      default:""
    },
    state:{
      type: schema.Types.String, 
      required: true,
      default:""
    },
    city:{
      type: schema.Types.String, 
      required: true,
      default:""
    },
    pincode:{
      type: schema.Types.String, 
      required: true,
      default:""
    },
    assemblyId:{
      type: schema.Types.ObjectId, 
      required: true,
      ref: "assembly",
    },
    wardId:{
      type: schema.Types.ObjectId, 
      required: true,
      ref: "ward",
    },
    role:{
      type: schema.Types.String, 
      required: true,
      default:2
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)

module.exports = mongoose.model("user", userSchema);
