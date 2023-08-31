export const AppsInputData = {
  'sentiment-analyze': {
    api: 'sentiment',
    values: [
      { name: 'input', placeHolder: 'Input' },
      { name: 'parameters', placeHolder: 'Parameters' }
    ]
  },
  'text-summarize': {
    api: 'textsummarizer',
    values: [
      { name: 'input', placeHolder: 'Input' }
      //   { name: 'parameters', placeHolder: '' }
    ]
  },
  'entity-extract': {
    api: 'entityextracter',
    values: [
      { name: 'input', placeHolder: 'Input' },
      { name: 'parameters', placeHolder: 'Parameters' }
    ]
  },
  'data-transformer': {
    api: 'datatransformer',
    values: [
      { name: 'instruction', placeHolder: 'Instruction' },
      { name: 'text', placeHolder: 'Text' }
    ]
  },
  'video-summerize': {
    api: 'videosummarizer',
    values: [
      { name: 'yturl', placeHolder: 'youtube url' }
      //   { name: 'text', placeHolder: 'Text' }
    ]
  },
  'sql-write': {
    api: 'sqlwriter',
    values: [
      { name: 'input', placeHolder: 'Input' }
      //   { name: 'text', placeHolder: 'Text' }
    ]
  },
  'text-classification': {
    api: 'textclassification',
    values: [
      { name: 'input', placeHolder: 'Input' },
      { name: 'parameters', placeHolder: 'Parameters' }
    ]
  },
  'language-translate': {
    api: 'translate',
    values: [
      { name: 'toLang', placeHolder: 'to Language' },
      { name: 'input', placeHolder: 'Input' }
    ]
  }
};
