const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const TELEGRAM_TOKEN = "7274584972:AAHf0yjEWuKWXWIKrzaFj9n7Pi1XWSe0tbQ";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;

app.use(bodyParser.json());

app.post("/webhook", async (req, res) => {
  const { message } = req.body;

  if (message) {
    const chatId = message.chat.id;
    const text = message.text;

    if (text === "/start") {
      await sendMessage(
        chatId,
        "Welcome to Coin Wallet Bot! Use /createwallet to create a new wallet."
      );
    } else if (text === "/createwallet") {
      // Implement wallet creation logic
      await sendMessage(chatId, "Your wallet has been created!");
    } else if (text === "/connectwallet") {
      // Implement wallet connection logic
      await sendMessage(chatId, "Your wallet has been connected!");
    }
  }

  res.sendStatus(200);
});

const sendMessage = async (chatId, text) => {
  await axios.post(`${TELEGRAM_API_URL}/sendMessage`, {
    chat_id: chatId,
    text: text,
  });
};

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
