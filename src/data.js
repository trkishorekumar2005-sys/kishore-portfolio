import splitExpenseImage from './assets/projects/splitexpense.svg';
import studentTaskManagerImage from './assets/projects/student-task-manager.svg';
import visionIntersectionImage from './assets/projects/vision-intersection.svg';

export const careerObjective = 'A dedicated problem solver with a passion for full-stack development, committed to writing clean, efficient, and quality-driven code. Eager to contribute strong technical ability and a growth mindset to real-world software projects.';

// Project images are illustrative visuals. Leave liveUrl / githubUrl empty until a real link exists.
export const projects = [
  {
    title: 'SplitExpense',
    subtitle: 'AI-Based Group Expense & Bill Splitting Application',
    description: "Developed a full-stack expense management application with person-wise bill splitting based on individual consumption, showing each member's items, subtotal, tax share, and final amount.",
    technologies: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'bcrypt', 'Gemini API', 'Git'],
    image: splitExpenseImage,
    mark: 'SPLITEXPENSE',
    features: ['Person-wise bill splitting', 'Individual item and subtotal calculation', 'Tax sharing', 'Final amount calculation', 'Gemini Vision bill extraction', 'User verification', 'Manual entry fallback', 'Balance and settlement calculation', 'Monthly spending reports', 'UPI-based settlement'],
    details: [
      "Developed a full-stack expense management application with person-wise bill splitting based on individual consumption, showing each member's items, subtotal, tax share, and final amount.",
      'Integrated Gemini Vision to extract bill items, quantities, prices, and amounts from uploaded bills, with user verification and manual entry fallback.',
      "Implemented automatic tax, balance, and settlement calculation to determine each member's final amount and who owes whom.",
      'Developed monthly spending reports to track individual and group spending using stored expense data.',
      "Added UPI-based settlement support using the receiver's saved UPI information for outstanding expenses.",
    ],
    liveUrl: '',
    githubUrl: '',
  },
  {
    title: 'Student Task Manager',
    subtitle: 'Full-Stack Task Management Application',
    description: 'Built a complete full-stack task management application with frontend, backend, database, and cloud deployment.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'REST API', 'Git', 'Render'],
    image: studentTaskManagerImage,
    mark: 'STUDENT TASKS',
    features: ['Student registration', 'Student login', 'Task management', 'Add tasks', 'View tasks', 'Update tasks', 'Delete tasks', 'REST APIs', 'CRUD operations', 'MySQL database', 'Cloud deployment using Render'],
    details: [
      'Built a complete full-stack application with a frontend, backend, database, and cloud deployment.',
      'Developed the frontend for student registration, login, and task management.',
      'Created REST APIs and CRUD operations to add, view, update, and delete tasks.',
      'Connected the application to MySQL to store and manage student and task data.',
      'Deployed the application on Render Cloud to make the project available online.',
    ],
    liveUrl: '',
    githubUrl: '',
  },
  {
    title: 'Vision-Based Adaptive Intersection Management System',
    subtitle: 'AI-assisted traffic and emergency vehicle prioritization',
    description: 'Developed an intelligent traffic management system that uses computer vision to detect emergency vehicles and give them signal priority.',
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'Roboflow'],
    image: visionIntersectionImage,
    mark: 'VISION',
    features: ['Emergency vehicle detection', 'Real-time video detection', 'Computer vision', 'Adaptive traffic signal control', 'Traffic density analysis'],
    details: [
      'Developed an intelligent traffic management system that uses computer vision to detect emergency vehicles and give them signal priority.',
      'Built a real-time detection pipeline to identify emergency vehicles from live video feeds.',
      'Designed adaptive signal control logic driven by real-time traffic density, improving traffic flow efficiency.',
    ],
    liveUrl: '',
    githubUrl: '',
  },
];

export const skillGroups = [
  { name: 'Programming', items: ['JavaScript', 'Python'] },
  { name: 'Frontend', items: ['React.js', 'HTML', 'CSS', 'Vite'] },
  { name: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'bcrypt'] },
  { name: 'Database', items: ['MySQL'] },
  { name: 'AI Integration', items: ['Gemini API (Vision)'] },
  { name: 'Tools & Deployment', items: ['Git', 'Render', 'Vercel'] },
];

export const timeline = [
  { date: '2023 – 2027', title: 'B.Tech in Computer Science', organization: 'SASTRA Deemed University', detail: 'Full-time · CGPA: 7.00' },
  { date: '2021 – 2023', title: 'Higher Secondary (HSC)', organization: 'Sowdambikaa Matric Boys Hr Sec School, Thuraiyur', detail: 'Full-time · 87 percentile' },
  { date: '2020 – 2021', title: 'SSLC (10th)', organization: 'A.R.R. Matric Hr Sec School, Kumbakonam', detail: 'Full-time · 90%' },
  { date: "ICACCT'26", title: 'International Conference', organization: 'Francis Xavier Engineering College (VEI Technologies)', detail: 'Presented a paper on the vision-based adaptive intersection management system.' },
];

export const certifications = [
  { title: 'Full Stack Web Development', organization: 'Udemy', topics: 'HTML · CSS · JavaScript · React.js · Node.js · Express.js · REST APIs · Database Integration · Deployment' },
  { title: 'Diploma in Programming Language (DPL)', organization: 'Tamilnadu Computer College (TNCC)', topics: 'C · C++ · OOPs' },
  { title: 'Diploma in Computer Application (DCA)', organization: 'Tamilnadu Computer College (TNCC)', topics: 'MS Office' },
];

export const additionalInfo = [
  { title: 'Languages', items: ['Tamil', 'English'] },
  { title: 'Soft Skills', items: ['Communication', 'Problem Solving', 'Team Collaboration'] },
  { title: 'Academic Standing', items: ['No standing arrears/backlogs'] },
];
