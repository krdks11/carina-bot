// Command handlers for the Telegram bot
const config = require('./config');
const { QuoteRequest, UserInteraction } = require('./database');
const { AuditRequest, TechConsultation, Feedback, DomainRequest } = require('./models');

// Helper function to format features as a list
const formatFeaturesList = (features) => {
  return features.map(feature => `- ${feature}`).join('\n');
};

// Command handlers
const commands = {
  // Start command handler
  start: (bot, msg) => {
    const chatId = msg.chat.id;
    const userName = msg.from.first_name;
    
    bot.sendMessage(chatId, `Hello ${userName}! 👋\n\nWelcome to ${config.companyInfo.name} Bot. We provide professional web development services.\n\nUse /help to see available commands.`);
  },
  
  // Help command handler
  help: (bot, msg) => {
    const chatId = msg.chat.id;
    
    bot.sendMessage(chatId, `*${config.companyInfo.name} Bot Commands:*\n\n
/services - View our web development services\n
/pricing - Check our pricing packages\n
/portfolio - See our previous work\n
/contact - Get in touch with us\n
/quote - Request a free quote for your project\n
/audit - Request a website audit\n
/consult - Schedule a technology consultation\n
/feedback - Share your feedback\n
/domain - Domain registration services`, {
      parse_mode: 'Markdown'
    });
  },
  
  // Services command handler
  services: (bot, msg) => {
    const chatId = msg.chat.id;
    const { website, webApp, maintenance } = config.services;
    
    bot.sendMessage(chatId, `*Our Web Development Services:*\n\n
🌐 *${website.name}*\n${formatFeaturesList(website.features)}\n\n
💻 *${webApp.name}*\n${formatFeaturesList(webApp.features)}\n\n
🔧 *${maintenance.name}*\n${formatFeaturesList(maintenance.features)}`, {
      parse_mode: 'Markdown'
    });
  },
  
  // Pricing command handler
  pricing: (bot, msg) => {
    const chatId = msg.chat.id;
    const { basic, basicPlus, standard, standardPlus, premium, premiumPlus } = config.packages;
    
    bot.sendMessage(chatId, `*Our Pricing Packages:*\n\n
💎 *${basic.name} - ${basic.price}*\n${formatFeaturesList(basic.features)}\n\n
🌟 *${basicPlus.name} - ${basicPlus.price}*\n${formatFeaturesList(basicPlus.features)}\n\n
🔷 *${standard.name} - ${standard.price}*\n${formatFeaturesList(standard.features)}\n\n
✨ *${standardPlus.name} - ${standardPlus.price}*\n${formatFeaturesList(standardPlus.features)}\n\n
🔶 *${premium.name} - ${premium.price}*\n${formatFeaturesList(premium.features)}\n\n
👑 *${premiumPlus.name} - ${premiumPlus.price}*\n${formatFeaturesList(premiumPlus.features)}\n\n
For custom requirements, use /quote to get a personalized quote.`, {
      parse_mode: 'Markdown'
    });
  },
  
  // Portfolio command handler
  portfolio: (bot, msg) => {
    const chatId = msg.chat.id;
    const portfolioList = config.portfolioProjects.map((project, index) => `${index + 1}. ${project}`).join('\n');
    
    bot.sendMessage(chatId, `*Our Portfolio:*\n\n
Here are some of our recent projects:\n\n
${portfolioList}\n\n
For more detailed examples, please visit our website or contact us directly using /contact.`, {
      parse_mode: 'Markdown'
    });
  },
  
  // Contact command handler
  contact: (bot, msg) => {
    const chatId = msg.chat.id;
    const { email, phone, website, businessHours } = config.companyInfo;
    
    bot.sendMessage(chatId, `*Contact ${config.companyInfo.name}:*\n\n
📧 Email: ${email}\n\n
📞 Phone: ${phone}\n\n
🌐 Website: ${website}\n\n
⏰ Business Hours: ${businessHours}\n\n
Feel free to reach out to us with any questions or inquiries!`, {
      parse_mode: 'Markdown'
    });
  },
  
  // Quote command handler
  quote: (bot, msg) => {
    const chatId = msg.chat.id;
    
    bot.sendMessage(chatId, `To request a free quote for your project, please provide the following information:\n\n
1. Your name\n2. Your email\n3. Project type (website, web app, e-commerce, etc.)\n4. Brief project description\n5. Estimated timeline\n\n
Our team will get back to you within 24 hours with a personalized quote.`);
  },
  
  // Admin command handler
  admin: async (bot, msg) => {
    const chatId = msg.chat.id;
    const adminIds = process.env.ADMIN_IDS ? process.env.ADMIN_IDS.split(',').map(id => id.trim()) : [];

    if (!adminIds.includes(chatId.toString())) {
      return bot.sendMessage(chatId, 'You are not authorized to use this command.');
    }

    try {
      const quoteRequests = await QuoteRequest.find().sort({ createdAt: -1 });
      const userInteractions = await UserInteraction.find().sort({ timestamp: -1 });

      let adminMessage = '*Admin Dashboard*\n\n';

      // Quote Requests Summary
      adminMessage += '*Quote Requests:*\n';
      if (quoteRequests.length > 0) {
        quoteRequests.forEach(quote => {
          adminMessage += `\n📋 *${quote.name}*\n`;
          adminMessage += `📧 Email: ${quote.email}\n`;
          adminMessage += `🏷 Project: ${quote.projectType}\n`;
          adminMessage += `📝 Status: ${quote.status}\n`;
          adminMessage += `📅 Date: ${quote.createdAt.toLocaleDateString()}\n`;
          adminMessage += '-------------------';
        });
      } else {
        adminMessage += 'No quote requests yet.\n';
      }

      // User Interactions Summary
      adminMessage += '\n\n*Recent User Interactions:*\n';
      if (userInteractions.length > 0) {
        userInteractions.slice(0, 10).forEach(interaction => {
          adminMessage += `\n👤 ${interaction.userName}\n`;
          adminMessage += `🤖 Command: ${interaction.command}\n`;
          adminMessage += `📅 Date: ${interaction.timestamp.toLocaleDateString()}\n`;
          adminMessage += '-------------------';
        });
      } else {
        adminMessage += 'No user interactions yet.\n';
      }

      bot.sendMessage(chatId, adminMessage, { parse_mode: 'Markdown' });
    } catch (error) {
      console.error('Admin dashboard error:', error);
      bot.sendMessage(chatId, 'Error fetching admin data. Please try again later.');
    }
  },

  // Handle unknown messages
  handleUnknown: (bot, msg) => {
    const chatId = msg.chat.id;
    
    // If the message is not a command
    if (!msg.text.startsWith('/')) {
      bot.sendMessage(chatId, `✨ Thank you for your message! 🙏\n\n🚀 Our dedicated team will get back to you soon!\n\n📚 Use /help to explore our amazing services and features! 🌟`, {
        parse_mode: 'Markdown'
      });
    }
  },

  // Website Audit command handler
  audit: (bot, msg) => {
    const chatId = msg.chat.id;
    
    bot.sendMessage(chatId, `📊 *Request Your Website Audit* 📊\n\n📝 Please provide the following information:\n\n1️⃣ Your name\n2️⃣ Your email\n3️⃣ Website URL\n4️⃣ Specific concerns (performance, SEO, security, etc.)\n\n🔍 Our expert team will analyze your website and provide a detailed report within 48 hours!`, {
      parse_mode: 'Markdown'
    });
  },

  // Technology Consultation command handler
  consult: (bot, msg) => {
    const chatId = msg.chat.id;
    
    bot.sendMessage(chatId, `💡 *Book Your Free Technology Consultation* 💡\n\n📝 Schedule your session by providing:\n\n1️⃣ Your name\n2️⃣ Your email\n3️⃣ Project type\n4️⃣ Preferred technology stack (if any)\n5️⃣ Project requirements\n\n🤝 Our experts will contact you to schedule your personalized consultation!`, {
      parse_mode: 'Markdown'
    });
  },

  // Feedback command handler
  feedback: (bot, msg) => {
    const chatId = msg.chat.id;
    
    bot.sendMessage(chatId, `⭐ *Share Your Valuable Feedback* ⭐\n\n📝 Please share with us:\n\n1️⃣ Your rating (1-5 stars)\n2️⃣ Comments about our service\n3️⃣ Type of service used\n\n🙏 Thank you for helping us improve our services!`, {
      parse_mode: 'Markdown'
    });
  },

  // Domain Registration command handler
  domain: (bot, msg) => {
    const chatId = msg.chat.id;
    
    bot.sendMessage(chatId, `🌐 *Secure Your Perfect Domain* 🌐\n\n📝 Please provide the following details:\n\n1️⃣ Your name\n2️⃣ Your email\n3️⃣ Desired domain name\n4️⃣ Alternative domain names (optional)\n\n✨ We'll check availability and help you register your perfect domain!`, {
      parse_mode: 'Markdown'
    });
  }
};

module.exports = commands;