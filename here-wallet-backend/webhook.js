const axios = require("axios");

const TELEGRAM_TOKEN = "7274584972:AAHf0yjEWuKWXWIKrzaFj9n7Pi1XWSe0tbQ";
const WEBHOOK_URL = "https://telegram-testing.com/webhook";

const webhook = async () => {
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/setWebhook`,
      {
        url: WEBHOOK_URL,
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error setting webhook:", error);
  }
};

webhook();
