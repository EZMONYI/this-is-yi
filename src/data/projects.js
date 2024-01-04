const data = [
  {
    title: 'Multi-band Equalizer Plugin',
    subtitle: 'Presented in Intro to Computer Music class final project presentation',
    date: '2022-4-20',
    link: 'https://github.com/ShanghaiCannon/simpleEQ',
    image: '/images/projects/eq.png',
    desc:
      'Built a 5 band equalizer plugin with 1 low pass filter, 1 high pass filter and 3 band pass filters.'
      + 'With a EQ curve analyze window at the top,'
      + 'and toggle for each filter.',
  },
  {
    title: 'Twitter User ETL Microservice',
    subtitle: 'Team project in CMU Cloud Computing course, ranked 1st in the final live test.',
    link: 'https://github.com/ShanghaiCannon/Twitter-analytics-webservices',
    date: '2022-11-20',
    image: '/images/projects/twitter-analytics.webp',
    desc:
      'Won the first place in the final live test in which web services host on Kubernetes clusters on AWS EC2 instances'
      + 'under a budget of 1.5$/h. Performance score evaluated on the amount of budget used, RPS and accuracy rate of return.',
  },
  {
    title: 'Uber Matching System',
    subtitle: 'Kafka and Samza service for data producer and consumer for matching customer and driver, customer and their customized advertisements',
    link: 'https://github.com/ShanghaiCannon/Uber-Matching-System',
    image: '/images/projects/stream.png',
    date: '2022-10-28',
    desc:
      'Kafka and Samza service for data producer and consumer for matching customer and driver, customer and their customized advertisements.',
  },
  {
    title: 'NYC Cab Fare Prediction service',
    subtitle: 'Trained NYC cab fare prediction model with XGBoost on Google AI platform and host model inference as google app engine api. ',
    image: '/images/projects/manh_cab.jpg',
    link: 'https://github.com/ShanghaiCannon/NYC_cab_fee',
    date: '2022-9-15',
    desc:
      'Trained NYC cab fare prediction model with XGBoost on Google AI platform and host model inference as google app engine api.'
      + 'Combined call for model inference along with google service api such as voice-to-text, map to a NYC cab fee prediction service.',
  },
  {
    title: 'Online group chat service',
    subtitle: 'A online group chat service host on kubernetes cluster on AWS EC2 instances.',
    image: '/images/projects/Wechat-logo.png',
    link: 'https://github.com/ShanghaiCannon/Online-chat-system',
    date: '2022-9-15',
    desc:
      'A online group chat service host on kubernetes cluster on AWS EC2 instances.',
  },
];

export default data;
