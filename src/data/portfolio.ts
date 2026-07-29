import {
  PersonalDetails,
  SkillCategory,
  TimelineItem,
  Project,
  Achievement,
  Certification,
} from '@/types';

export const personalDetails: PersonalDetails = {
  name: 'KANIKA PITALIYA',
  primaryTitle: 'Data Scientist • ML & AI Engineer',
  supportingIdentity: 'Statistics × Machine Learning × Generative AI',
  heroDescription:
    'I build intelligent systems at the intersection of data, machine learning and modern AI — from statistical models that uncover what drives real-world outcomes to RAG and multi-agent systems designed to reason over knowledge and automate complex workflows.',
  rotatingDescriptors: [
    'Data Scientist',
    'ML Engineer',
    'AI Builder',
    'Statistical Thinker',
  ],
  aboutNarrative: [
    'I am an MSc Data Analytics student with an academic foundation spanning both Statistics and Computer Science. That combination shaped how I approach technology: I am interested not only in building systems that work, but in understanding the data, assumptions and measurable evidence behind why they work.',
    'My work currently sits across Data Science, Machine Learning and AI engineering. I have worked on statistical modelling, NLP, retrieval-augmented generation, multi-agent systems, vector databases, AI observability and software automation.',
    'I enjoy taking a problem from exploration to implementation — understanding the data, identifying useful patterns, selecting an appropriate modelling approach, evaluating the result, and eventually turning it into something people can actually use.',
    'My recent work includes an agentic meeting-intelligence platform, an evaluated RAG knowledge assistant, startup valuation modelling, and CAD workflow automation.',
    'I am particularly interested in production-oriented ML/AI systems where statistical thinking, software engineering and intelligent automation come together.',
  ],
  currentlyExploring: [
    'Production ML systems',
    'Agentic AI',
    'RAG evaluation',
    'Transformers',
    'Data Engineering',
    'ML observability',
    'Cloud ML infrastructure',
  ],
  location: 'India',
  email: 'kanikapitaliya.tech@gmail.com',
  github: 'https://github.com/kanikapitaliya',
  linkedin: 'https://linkedin.com/in/kanika-pitaliya',
  resumeUrl: '/resume/resume.pdf',
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'data-science-stats',
    category: 'DATA SCIENCE & STATISTICS',
    description: 'Statistical reasoning, hypothesis testing, and quantitative data exploration.',
    skills: [
      'Python',
      'R',
      'Statistical Modeling',
      'Regression Analysis',
      'Hypothesis Testing',
      'Statistical Inference',
      'Exploratory Data Analysis',
      'Feature Engineering',
      'Predictive Modeling',
      'Model Evaluation',
      'Regression Diagnostics',
      'Correlation Analysis',
      'Data Visualization',
    ],
  },
  {
    id: 'machine-learning',
    category: 'MACHINE LEARNING',
    description: 'Supervised & unsupervised learning models, tuning, and rigorous validation.',
    skills: [
      'Scikit-learn',
      'Supervised Learning',
      'Unsupervised Learning',
      'Regression',
      'Classification',
      'Clustering',
      'Feature Selection',
      'Model Validation',
      'Hyperparameter Tuning',
      'Performance Evaluation',
    ],
  },
  {
    id: 'generative-ai-nlp',
    category: 'GENERATIVE AI & NLP',
    description: 'LLM applications, RAG pipelines, multi-agent architectures, and evaluation.',
    skills: [
      'LLMs',
      'Retrieval-Augmented Generation (RAG)',
      'Agentic AI',
      'Multi-Agent Systems',
      'Prompt Engineering',
      'NLP',
      'Embeddings',
      'Semantic Search',
      'Vector Retrieval',
      'Context-Grounded Generation',
      'LLM Evaluation',
    ],
  },
  {
    id: 'agent-frameworks',
    category: 'AI / AGENT FRAMEWORKS',
    description: 'Orchestration tools, agent communication protocols, and AI observability.',
    skills: [
      'LangChain',
      'Google ADK',
      'A2A',
      'Lyzr',
      'Sentence-Transformers',
      'Langfuse',
      'OpenTelemetry',
    ],
  },
  {
    id: 'data-databases',
    category: 'DATA & DATABASES',
    description: 'Relational data processing, vector stores, and scalable data pipelines.',
    skills: [
      'SQL',
      'MySQL',
      'PostgreSQL',
      'ChromaDB',
      'Qdrant',
      'Vector Databases',
      'Data Processing',
      'Data Pipelines',
      'Hadoop / HDFS',
    ],
  },
  {
    id: 'engineering',
    category: 'ENGINEERING',
    description: 'Production web APIs, modular OOP architectures, and automation tools.',
    skills: [
      'FastAPI',
      'Streamlit',
      'Gradio',
      'Git',
      'GitHub',
      'REST APIs',
      'C#',
      '.NET Framework',
      'Object-Oriented Programming',
    ],
  },
  {
    id: 'ml-dl-ecosystem',
    category: 'ML / DL ECOSYSTEM',
    description: 'Core numerical computation, deep learning frameworks, and data manipulation.',
    skills: [
      'TensorFlow',
      'PyTorch',
      'Keras',
      'Pandas',
      'NumPy',
    ],
  },
];

export const timelineItems: TimelineItem[] = [
  {
    id: 'bsc-stats-cs',
    type: 'EDUCATION',
    title: 'BSc — Computer Science & Statistics',
    subtitle: 'Undergraduate Degree',
    period: 'Completed',
    narrative:
      'Built my foundation across two complementary disciplines: Statistics taught me to reason about uncertainty, distributions, relationships and evidence, while Computer Science gave me the tools to translate that reasoning into software and computational solutions.',
    focus: [
      'Statistics',
      'Computer Science',
      'Programming',
      'Databases',
      'Mathematical Foundations',
    ],
  },
  {
    id: 'hle-glascoat-internship',
    type: 'EXPERIENCE',
    title: 'Software Development / Automation Intern',
    subtitle: 'HLE Glascoat Ltd.',
    location: 'Surat, Gujarat',
    period: 'Aug 2024 – Dec 2024',
    narrative:
      'Worked with the Software Automation team on reducing repetitive engineering work through parameter-driven CAD automation.\n\nDeveloped modular C#/.NET components that transformed user-defined engineering parameters into Solid Edge machine models, connecting structured engineering data with automated design workflows.\n\nThe experience introduced me to production software development, engineering datasets, OOP-heavy systems and the practical value of automating processes that would otherwise require repeated manual work.',
    technologies: [
      'C#',
      '.NET Framework',
      'SQL',
      'OOP',
      'Solid Edge',
      'Software Automation',
    ],
  },
  {
    id: 'msc-data-analytics',
    type: 'EDUCATION',
    title: 'MSc — Data Analytics',
    subtitle: 'Christ University',
    location: 'Bangalore',
    period: 'Present',
    narrative:
      'Deepening my work across machine learning, statistics, NLP, data engineering and Generative AI while building systems that move beyond academic modelling into deployable applications.\n\nMy recent focus has been on combining rigorous evaluation with modern AI systems — particularly RAG, agentic architectures, statistical modelling and end-to-end ML workflows.',
    focus: [
      'Machine Learning',
      'Statistical Modeling',
      'NLP',
      'Generative AI',
      'Data Engineering',
      'Analytics',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'rag-data-engineering-assistant',
    title: 'RAG Data Engineering Assistant',
    category: 'RAG • NLP • Knowledge Systems',
    oneLiner:
      'Retrieval-augmented knowledge assistant grounding technical Data Engineering answers in retrieved evidence rather than relying only on model memory.',
    technologies: [
      'Python',
      'LangChain',
      'ChromaDB',
      'Sentence-Transformers',
      'Streamlit',
    ],
    featured: true,
    metrics: [
      { value: '~68%', label: 'Hallucination Reduction' },
      { value: '~91%', label: 'Faithfulness' },
      { value: '~72%', label: 'Baseline Faithfulness' },
      { value: '~85%', label: 'Recall@3' },
      { value: '~80%', label: 'Lookup Time Saved' },
    ],
    problem:
      'LLMs can answer technical questions fluently even when their responses are unsupported by domain knowledge. The goal was to build a knowledge assistant capable of grounding technical Data Engineering answers in retrieved evidence rather than relying only on model memory.',
    approach:
      'Built an end-to-end Retrieval-Augmented Generation pipeline that transforms domain documents into semantic embeddings, retrieves the most relevant knowledge for a query, and supplies that context to the language model before generation. Implemented semantic retrieval using Sentence-Transformers and ChromaDB and exposed the complete workflow through an interactive Streamlit application.',
    engineering:
      'Engineered chunking strategies and embedding pipelines to parse complex data engineering documentation. Stored vector representations in ChromaDB and configured LangChain query execution to inject top-k evidence directly into the LLM context.',
    evaluation:
      'Treated evaluation as a core part of the project rather than simply demonstrating that the chatbot responds. Measured faithfulness (~91% RAG vs ~72% non-RAG baseline), Recall@3 (~85%), and hallucination reduction (~68%), estimating an ~80% reduction in technical information lookup time.',
    keyInsight:
      'Grounding generation in verified vector embeddings drastically reduces hallucinated code syntax and provides verifiable citations for data engineering queries.',
    evaluationNote:
      'Evaluation metrics are project benchmark results and can be updated from the portfolio data configuration.',
    interestingThemes: [
      'Retrieval-grounded generation',
      'Semantic search',
      'Hallucination evaluation',
      'Faithfulness',
      'Recall@K',
      'Vector databases',
      'Knowledge retrieval',
    ],
    githubUrl: 'https://github.com/kanikapitaliya',
  },
  {
    id: 'meetmaxxing',
    title: 'MeetMaxxing',
    category: 'Agentic AI • Multi-Agent Systems • Meeting Intelligence',
    oneLiner:
      'Nine-agent collaborative architecture turning meeting recordings and transcripts into structured, searchable organizational knowledge.',
    technologies: [
      'Python',
      'Google ADK',
      'A2A',
      'gRPC',
      'Qdrant',
      'FastAPI',
      'Langfuse',
      'OpenTelemetry',
      'Lyzr',
    ],
    featured: true,
    metrics: [
      { value: '9', label: 'Specialized AI Agents' },
      { value: '1', label: 'Central Orchestrator' },
      { value: '50+', label: 'Live Meetings Tested' },
      { value: '~75%', label: 'Agent Task Success' },
    ],
    problem:
      'Meetings contain decisions, commitments, deadlines and context that are often scattered across transcripts or lost once the meeting ends. MeetMaxxing explores how specialized AI agents can transform meetings into structured, searchable organizational knowledge.',
    approach:
      'Designed a nine-agent architecture where specialized agents handle different meeting-intelligence responsibilities while a central Orchestrator Agent coordinates execution. Used Google ADK with A2A/gRPC communication for agent orchestration rather than placing the entire workflow inside one monolithic LLM prompt.',
    engineering:
      'Implemented Qdrant-backed persistent RAG memory so previous meeting decisions, action items and context can be semantically retrieved across sessions. Added Langfuse and OpenTelemetry observability around FastAPI-powered inference to trace agent and LLM execution. Integrated into a Chrome Extension for real-time meeting workflows.',
    evaluation:
      'Tested across 50+ live meeting transcripts with ~75% task success. Selected as a Top 10 Finalist out of 270 participants and presented at the Grand Finale of the hackathon.',
    keyInsight:
      'Decoupling monolithic prompts into specialized agents with inter-agent gRPC protocols ensures traceably reliable task breakdown and persistent organizational recall.',
    highlightNote:
      'Top 10 Finalist among 270 participants and presented at the hackathon Grand Finale.',
    interestingThemes: [
      'Multi-agent orchestration',
      'Agent-to-Agent communication',
      'Persistent organizational memory',
      'Semantic retrieval',
      'LLM observability',
      'Real-time AI workflows',
    ],
    githubUrl: 'https://github.com/kanikapitaliya',
  },
  {
    id: 'startup-valuation-analysis',
    title: 'Startup Valuation & Investment Drivers Analysis',
    category: 'Data Science • Statistics • Predictive Modeling',
    oneLiner:
      'Multivariate statistical modeling and regression diagnostics identifying key valuation drivers across 500 startup records.',
    technologies: [
      'R',
      'Statistical Modeling',
      'Simple Linear Regression',
      'Multiple Linear Regression',
      'EDA',
      'Statistical Inference',
      'Regression Diagnostics',
      'Feature Engineering',
      'Model Evaluation',
    ],
    featured: true,
    dataset: '500 startup records',
    metrics: [
      { value: '500', label: 'Startup Records' },
      { value: '0.845', label: 'Test R²' },
      { value: '31%', label: 'RMSE Reduction' },
      { value: '0.648', label: 'Funding Standardized β' },
    ],
    problem:
      'Startup valuation is influenced by many interconnected factors — funding, revenue, company size, industry, maturity and investment history. The project investigated which of these factors actually explain valuation differences and whether a multivariate statistical model could improve predictive performance over a simple baseline.',
    approach:
      'Started with exploratory analysis to understand distributions, missing values, correlations and potential modelling issues. Used median imputation, log transformations, correlation analysis, feature encoding, Simple Linear Regression, Multiple Linear Regression, VIF analysis, residual diagnostics, and statistical significance testing.',
    engineering:
      'Applied a log transformation to reduce valuation skewness from 3.8 → 0.3. Conducted VIF analysis to eliminate multicollinearity among revenue and funding interactions. Improved Test R² from 0.672 to 0.845 alongside a 31% reduction in RMSE.',
    evaluation:
      'Total funding emerged as the strongest valuation predictor (β = 0.648, p < 0.001). The analysis indicated that capital raised and industry positioning explained substantially more variation in valuation than startup age after controlling for other factors.',
    keyInsight:
      'Addressing heavy right-tail skewness with log-normal transformations and controlling for collinear predictors produces far more generalizable valuation models.',
    interestingThemes: [
      'Statistical inference',
      'Regression modelling',
      'Predictor significance',
      'Multicollinearity diagnostics',
      'Residual analysis',
      'Distribution transformation',
      'Business interpretation',
    ],
    githubUrl: 'https://github.com/kanikapitaliya',
  },
];

export const achievements: Achievement[] = [
  {
    id: 'meetmaxxing-finalist',
    title: 'MeetMaxxing',
    award: 'Top 10 Finalist',
    description:
      'Selected among 270 participants and presented at the hackathon Grand Finale for designing a 9-agent meeting intelligence platform.',
  },
  {
    id: 'national-stats-day',
    title: 'National Statistics Day',
    award: '3rd Prize — Data Storytelling',
    description:
      'Recognized for statistical storytelling using RBI, TRAI, and NFHS public datasets to investigate India’s digital revolution accessibility.',
  },
  {
    id: 'inter-uni-stats-comp',
    title: 'Inter-University Statistics Competition',
    award: '1st Prize Winner',
    description:
      'Applied probability theory, hypothesis testing, and rigorous statistical reasoning to solve complex competitive analytics challenges.',
  },
];

export const certifications: Certification[] = [
  {
    id: 'stanford-ml',
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI / Stanford Online',
    date: 'Certified',
  },
  {
    id: 'ibm-python-ds',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    date: 'Certified',
  },
  {
    id: 'ibm-intro-ai',
    title: 'Introduction to Artificial Intelligence',
    issuer: 'IBM',
    date: 'Certified',
  },
  {
    id: 'ibm-python-project',
    title: 'Python Project for Data Science',
    issuer: 'IBM',
    date: 'Certified',
  },
];
