const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/recommend", async (req, res) => {

  try {

    const employee = req.body;

    const prompt = `
    Analyze this employee:
    
    ${JSON.stringify(employee)}

    Give:
    1. Promotion recommendation
    2. Training suggestion
    3. Ranking feedback
    4. Improvement feedback
    `;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",

        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({
      recommendation:
        response.data.choices[0].message.content
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
});

module.exports = router;