const {Schema,model} = require("mongoose");

module.exports = model("Flow", new Schema({
  prompt:String,
  response:String,
  createdAt:{type:Date,default:Date.now}
}));
