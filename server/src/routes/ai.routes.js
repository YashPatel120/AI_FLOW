const router = require("express").Router();
const ctrl = require("../controllers/ai.controller");

router.post("/ask-ai", ctrl.askAI);
router.post("/save", ctrl.saveFlow);

module.exports = router;
