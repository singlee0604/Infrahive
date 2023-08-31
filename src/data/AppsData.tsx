const AppsData = {
  'sentiment-analyze': {
    name: 'Sentiment Analyze',
    logo: '/assets/images/apps/sentiment.png',
    color: 'bg-orange-400',
    desc: [
      'Assess the sentiment of any text as positive or negative.',
      'Sentiment Analyze lets anyone perform sentiment analysis, at scale!  Easily assess the sentiment of any text from positive to negative and process large volumes of data with ease.'
    ],
    features: [
      {
        heading: 'Configure',
        desc: 'Setup multiple sentiment analyze apps, each configured to different use cases'
      },
      {
        heading: 'Specify attributes',
        desc: 'Specify one or more attributes (e.g., product features, customer types, pricing) that you want to assess sentiment'
      },
      {
        heading: 'Customize score range',
        desc: 'Set scores to any range (e.g., from -1 to +1), include or exclude decimals'
      }
    ],
    integrate: [
      {
        name: '',
        url: '',
        logo: ''
      }
    ],
    useCases: [
      {
        heading: 'Product Research',
        desc: 'Learn how customers feel about specific elements of your products and services by extracting attribute-specific sentiment from customer reviews and support tickets'
      },
      {
        heading: 'Sales',
        desc: 'Review sales emails and transcripts to understand customer sentiment and improve coaching to close more deals'
      },
      {
        heading: 'Brand Monitoring',
        desc: 'Analyze social media posts to understand trends on how your customers are feeling about you'
      },
      {
        heading: 'Customer Experience',
        desc: 'Analyze multiple customer touch points to understand potential areas that could be causing churn'
      }
    ]
  },
  'text-summarize': {
    name: 'Text Summarize',
    logo: '/assets/images/apps/text_summarise.png',
    color: 'bg-green-400',
    desc: [
      'Summarize any text, exactly how you need it.',
      'Rapidly summarize any text-based document, whether long or short! Save hours you used to spend review and summarizing interview transcripts, sales calls, or meeting minutes. '
    ],
    features: [
      {
        heading: 'URL-based input ',
        desc: 'simply drop a link to any public website and generate the exact summary you need'
      },
      {
        heading: '',
        desc: 'Takes text up to 50,000 characters or ~15 single spaced pages!'
      },
      {
        heading: '',
        desc: 'Leverages GPT-4 (and soon Claude) for more precise summaries'
      }
    ],
    integrate: [
      {
        name: '',
        url: '',
        logo: ''
      }
    ],
    useCases: [
      {
        heading: 'News Article Summaries',
        desc: 'Summarize key points from news articles to cut out the noise'
      },
      {
        heading: 'Website Product Summaries',
        desc: 'Summarize company product highlights and differentiators'
      },
      {
        heading: 'Executive Meetings',
        desc: 'Quickly recap executive leadership meetings'
      },
      {
        heading: 'Sales Transcripts',
        desc: 'Rapidly summarize sales calls to accelerate coaching and deal cycles'
      },
      {
        heading: 'Company All Hands',
        desc: 'Easily generate summaries of All Hands that you can use to send a recap to your whole team'
      }
    ]
  },
  'entity-extract': {
    name: 'Entity Extract',
    color: 'bg-blue-500',
    logo: '/assets/images/apps/entity.png',
    desc: [
      'Detect, extract, and count relevant keywords and phrases from text data',
      'Entity Extract lets you easily detect, extract, and count important items and phrases (e.g., names, addresses, email addresses) from any text, making it easy to analyze and pull those entities into your workflows like sales, marketing, and customer support.'
    ],
    features: [
      {
        heading: 'Configure',
        desc: 'Setup multiple entity extraction apps, each configured to different use cases'
      },
      {
        heading: 'Specify entities',
        desc: 'Specify one or more entities (e.g., product features, customer types, pricing) that you want to extract OR let our AI select entities for you'
      },
      {
        heading: 'Multi-language support',
        desc: 'Analyze text and extract entities from any language'
      }
    ],
    integrate: [
      {
        name: '',
        url: '',
        logo: ''
      },
      {
        name: '',
        url: '',
        logo: ''
      },
      {
        name: '',
        url: '',
        logo: ''
      }
    ],
    useCases: [
      {
        heading: 'Customer Research',
        desc: 'Extract customer information like names, phone numbers, email, company name or username from any text data'
      },
      {
        heading: 'Competitive Analysis',
        desc: 'Pull out specific entities from articles, press releases, and industry reports, companies to gather insights about competitors'
      },
      {
        heading: 'RFP Analysis',
        desc: 'Automatically identify key terms in regulations and contracts to ensure compliance'
      }
    ]
  },
  'data-transformer': {
    name: 'Data Transformer',
    logo: '/assets/images/apps/transformer.png',
    color: 'bg-blue-500',
    desc: [
      'Instantly format, transform, or enrich any data',
      'Magic Transform 🎩 lets you instantly format, transform, and enrich any data using AI.'
    ],
    features: [
      {
        heading: 'Configure',
        desc: 'Set up your magic transformer and then modify multiple copies to fit your needs'
      },
      {
        heading: '',
        desc: 'Works with and recognizes any data type - text, numbers, dates, email addresses, zip codes, currencies'
      },
      {
        heading: '',
        desc: 'Flexible to your imagination: The possibilities are endless!'
      }
    ],
    integrate: [
      {
        name: '',
        url: '',
        logo: ''
      }
    ],
    useCases: [
      {
        heading: 'Convert Text',
        desc: 'Convert text - from uppercase to lowercase, from text to HTML, JSON to XML, or any other text transformation you can think up!'
      },
      {
        heading: 'Understand Symbols and Currency',
        desc: 'Translate currencies, emojis, dates, or any other strings.'
      },
      {
        heading: 'Transform data',
        desc: 'Convert data from any format to any format - ex: zip codes ➡️ city, US Address ➡️ International format, string ➡️ number'
      }
    ]
  },
  'video-summerize': {
    name: 'Video Summarize',
    logo: '/assets/images/apps/video.png',
    color: 'bg-orange-400',
    desc: ['Summarize any video or audio file from a Google Drive URL'],
    features: [
      {
        heading: '',
        desc: ''
      }
    ],
    integrate: [
      {
        name: '',
        url: '',
        logo: ''
      }
    ],
    useCases: [
      {
        heading: '',
        desc: ''
      }
    ]
  },
  'sql-write': {
    name: 'SQL Write with Pasted Schema',
    logo: '/assets/images/apps/sql.png',
    color: 'bg-blue-500',
    desc: ['Write SQL from natural language by pasting in your schema with the request.'],
    features: [
      {
        heading: '',
        desc: ''
      }
    ],
    integrate: [
      {
        name: '',
        url: '',
        logo: ''
      }
    ],
    useCases: [
      {
        heading: 'Streamlined Data Analysis',
        desc: 'Accelerate data analysis by transforming complex table schemas into SQL queries.'
      }
    ]
  },
  'text-classification': {
    name: 'Text Classification',
    logo: '/assets/images/apps/text_classificationi.png',
    color: 'bg-yellow-500',
    desc: [
      'Classify whether text belongs to one or more categories.',
      "NLP classification used to require loads of training data and a large technical team. Now anyone can perform it instantly! Text Classify's easy-to-use and customizable settings let you quickly and accurately classify your text data."
    ],
    features: [
      {
        heading: '',
        desc: 'Easily configure one or many classifiers to your exact use case'
      },
      {
        heading: '',
        desc: 'Select one or multiple categories: add and manage multiple categories for each classifier you make'
      },
      {
        heading: '',
        desc: 'Multiple language support: classify text in any language'
      }
    ],
    integrate: [
      {
        name: '',
        url: '',
        logo: ''
      }
    ],
    useCases: [
      {
        heading: 'Transaction Processing',
        desc: 'Classify financial transactions - reduce fraud, improve data visibility, and save money on manual tagging activities'
      },
      {
        heading: 'Customer Support',
        desc: 'Auto-tag support tickets by type and priority - improve agent output and reduce time to resolve'
      },
      {
        heading: 'Sales',
        desc: 'Review SDR sales call transcripts and qualify / disqualify opportunities - avoid wasted selling time AEs and pinpoint coaching for your SDRs'
      }
    ]
  },
  'language-translate': {
    name: 'Language Translate',
    logo: '/assets/images/apps/translator.png',
    color: 'bg-green-400',
    desc: [
      'Translate text from any language to any language.',
      'Enter a text to translate, the "from Language" (use "Detect" to automatically identify) and the "to Language". The output will contain the translated text.'
    ],
    features: [
      {
        heading: 'Select or Detect',
        desc: 'Either specify the language you want to translate from or let the AI detect it for you'
      },
      {
        heading: 'Coming soon - Bulk translate',
        desc: 'Coming soon - Bulk translate'
      }
    ],
    integrate: [
      {
        name: '',
        url: '',
        logo: ''
      }
    ],
    useCases: [
      {
        heading: 'Document Translation',
        desc: "Don't waste time and money on expensive translation services. Translate any document large or small!"
      },
      {
        heading: 'Customer Feedback',
        desc: "Instantly translate support tickets, customer reviews, and NPS survey comments to better understand your customer's needs"
      },
      {
        heading: 'Language Detection',
        desc: 'Instantly detect and translate any language - helpful for quickly understanding and diagnosing chat conversations'
      }
    ]
  }
};

export default AppsData;
