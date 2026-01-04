const { askAI } = require("../config/openrouter");

exports.generateAnswer = async (prompt)=>{
  const res = await askAI(prompt);
  return res.data.choices[0].message.content;
};
