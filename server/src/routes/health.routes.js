const router = require("express").Router();

router.get("/health", (req,res)=>{
  res.json({ status:"ok", time:Date.now() });
});

module.exports = router;