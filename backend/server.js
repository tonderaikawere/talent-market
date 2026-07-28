const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const profiles = [
  {
    id: 1,
    name: 'Prince Ncube',
    summary: 'Experienced frontend developer with a passion for building scalable web apps.',
    description: 'Frontend Developer',
    image: '/images/avatar1.jpg',
    facebook: 'https://facebook.com/princencube',
    linkedin: 'https://linkedin.com/in/princencube',
    twitter: 'https://twitter.com/princencube',
    portfolio: 'https://princencube.com',
    cvLink: 'https://princencube.com/cv',
  },
  {
    id: 2,
    name: 'Usher Ndlovu',
    summary: 'Creative Full Stack Developer with a knack for making user-friendly interfaces.',
    description: 'Full Stack Developer',
    image: '/images/avatar2.jpg',
    facebook: 'https://facebook.com/usherndlovu',
    linkedin: 'https://linkedin.com/in/usherndlovu',
    twitter: 'https://twitter.com/usherndlovu',
    portfolio: 'https://usherndlovu.com',
    cvLink: 'https://usherndlovu.com/cv',
  },
  {
    id: 3,
    name: 'Wendy Ndlovu',
    summary: 'Experienced full-stack developer with a passion for building scalable web apps.',
    description: 'Full Stack Developer',
    image: '/images/avatar3.jpg',
    facebook: 'https://facebook.com/wendyndlovu',
    linkedin: 'https://linkedin.com/in/wendyndlovu',
    twitter: 'https://twitter.com/wendyndlovu',
    portfolio: 'https://wendyndlovu.com',
    cvLink: 'https://wendyndlovu.com/cv',
  },
  {
    id: 4,
    name: 'Babongile Dube',
    summary: 'Creative UI/UX designer with a knack for making user-friendly interfaces.',
    description: 'UI/UX Designer',
    image: '/images/avatar4.jpg',
    facebook: 'https://facebook.com/babongiledube',
    linkedin: 'https://linkedin.com/in/babongiledube',
    twitter: 'https://twitter.com/babongiledube',
    portfolio: 'https://babongiledube.com',
    cvLink: 'https://babongiledube.com/cv',
  },
  {
    id: 5,
    name: 'Princess Ncube',
    summary: 'Experienced full-stack developer with a passion for building scalable web apps.',
    description: 'Full Stack Developer',
    image: '/images/avatar5.jpg',
    facebook: 'https://facebook.com/princessncube',
    linkedin: 'https://linkedin.com/in/princessncube',
    twitter: 'https://twitter.com/princessncube',
    portfolio: 'https://princessncube.com',
    cvLink: 'https://princessncube.com/cv',
  },
  {
    id: 6,
    name: 'Bongani Dube',
    summary: 'Creative UI/UX designer with a knack for making user-friendly interfaces.',
    description: 'UI/UX Designer',
    image: '/images/avatar6.jpg',
    facebook: 'https://facebook.com/bonganidube',
    linkedin: 'https://linkedin.com/in/bonganidube',
    twitter: 'https://twitter.com/bonganidube',
    portfolio: 'https://bonganidube.com',
    cvLink: 'https://bonganidube.com/cv',
  },
  {
    id: 7,
    name: 'Prince Ndlovu',
    summary: 'Experienced full-stack developer with a passion for building scalable web apps.',
    description: 'Full Stack Developer',
    image: '/images/avatar7.jpg',
    facebook: 'https://facebook.com/princendlovu',
    linkedin: 'https://linkedin.com/in/princendlovu',
    twitter: 'https://twitter.com/princendlovu',
    portfolio: 'https://princendlovu.com',
    cvLink: 'https://princendlovu.com/cv',
  },
  {
    id: 8,
    name: 'Bakhile Dube',
    summary: 'Creative UI/UX designer with a knack for making user-friendly interfaces.',
    description: 'UI/UX Designer',
    image: '/images/avatar8.jpg',
    facebook: 'https://facebook.com/bakhiledube',
    linkedin: 'https://linkedin.com/in/bakhiledube',
    twitter: 'https://twitter.com/bakhiledube',
    portfolio: 'https://bakhiledube.com',
    cvLink: 'https://bakhiledube.com/cv',
  },
];

const jobs = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Tecno Mobile',
    companyLogo: '/images/logo1.jpg',
    description: 'Develop and maintain software.',
    summary: 'Full-time position for a skilled Software Engineer.',
    requirements: "Bachelor's degree in Computer Science",
    salary: '$500 - $1000',
    contact: 'hr@tecnomobile.com'
  },
  {
    id: 2,
    title: 'Project Manager',
    company: 'BYO Designed',
    companyLogo: '/images/logo2.jpg',
    description: 'Manage projects from inception to completion.',
    summary: 'Experienced Project Manager required.',
    requirements: '5 years of experience in project management',
    salary: '$450 - $800',
    contact: 'hr@byodesigned.com'
  },
  {
    id: 3,
    title: 'React Developer',
    company: 'Eco Web Solutions',
    companyLogo: '/images/logo3.jpg',
    description: 'Build modern React applications.',
    summary: 'Join our team to build next-generation web platforms.',
    requirements: '3+ years React experience',
    salary: '$600 - $1100',
    contact: 'careers@ecoweb.com'
  },
  {
    id: 4,
    title: 'UX Researcher',
    company: 'Design Lab',
    companyLogo: '/images/logo4.jpg',
    description: 'Conduct user research and usability testing.',
    summary: 'We are looking for a researcher to understand our users better.',
    requirements: 'Experience with user interviews and data analysis',
    salary: '$400 - $750',
    contact: 'jobs@designlab.com'
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'Cloud Solutions',
    companyLogo: '/images/logo5.jpg',
    description: 'Manage cloud infrastructure and CI/CD pipelines.',
    summary: 'Help us scale our cloud deployments on AWS/GCP.',
    requirements: 'Experience with Docker, Kubernetes, and Terraform',
    salary: '$800 - $1400',
    contact: 'ops@cloudsol.com'
  },
  {
    id: 6,
    title: 'Product Designer',
    company: 'BYO Designed',
    companyLogo: '/images/logo6.jpg',
    description: 'Create interface design concepts and mockups.',
    summary: 'Translate complex problems into elegant design solutions.',
    requirements: 'Figma expertise and strong portfolio',
    salary: '$500 - $900',
    contact: 'hr@byodesigned.com'
  },
  {
    id: 7,
    title: 'Node.js Developer',
    company: 'Tecno Mobile',
    companyLogo: '/images/logo7.jpg',
    description: 'Build high-performance backend systems.',
    summary: 'Develop Express APIs and microservices.',
    requirements: 'Strong Node.js and database skills',
    salary: '$700 - $1200',
    contact: 'hr@tecnomobile.com'
  },
];

app.get('/api/profiles', (req, res) => {
  res.json(profiles);
});

app.get('/api/profiles/:id', (req, res) => {
  const profile = profiles.find(p => p.id === parseInt(req.params.id));
  if (profile) {
    res.json(profile);
  } else {
    res.status(404).send('Profile not found');
  }
});

app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

app.get('/api/jobs/:id', (req, res) => {
  const job = jobs.find(j => j.id === parseInt(req.params.id));
  if (job) {
    res.json(job);
  } else {
    res.status(404).send('Job not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
