const Flow = require("../models/Flow");
const { generateAnswer } = require("../services/ai.service");

exports.askAI = async (req,res)=>{
  // console.log("5");
  
  const answer = await generateAnswer(req.body.prompt);
  res.json({answer});
};

exports.saveFlow = async (req,res)=>{
  const flow = await Flow.create(req.body);
  res.json(flow);
};
