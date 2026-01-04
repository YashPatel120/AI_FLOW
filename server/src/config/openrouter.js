const axios = require("axios");

exports.askAI = (prompt) =>
  axios.post("https://openrouter.ai/api/v1/chat/completions",{
    model:"mistralai/mistral-7b-instruct:free",
    messages:[{role:"user",content:prompt}]
  },{
    headers:{ Authorization:`Bearer ${process.env.OPENROUTER_API_KEY}` }
  });
