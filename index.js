// Telegram bot for CarinaDevWorks web development services
const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');
const commands = require('./commands');

// Create a bot instance
const bot = new TelegramBot(config.botToken, { polling: true });

console.log('Bot is running...');

// Register command handlers
bot.onText(/\/start/, (msg) => commands.start(bot, msg));
bot.onText(/\/help/, (msg) => commands.help(bot, msg));
bot.onText(/\/services/, (msg) => commands.services(bot, msg));
bot.onText(/\/pricing/, (msg) => commands.pricing(bot, msg));
bot.onText(/\/portfolio/, (msg) => commands.portfolio(bot, msg));
bot.onText(/\/contact/, (msg) => commands.contact(bot, msg));
bot.onText(/\/quote/, (msg) => commands.quote(bot, msg));
bot.onText(/\/admin/, (msg) => commands.admin(bot, msg));
bot.onText(/\/audit/, (msg) => commands.audit(bot, msg));
bot.onText(/\/consult/, (msg) => commands.consult(bot, msg));
bot.onText(/\/feedback/, (msg) => commands.feedback(bot, msg));
bot.onText(/\/domain/, (msg) => commands.domain(bot, msg));

// Handle unknown messages
bot.on('message', (msg) => {
  if (!msg.text.startsWith('/')) {
    commands.handleUnknown(bot, msg);
  }
});

// Error handling
bot.on('polling_error', (error) => {
  console.error('Polling error:', error);
});