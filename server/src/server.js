require("dotenv").config();
const app = require("./app");
require("./config/db")();
console.log(process.env.MONGO_URI,"process.env.MONGO_URI");

app.listen(5000,()=>console.log("Server running"));
