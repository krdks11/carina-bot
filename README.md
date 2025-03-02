# CarinaDevWorks Telegram Bot

A Telegram bot for CarinaDevWorks web development services that provides information about services, pricing, and allows potential clients to request quotes.

## Features

- View web development services
- Check pricing packages
- Browse portfolio projects
- Contact information
- Request quotes for projects

## Project Structure

- `index.js` - Main bot application file
- `commands.js` - Command handlers for the bot
- `config.js` - Configuration settings and content
- `.env` - Environment variables (bot token)

## Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your Telegram bot token:

```
BOT_TOKEN=your_telegram_bot_token_here
```

### Option 2: Deploy on Railway

1. Create a Railway account at https://railway.app

2. Create a new project and connect your GitHub repository

3. Add environment variables in Railway dashboard:
   - `BOT_TOKEN`: Your Telegram bot token
   - `MONGODB_URI`: Your MongoDB connection string
   - `ADMIN_IDS`: Comma-separated list of admin chat IDs

4. Configure the start command in `package.json`:
```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

5. Deploy your project - Railway will automatically deploy when you push to your repository

### Option 3: Deploy on Render

1. Create a Render account at https://render.com

2. Create a new Web Service

3. Connect your GitHub repository

4. Configure the service:
   - Build Command: `npm install`
   - Start Command: `node index.js`

5. Add environment variables:
   - `BOT_TOKEN`: Your Telegram bot token
   - `MONGODB_URI`: Your MongoDB connection string
   - `ADMIN_IDS`: Comma-separated list of admin chat IDs

6. Deploy your service - Render will automatically deploy when you push to your repository

## Running the Bot

### Development mode

```bash
npm run dev
```

### Production mode

```bash
npm start
```

## Available Commands

- `/start` - Start the bot and get a welcome message
- `/help` - View all available commands
- `/services` - View web development services
- `/pricing` - Check pricing packages
- `/portfolio` - See previous work examples
- `/contact` - Get contact information
- `/quote` - Request a free quote for your project

## Customization

You can customize the bot by modifying the `config.js` file, which contains all the company information, service details, pricing packages, and portfolio projects.