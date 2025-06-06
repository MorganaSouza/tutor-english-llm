// backend/llm.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

// 🔐 Substitua com sua chave da OpenRouter
const OPENROUTER_API_KEY = 'sua_api_key_aqui';

app.use(cors());
app.use(bodyParser.json());

app.post('/ask', async (req, res) => {
  const { question } = req.body;

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'deepseek/deepseek-r1-distill-qwen-7b',
        messages: [
          {
            role: 'system',
            content:
              'Você é um professor de inglês. Responda de forma educacional e com exemplos.',
          },
          {
            role: 'user',
            content: question,
          },
        ],
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:3000',
        },
      }
    );

    const answer = response.data.choices[0].message.content;
    res.json({ answer });
  } catch (error) {
    console.error('Erro OpenRouter:', error.response?.data || error.message);
    res.status(500).json({
      error: 'Erro ao chamar a API OpenRouter',
      details: error.response?.data || error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}.`);
});
