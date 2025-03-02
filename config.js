// Configuration file for the Telegram bot

require('dotenv').config();

module.exports = {
  // Bot configuration
  botToken: process.env.BOT_TOKEN,
  
  // Company information
  companyInfo: {
    name: 'CarinaDevWorks',
    email: 'info@carinadevworks.com',
    phone: '+1 (555) 123-4567',
    website: 'www.carinadevworks.com',
    businessHours: 'Monday to Friday, 9 AM - 6 PM EST'
  },
  
  // Service packages
  packages: {
    basic: {
      name: 'Static Website Package',
      price: '₹3,999',
      features: [
        'Professional static website (up to 5 pages)',
        'Mobile responsive design',
        'Contact form integration',
        'Basic SEO optimization',
        '1 month support',
        'Free domain registration (1 year)',
        '1 business email account'
      ]
    },
    basicPlus: {
      name: 'Static Website Plus Package',
      price: '₹5,999',
      features: [
        'Professional static website (up to 8 pages)',
        'Mobile responsive design',
        'Advanced contact form with file upload',
        'Enhanced SEO optimization',
        'Google Analytics integration',
        'Social media widgets',
        '2 months support',
        'Monthly performance report',
        //'5GB premium hosting',
        'Advanced SEO tools access'
      ]
    },
    standard: {
      name: 'Dynamic Website Package',
      price: '₹8,999',
      features: [
        'Dynamic website with CMS',
        'Up to 10 pages',
        'Mobile responsive design',
        'Advanced contact forms',
        'Standard SEO setup',
        'Social media integration',
        '5GB storage space',
       '1 business email accounts',
        'Free SSL certificate',
        'Basic analytics integration',
        '1 year free hosting',
        '3 months support'
      ]
    },
    standardPlus: {
      name: 'Dynamic Website Plus Package',
      price: '₹11,999',
      features: [
        'Dynamic website with advanced CMS',
        'Up to 15 pages',
        'Mobile responsive design with animations',
        'Advanced forms with database integration',
        'Comprehensive SEO setup',
        'Advanced social media integration',
        '10GB storage space',
        '5 business email accounts',
        'Premium SSL certificate',
        'Advanced analytics with custom reports',
        'Live chat integration',
        'Basic e-commerce features (up to 20 products)',
        'Global CDN integration',
        'Enhanced security features',
        '4 months support',
        'Monthly maintenance'
      ]
    },
    premium: {
      name: 'Premium Business Package',
      price: '₹16,999',
      features: [
        'Full-featured dynamic website',
        'Custom web application features',
        'Unlimited pages',
        'Advanced CMS integration',
        'E-commerce functionality (up to 100 products)',
        'Multi-language support',
        'Advanced SEO optimization',
        'Social media integration & marketing',
        'Priority 24/7 support',
        'Advanced security features (WAF, DDoS protection)',
        '30GB storage space',
        '10 business email accounts',
        'Premium SSL certificate',
        'Advanced analytics & reporting',
        'Database integration',
        'Custom API integration',
        'Digital marketing integration',
        'Weekly performance audits',
        'Automated backup system',
        'Performance optimization suite',
        '6 months maintenance & support'
      ]
    },
    premiumPlus: {
      name: 'Premium Business Plus Package',
      price: '₹21,999',
      features: [
        'Enterprise-grade dynamic website',
        'Custom web application features',
        'Unlimited pages with version control',
        'Enterprise CMS with workflow',
        'Advanced e-commerce (unlimited products)',
        'Multi-language support with auto-translation',
        'Enterprise SEO suite',
        'Comprehensive social media marketing',
        'Dedicated 24/7 support team',
        'Enterprise security suite',
        'Dedicated server option',
        '100GB storage space',
        '20 business email accounts',
        'Extended Validation SSL certificate',
        'Custom analytics dashboard',
        'Advanced database integration',
        'Multiple API integrations',
        'Complete digital marketing suite',
        'Weekly performance audits',
        'Automated backup with disaster recovery',
        '12 months priority maintenance & support',
        'Dedicated project manager'
      ]
    }
  },
  
  // Services offered
  services: {
    website: {
      name: 'Website Development',
      features: [
        'Custom website design',
        'E-commerce solutions',
        'WordPress development',
        'Landing pages'
      ]
    },
    webApp: {
      name: 'Web Application Development',
      features: [
        'Custom web applications',
        'Progressive Web Apps (PWA)',
        'SaaS solutions'
      ]
    },
    maintenance: {
      name: 'Maintenance & Support',
      features: [
        'Website maintenance',
        'Performance optimization',
        'Security updates',
        'Content management'
      ]
    }
  },
  
  // Portfolio projects
  portfolioProjects: [
    'E-commerce website for a fashion brand',
    'Booking system for a local restaurant',
    'Real estate listing platform',
    'Educational institution website',
    'Healthcare service provider portal'
  ]
};