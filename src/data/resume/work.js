/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Multimodal Art Projection',
    position: 'Core Member',
    url: 'https://huggingface.co/m-a-p',
    startDate: '2023-05-01',
    summary: `MAP is an organization joined by researchers from universities and AI research Institute all over the world.
    We are dedicated to create open source AI music models. I contributed to the collaborated project with BAAI,
    <a href='https://huggingface.co/datasets/BAAI/COIG-PC'>COIG-PC</a>, as one of major contributors. I am currently leading our project
    ChatMusician, a LLM with symbolic music capabilities, as co-first author. 
    We are also collaborating with multiple Univerisites on Music-tool-using model programming project.`,
    highlights: [
      'Developed ACL anthology and google scholar scraping scripts to collect raw dataset for instruction sets in COIG-PC.',
      'Currently Leading data mining and preprocessing, model training and model performance evaluation methods in ChatMusician.',
      'Currently contributing to Music-tool-using project on task benchmark design Music editing modules and API construction.',
    ],
  },
  {
    name: 'Federal Home Loan Bank Atlanta',
    position: 'Software Architect Intern',
    url: 'https://corp.fhlbatl.com/',
    startDate: '2020-06-01',
    endDate: '2020-08-01',
    summary: `I was in the Enterprise Architect department where we dedicated our work towards 
    improve software engineering pipelines of existing enterprise routines. For the first month of my internship,
    I was assigned to replace our existing security codebase for data visualize platform for our commercial bank clients
    with Spring Security. In the second month, my project was to implement a project-centralized internal info platform 
    for colleagues of multiple departments to post updates on projects.`,
    highlights: [
      'Implemented new security methods into enterprise database system verification programs.',
      'Re-designed and implemented backend database I/O microservices with approximately 30% increased I/O speed.',
      'Designed and implemented internal information board system enabling quick cross-department project updates and discussion.',
    ],
  },
  {
    name: 'Emory University',
    position: 'NLP Research Assistant',
    url: 'https://github.com/NLP-Suite/NLP-Suite/wiki',
    startDate: '2020-09-01',
    endDate: '2021-01-01',
    summary: `I was the leading programmer in professor Roberto Franzosi's NLP Suite team from October 2019 to Janurary 2021.
    During my time in the group, I assisted professsor Franzosi in development of hundreds of routines. He had no previous programming experience before this project,
    so at the beginning it was rough, but our collaboration got smoother during 2020. He put himself on frontend UI solely and left the entire backend to me. 
    In the summer and fall of 2020, I dedicated to reform the entire existing codebase because,
    at that time, our code has become too messy to make any new pipelines with damaging the old ones. Our collaboration provided a stable and powerful
    NLP Suite software, allowing several student researchers who were collaborating with professor Franzosi to publish Sociology papers.`,
    highlights: [
      'Designed and implemented the core codebase to deal in very general ways with all Stanford CoreNLP annotators (POS, DepRel, NER, gender, quote, sentiment analysis, parser)',
      'Designed and implemented the codebase to deal with NER locations',
      'Designed and implemented the functions to compute Ngrams, to detect spelling errors, to extract information from csv files',
      'Rewrote and reformed badly writen or redundant codebase in existing pipelines, reducing code repetition by 50%',
      'Designed and implemented journal published Sociology research paper specific data process routines, processed and cleaned the data for publications',
    ],
  },
  {
    name: 'Suzhou Fangxing IT',
    position: 'Software Engineer Intern',
    url: 'https://www.szfxdev.com/',
    startDate: '2019-06-01',
    endDate: '2018-08-01',
    summary: `Suzhou Fangxing IT is a company founded to provide software engineering solutions to
    industrial design institutes and factories. During my time at the company, we implemented the online engineering platform which
    allowed multiple designer to collaborate on CAD engineer drawings of chemical factory infrastructure. I was responsible to build loader and visualizer
    of the 3D models of platform. We introduced and demonstrated our platform on Suzhou Chemical Industry meeting. I was put on another project to use
    Yolov5 to build a real-time fire detection on CCTV data steam in chemical factory.`,
    highlights: [
      'Implemented industrial infrastructure demo module in the online engineering platform with Three.js',
      'Designed and implemented real-time fire detection using Yolov5 on CCTV data stream.',
      'Designed and implemented company website dynamic index page using React and Typescript.',
    ],
  },
];

export default work;
