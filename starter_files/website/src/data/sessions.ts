export interface Session {
  id: string;
  title: string;
  speaker: string;
  category: 'Keynote' | 'Breakout' | 'Learning Lab' | 'Customer Story' | 'Expo';
  day: 'Day 1' | 'Day 2' | 'Day 3';
  time: string;
  location: string;
  description: string;
  details?: {
    fullDescription: string;
    takeaways: string[];
    tracks: string[];
    level?: string;
    speakerBio?: string;
  };
}

export const SESSIONS: Session[] = [
  // Day 1
  {
    id: 'd1-keynote-opening',
    title: 'The Future of AI is Here',
    speaker: 'Dr. Elena Rostova',
    category: 'Keynote',
    day: 'Day 1',
    time: '09:00 AM - 10:30 AM',
    location: 'Main Hall A',
    description: 'Join our CEO for the opening keynote as we explore the groundbreaking advancements in AI technology and what lies ahead for the industry.',
    details: {
      fullDescription: 'Join our CEO for the opening keynote as we explore the groundbreaking advancements in AI technology and what lies ahead for the industry. We will cover the latest trends, ethical considerations, and the roadmap for the next decade of artificial intelligence.',
      takeaways: ['Future trends in AI', 'Ethical AI', 'Industry roadmap'],
      tracks: ['AI/ML', 'Strategy'],
      level: 'Beginner'
    }
  },
  {
    id: 'd1-lab-mlops',
    title: 'End-to-End MLOps with Kubernetes',
    speaker: 'Marcus Chen',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Learn the entire MLOps lifecycle. From data ingestion to model training, containerization, and deployment to a Kubernetes cluster.',
    details: {
      fullDescription: 'In this hands-on lab, we will go through the entire MLOps lifecycle. You will learn how to ingest data, train models, containerize them, and deploy to a Kubernetes cluster using standard industry tools.',
      takeaways: ['MLOps lifecycle', 'Kubernetes deployment', 'Model containerization'],
      tracks: ['AI/ML', 'DevOps'],
      level: 'Advanced'
    }
  },
  {
    id: 'd1-breakout-microfrontends',
    title: 'Micro-Frontends at Scale',
    speaker: 'Priya Patel',
    category: 'Breakout',
    day: 'Day 1',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Learn how to brand distributed niches effectively with micro-frontends.',
    details: {
      fullDescription: 'Scaling frontend development is hard. Micro-frontends offer a solution. Join Priya Patel as she discusses strategies for implementing micro-frontends at scale, handling shared state, and ensuring a consistent user experience.',
      takeaways: ['Micro-frontend architecture', 'Scaling frontend teams', 'Shared state management'],
      tracks: ['Web', 'Architecture'],
      level: 'Intermediate'
    }
  },
  {
    id: 'd1-breakout-kafka',
    title: 'Real-Time Event Streaming with Kafka',
    speaker: 'Sarah Johnson',
    category: 'Breakout',
    day: 'Day 1',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Real-world case study on unleashing real-time initiatives.',
    details: {
      fullDescription: 'Real-time data is crucial for modern applications. Sarah Johnson presents a case study on using Apache Kafka for event streaming, covering configuration, scalability, and fault tolerance.',
      takeaways: ['Apache Kafka', 'Event streaming patterns', 'Scalability'],
      tracks: ['Data', 'Backend'],
      level: 'Intermediate'
    }
  },
  {
    id: 'd1-lab-gnn',
    title: 'Graph Neural Networks in Practice',
    speaker: 'Isabella Martinez',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Workshop: Generating extensible relationships with GNNs.',
    details: {
      fullDescription: 'Graph Neural Networks are powerful for relational data. This workshop covers the theory and practice of GNNs, implementing them using PyTorch Geometric to solve real-world problems.',
      takeaways: ['GNN fundamentals', 'PyTorch Geometric', 'Graph data analysis'],
      tracks: ['AI/ML', 'Data'],
      level: 'Advanced'
    }
  },
  {
    id: 'd1-breakout-react-perf',
    title: 'Optimizing React Performance',
    speaker: 'David Kim',
    category: 'Breakout',
    day: 'Day 1',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Strategies for streamlining customized eyeballs and improving app speed.',
    details: {
      fullDescription: 'Performance matters. David Kim shares advanced techniques for optimizing React applications, including memoization, code splitting, and identifying bottlenecks using the React Profiler.',
      takeaways: ['React Profiler', 'Code splitting', 'Memoization strategies'],
      tracks: ['Web', 'Performance'],
      level: 'Intermediate'
    }
  },
  {
    id: 'd1-breakout-community',
    title: 'Building Scalable Community Platforms',
    speaker: 'James Wilson',
    category: 'Breakout',
    day: 'Day 1',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'How we e-enabled dynamic communities.',
    details: {
      fullDescription: 'James Wilson discusses the architectural decisions behind building a scalable community platform, from database design to real-time features and content moderation.',
      takeaways: ['Community platform architecture', 'Scalable databases', 'Real-time features'],
      tracks: ['Product', 'Backend'],
      level: 'Beginner'
    }
  },
  {
    id: 'd1-lab-pipelines',
    title: 'High-Throughput Data Pipelines',
    speaker: 'Robert Garcia',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Hands-on: Transitioning efficient channels.',
    details: {
      fullDescription: 'Learn to build high-throughput data pipelines that can handle terabytes of data. We will use tools like Apache Beam and Dataflow to construct robust processing pipelines.',
      takeaways: ['Data pipeline design', 'Apache Beam', 'High-volume data processing'],
      tracks: ['Data', 'Engineering'],
      level: 'Advanced'
    }
  },
  {
    id: 'd1-breakout-opensource',
    title: 'Open Source Stewardship Strategy',
    speaker: 'Thomas Lee',
    category: 'Breakout',
    day: 'Day 1',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Implementing strategic communities for growth.',
    details: {
      fullDescription: 'Managing an open source project requires more than just code. Thomas Lee shares strategies for community stewardship, governance models, and sustainable growth.',
      takeaways: ['Open source governance', 'Community building', 'Project sustainability'],
      tracks: ['Strategy', 'Open Source'],
      level: 'Beginner'
    }
  },
  {
    id: 'd1-breakout-security',
    title: 'Securing Modern Web APIs',
    speaker: 'Michael Brown',
    category: 'Breakout',
    day: 'Day 1',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Targeting holistic web services effectively.',
    details: {
      fullDescription: 'Security is paramount. Michael Brown covers best practices for securing modern Web APIs, including OAuth2, JWT, rate limiting, and protection against common vulnerabilities.',
      takeaways: ['API Security', 'OAuth2 & JWT', 'Vulnerability prevention'],
      tracks: ['Security', 'Backend'],
      level: 'Intermediate'
    }
  },
  {
    id: 'd1-lab-wasm',
    title: 'Next-Gen WebAssembly (Wasm)',
    speaker: 'Lisa Wang',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '04:00 PM - 06:00 PM',
    location: 'Lab A',
    description: 'E-Enabling next-generation web services with Wasm.',
    details: {
      fullDescription: 'WebAssembly is changing the web. This lab explores how to compile languages like Rust and C++ to Wasm and integrate them into web applications for near-native performance.',
      takeaways: ['WebAssembly basics', 'Rust to Wasm', 'Performance optimization'],
      tracks: ['Web', 'Performance'],
      level: 'Advanced'
    }
  },

  // Day 2
  {
    id: 'd2-keynote-ethical-ai',
    title: 'Building Ethical AI Systems',
    speaker: 'Prof. Emily Carter',
    category: 'Keynote',
    day: 'Day 2',
    time: '09:00 AM - 10:00 AM',
    location: 'Main Hall A',
    description: 'A deep dive into the importance of ethics in AI development, ensuring safety, fairness, and transparency.',
    details: {
      fullDescription: 'As AI becomes more prevalent, ethics are critical. Prof. Carter discusses frameworks for building ethical AI, ensuring fairness, transparency, and accountability in algorithmic decision-making.',
      takeaways: ['AI Ethics', 'Fairness in algorithms', 'Transparency'],
      tracks: ['AI/ML', 'Ethics'],
      level: 'Beginner'
    }
  },
  {
    id: 'd2-lab-personalization',
    title: 'Personalization at Scale with AI',
    speaker: 'Maria Hernandez',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Streamlining B2C experiences lab.',
    details: {
      fullDescription: 'Learn how to implement real-time personalization using AI. We will cover recommendation engines, user segmentation, and delivering personalized content at scale.',
      takeaways: ['Recommendation engines', 'User segmentation', 'Real-time personalization'],
      tracks: ['AI/ML', 'Product'],
      level: 'Intermediate'
    }
  },
  {
    id: 'd2-breakout-vertical-ai',
    title: 'Building Vertical AI Agents',
    speaker: 'Christopher Davis',
    category: 'Breakout',
    day: 'Day 2',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Optimizing vertical applications for better performance.',
    details: {
      fullDescription: 'Vertical AI agents are specialized for specific industries. Christopher Davis explains how to build, train, and deploy agents tailored for niche markets like healthcare or finance.',
      takeaways: ['Vertical AI', 'Specialized agents', 'Industry applications'],
      tracks: ['AI/ML', 'Engineering'],
      level: 'Advanced'
    }
  },
  {
    id: 'd2-breakout-tracing',
    title: 'Distributed Tracing & Observability',
    speaker: 'Jennifer Martinez',
    category: 'Breakout',
    day: 'Day 2',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Aggregating granular synergies for success.',
    details: {
      fullDescription: 'Observability is key for microservices. Jennifer Martinez demonstrates how to implement distributed tracing using OpenTelemetry to debug and monitor complex distributed systems.',
      takeaways: ['OpenTelemetry', 'Distributed tracing', 'System observability'],
      tracks: ['DevOps', 'Backend'],
      level: 'Intermediate'
    }
  },
  {
    id: 'd2-lab-flink',
    title: 'Real-Time Analytics with Apache Flink',
    speaker: 'Kevin Anderson',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Maximize real-time eyeballs workshop.',
    details: {
      fullDescription: 'Apache Flink is a standard for stateful computations over data streams. This lab covers setting up Flink jobs, windowing operations, and handling out-of-order data.',
      takeaways: ['Apache Flink', 'Stream processing', 'Stateful computations'],
      tracks: ['Data', 'Engineering'],
      level: 'Advanced'
    }
  },
  {
    id: 'd2-breakout-edge-ai',
    title: 'Edge AI: Running Models Locally',
    speaker: 'Susan Taylor',
    category: 'Breakout',
    day: 'Day 2',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Redefining world-class bandwidth standards.',
    details: {
      fullDescription: 'Running AI on the edge reduces latency and privacy concerns. Susan Taylor explores techniques for optimizing models to run on mobile and IoT devices using TensorFlow Lite.',
      takeaways: ['Edge AI', 'TensorFlow Lite', 'Model optimization'],
      tracks: ['AI/ML', 'Mobile'],
      level: 'Intermediate'
    }
  },
  {
    id: 'd2-breakout-llm-bench',
    title: 'Benchmarking Large Language Models',
    speaker: 'Daniel White',
    category: 'Breakout',
    day: 'Day 2',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'Benchmarking synergistic vortals in the industry.',
    details: {
      fullDescription: 'How do you know which LLM is best for your use case? Daniel White discusses frameworks and metrics for benchmarking LLMs on accuracy, latency, and cost.',
      takeaways: ['LLM benchmarking', 'Performance metrics', 'Model selection'],
      tracks: ['AI/ML', 'Data'],
      level: 'Advanced'
    }
  },
  {
    id: 'd2-lab-webtransport',
    title: 'WebTransport & WebSockets Deep Dive',
    speaker: 'Jessica Thomas',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Seize next-generation bandwidth tutorial.',
    details: {
      fullDescription: 'Modern web apps need low-latency communication. This deep dive compares WebSockets and WebTransport, showing how to implement them for real-time applications.',
      takeaways: ['WebTransport', 'WebSockets', 'Real-time web'],
      tracks: ['Web', 'Networking'],
      level: 'Advanced'
    }
  },
  {
    id: 'd2-breakout-serverless',
    title: 'Serverless vs. Edge Functions',
    speaker: 'Paul Moore',
    category: 'Breakout',
    day: 'Day 2',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Techniques to disintermediate back-end web services.',
    details: {
      fullDescription: 'Serverless computing is evolving. Paul Moore compares traditional serverless functions with edge functions, helping you decide which is right for your architecture.',
      takeaways: ['Serverless', 'Edge functions', 'Architecture patterns'],
      tracks: ['Cloud', 'Backend'],
      level: 'Intermediate'
    }
  },
  {
    id: 'd2-breakout-5g-iot',
    title: 'Optimizing 5G for IoT',
    speaker: 'Mark Jackson',
    category: 'Breakout',
    day: 'Day 2',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Transforming bleeding-edge bandwidth case study.',
    details: {
      fullDescription: '5G unlocks new possibilities for IoT. Mark Jackson presents case studies on optimizing 5G networks for massive IoT deployments and low-latency control systems.',
      takeaways: ['5G technology', 'IoT optimization', 'Network latency'],
      tracks: ['IoT', 'Networking'],
      level: 'Advanced'
    }
  },

  // Day 3
  {
    id: 'd3-lab-rust',
    title: 'Scaling Rust for Web Services',
    speaker: 'Laura Martin',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Scaling next-generation e-business strategies.',
    details: {
      fullDescription: 'Rust is known for safety and performance. This lab guides you through building and scaling high-performance web services using Actix-web and async Rust.',
      takeaways: ['Rust for web', 'Actix-web', 'Concurrency'],
      tracks: ['Backend', 'Performance'],
      level: 'Advanced'
    }
  },
  {
    id: 'd3-breakout-microservices',
    title: 'Migrating from Monolith to Microservices',
    speaker: 'Michelle Wu',
    category: 'Breakout',
    day: 'Day 3',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Transitioning to holistic models seamlessly.',
    details: {
      fullDescription: 'Breaking down a monolith is a journey. Michelle Wu shares practical steps and patterns for strangling the monolith and migrating to a microservices architecture.',
      takeaways: ['Migration strategies', 'Strangler fig pattern', 'Microservices'],
      tracks: ['Architecture', 'DevOps'],
      level: 'Intermediate'
    }
  },
  {
    id: 'd3-breakout-servicemesh',
    title: 'Service Mesh with Istio & Linkerd',
    speaker: "David O'Connell",
    category: 'Breakout',
    day: 'Day 3',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Meshing customized web services seamlessly.',
    details: {
      fullDescription: 'Managing service-to-service communication is complex. David O\'Connell compares Istio and Linkerd, showing how a service mesh can solve challenges in traffic management and security.',
      takeaways: ['Service mesh', 'Istio vs Linkerd', 'Traffic management'],
      tracks: ['DevOps', 'Cloud'],
      level: 'Advanced'
    }
  },
  {
    id: 'd3-lab-video',
    title: 'Efficient Video Streaming Protocols',
    speaker: 'Steven Thompson',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Cultivating efficient bandwidth deep dive.',
    details: {
      fullDescription: 'Video streaming consumes massive bandwidth. This lab dives into HLS, DASH, and newer protocols like WebRTC, teaching you how to build efficient streaming solutions.',
      takeaways: ['Video streaming protocols', 'HLS & DASH', 'WebRTC'],
      tracks: ['Media', 'Web'],
      level: 'Intermediate'
    }
  },
  {
    id: 'd3-breakout-headless',
    title: 'Headless Commerce Architectures',
    speaker: 'Kenneth Lewis',
    category: 'Breakout',
    day: 'Day 3',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Redefining world-class e-commerce experiences.',
    details: {
      fullDescription: 'Headless commerce separates the front end from the back end. Kenneth Lewis discusses the benefits and challenges of this architecture and how to implement it using modern tools.',
      takeaways: ['Headless commerce', 'API-first design', 'E-commerce trends'],
      tracks: ['E-commerce', 'Architecture'],
      level: 'Intermediate'
    }
  },
  {
    id: 'd3-breakout-devrel',
    title: 'DevRel: Building Developer Trust',
    speaker: 'Patricia Walker',
    category: 'Breakout',
    day: 'Day 3',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'Monetizing next-generation relationships.',
    details: {
      fullDescription: 'Developer Relations is about more than just marketing. Patricia Walker shares insights on building authentic relationships with developer communities and earning their trust.',
      takeaways: ['DevRel strategy', 'Community building', 'Developer trust'],
      tracks: ['Community', 'Strategy'],
      level: 'Beginner'
    }
  },
  {
    id: 'd3-lab-graphql',
    title: 'GraphQL Federation at Scale',
    speaker: 'Brian Garcia',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Driving rich web services masterclass.',
    details: {
      fullDescription: 'Federation allows you to compose a single data graph from multiple subgraphs. Brian Garcia teaches you how to implement GraphQL Federation to scale your API development.',
      takeaways: ['GraphQL Federation', 'Subgraph composition', 'API scaling'],
      tracks: ['Backend', 'API'],
      level: 'Advanced'
    }
  },
  {
    id: 'd3-breakout-multicloud',
    title: 'Multi-Cloud Infrastructure Management',
    speaker: 'Amara Okafor',
    category: 'Breakout',
    day: 'Day 3',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Engaging distributed infrastructures at scale.',
    details: {
      fullDescription: 'Multi-cloud strategies prevent vendor lock-in but add complexity. Amara Okafor discusses tools and practices for managing infrastructure across AWS, Azure, and GCP.',
      takeaways: ['Multi-cloud strategy', 'Infrastructure management', 'Vendor agnostic tools'],
      tracks: ['Cloud', 'DevOps'],
      level: 'Advanced'
    }
  },
  {
    id: 'd3-breakout-accessibility',
    title: 'Accessibility in Modern Web Apps',
    speaker: 'Tariq Al-Fayed',
    category: 'Breakout',
    day: 'Day 3',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Re-intermediating rich communities for growth.',
    details: {
      fullDescription: 'The web should be accessible to everyone. Tariq Al-Fayed covers ARIA standards, keyboard navigation, and testing tools to ensure your modern web apps are inclusive.',
      takeaways: ['Web Accessibility', 'WCAG guidelines', 'Inclusive design'],
      tracks: ['Web', 'Design'],
      level: 'Beginner'
    }
  },
  {
    id: 'd3-breakout-postgres',
    title: 'Advanced PostgreSQL Patterns',
    speaker: 'Wei Zhang',
    category: 'Breakout',
    day: 'Day 3',
    time: '04:00 PM - 05:00 PM',
    location: 'Room 104',
    description: 'E-Enabling efficient schemas for data.',
    details: {
      fullDescription: 'PostgreSQL is more than just a relational database. Wei Zhang explores advanced features like JSONB, partitioning, and custom types to solve complex data modeling problems.',
      takeaways: ['PostgreSQL advanced features', 'JSONB', 'Database partitioning'],
      tracks: ['Database', 'Backend'],
      level: 'Advanced'
    }
  },
  {
    id: 'd3-breakout-retail',
    title: 'Bridging Digital & Physical Retail',
    speaker: 'Mateo Fernandez',
    category: 'Breakout',
    day: 'Day 3',
    time: '04:00 PM - 05:00 PM',
    location: 'Room 204',
    description: 'Streamlining clicks-and-mortar functionalities.',
    details: {
      fullDescription: 'The line between online and offline retail is blurring. Mateo Fernandez discusses technologies that bridge this gap, from mobile apps in-store to smart inventory management.',
      takeaways: ['Omnichannel retail', 'Digital-physical integration', 'Retail tech'],
      tracks: ['Retail', 'Mobile'],
      level: 'Intermediate'
    }
  }
];
