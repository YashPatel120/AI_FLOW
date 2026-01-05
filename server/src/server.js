require("dotenv").config();
const app = require("./app");
require("./config/db")();
console.log(process.env.MONGO_URI,"process.env.MONGO_URI");

app.use("/api/health", require("./routes/health.routes"));
app.listen(5000,()=>console.log("Server running"));
