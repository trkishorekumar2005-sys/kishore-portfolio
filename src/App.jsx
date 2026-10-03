import { useState } from 'react';
import profileImage from './assets/profile.jpg';
import { additionalInfo, careerObjective, certifications, projects, skillGroups, timeline } from './data.js';

const nav = [['Home', 'home'], ['About', 'about'], ['Projects', 'projects'], ['Skills', 'skills'], ['Journey', 'journey'], ['Contact', 'contact']];

function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="nav-wrap"><nav className="nav shell" aria-label="Main navigation">
    <a className="brand" href="#home" aria-label="Kishore Kumar home">K<span>.</span></a>
    <button className="menu-toggle" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}><i></i><i></i></button>
    <div className={`nav-links ${open ? 'is-open' : ''}`}>{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}</div>
    <a className="nav-spark" href="#contact" aria-label="Go to contact">✳</a>
  </nav></header>;
}

function Hero() {
  return <section id="home" className="hero shell section-anchor">
    <div className="hero-copy"><span className="eyebrow"><span className="status-dot" /> PORTFOLIO · 2026</span>
      <p className="intro">Hi, I'm</p><h1>Kishore Kumar <span>T.R</span></h1>
      <p className="role">Aspiring Full Stack Developer</p>
      <p className="lead">A dedicated problem solver with a passion for full-stack development, committed to writing clean, efficient, and quality-driven code.</p>
      <div className="hero-actions"><a className="button primary" href="#projects">View Projects <span>↗</span></a><span className="button disabled" aria-disabled="true" title="Resume file is not available yet">Resume unavailable <span>↗</span></span></div>
      <div className="social-row"><a href="mailto:trkishorekumar2005@gmail.com" aria-label="Email Kishore">✉ <span>Email</span></a><span className="social-disabled" title="LinkedIn URL was not included in the resume" aria-label="LinkedIn URL unavailable">in</span><span className="social-disabled" title="GitHub URL was not included in the resume" aria-label="GitHub URL unavailable">⌘</span></div>
    </div>
    <div className="hero-art" role="img" aria-label="Developer coding at a desk at night"><div className="art-grid"></div><div className="window-glow"></div><div className="monitor monitor-one"><div className="code-lines"><i/><i/><i/><i/><i/><i/></div></div><div className="monitor monitor-two"><div className="code-lines alt"><i/><i/><i/><i/><i/></div></div><div className="desk"></div><div className="person"><div className="head"></div><div className="body"></div></div><div className="art-caption"><b>01 / CREATIVE PROCESS</b><span>Ideas into interfaces.</span></div><div className="art-orb"></div></div>
    <div className="hero-foot"><span>SCROLL TO EXPLORE</span><span className="foot-line"></span><span>01 — 06</span></div>
  </section>;
}

function About() {
  return <section id="about" className="section shell section-anchor"><div className="about-card panel"><div className="portrait"><div className="portrait-ring"><img src={profileImage} alt="Kishore Kumar T.R"/><span className="portrait-star">✳</span></div><span className="portrait-label">KISHORE KUMAR T.R · DEVELOPER</span></div><div className="about-copy"><span className="eyebrow">A LITTLE ABOUT ME</span><h2>About <em>Me.</em></h2><p>I'm Kishore Kumar T.R, an aspiring full stack developer. {careerObjective}</p><div className="info-grid"><Info icon="⌂" label="Education" text="B.Tech Computer Science · SASTRA Deemed University · 2023–2027 · CGPA: 7.00"/><Info icon="⌘" label="Interests" text="Full Stack Development · Problem Solving · Computer Vision"/><Info icon="↗" label="Goal" text="Contribute strong technical ability and a growth mindset to real-world software projects."/></div></div></div></section>;
}
function Info({ icon, label, text }) { return <article className="info-card"><span className="info-icon">{icon}</span><h3>{label}</h3><p>{text}</p></article>; }

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const links = [['Live Demo', project.liveUrl], ['Source Code', project.githubUrl]].filter(([, url]) => url);
  return <article className="project-card"><div className="project-visual"><img className="project-image" src={project.image} alt={`${project.title} illustrative project visual`} loading="lazy"/><div className="visual-top"><span className="mini-mark">{project.mark}</span><span className="visual-dots">•••</span></div><span className="project-index">0{index + 1}</span></div><div className="project-content"><span className="project-kicker">FEATURED PROJECT</span><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-desc">{project.description}</p><div className="tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div><button className="details-toggle" type="button" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>{expanded ? 'Hide Details' : 'View Details'} <b>{expanded ? '−' : '↗'}</b></button>{expanded && <div className="project-more"><span className="project-kicker">KEY FEATURES</span><div className="tags feature-tags">{project.features.map(feature => <span key={feature}>{feature}</span>)}</div><ul className="project-details">{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul></div>}{links.length > 0 && <div className="project-links">{links.map(([label, url]) => <a className="project-link" key={label} href={url} target="_blank" rel="noreferrer">{label}<b>↗</b></a>)}</div>}</div></article>;
}
function Projects() {
  return <section id="projects" className="section shell section-anchor"><div className="section-head"><div><span className="eyebrow">SELECTED WORK</span><h2>My <em>Projects</em></h2><p>Here are some of the projects I've worked on.</p></div><span className="count-label">{String(projects.length).padStart(2, '0')} PROJECTS <b>↘</b></span></div><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index}/>)}</div></section>;
}

function Skills() {
  return <section id="skills" className="section shell section-anchor"><div className="section-head"><div><span className="eyebrow">TOOLS OF THE TRADE</span><h2>Skills & <em>toolkit.</em></h2><p>Technical skills listed in my resume.</p></div><span className="count-label">{skillGroups.reduce((total, group) => total + group.items.length, 0)} SKILL ENTRIES <b>✳</b></span></div><div className="skills-grid">{skillGroups.map((group, index) => <article className={`skill-card skill-${index}`} key={group.name}><div className="skill-heading"><span className="skill-glyph">{['⌁','◈','⌘','▤','✳','↗'][index]}</span><h3>{group.name}</h3><span className="skill-number">0{index + 1}</span></div><div className="skill-list">{group.items.map((item, itemIndex) => <span className="skill-pill" key={item}><i className={`skill-dot dot-${itemIndex % 4}`}/>{item}</span>)}</div></article>)}</div></section>;
}

function Journey() {
  return <section id="journey" className="section shell section-anchor"><div className="experience-panel panel"><div className="experience-heading"><span className="eyebrow">THE JOURNEY SO FAR</span><h2>Education &<br/><em>journey.</em></h2><p>Academic milestones and a research presentation.</p><span className="vertical-word">LEARNING · BUILDING · SHARING</span></div><div className="timeline">{timeline.map((item, index) => <article className="timeline-item" key={item.title}><span className="timeline-dot"/><span className="timeline-date">{item.date}</span><div><h3>{item.title}</h3><span className="timeline-org">{item.organization}</span><p>{item.detail}</p></div><span className="timeline-count">0{index + 1}</span></article>)}</div></div></section>;
}

function Certifications() {
  return <section id="certifications" className="section shell section-anchor"><div className="section-head"><div><span className="eyebrow">CONTINUED LEARNING</span><h2>Certifications <em>& training.</em></h2><p>Courses in full-stack web development and programming fundamentals.</p></div></div><div className="credential-grid">{certifications.map((item, index) => <article className="credential-card panel" key={item.title}><span className="credential-index">0{index + 1} / CERTIFICATION</span><h3>{item.title}</h3><p>{item.organization}</p><div className="tags">{item.topics.split(' · ').map(topic => <span key={topic}>{topic}</span>)}</div></article>)}</div></section>;
}

function AdditionalInfo() {
  return <section className="section shell"><div className="section-head"><div><span className="eyebrow">BEYOND THE TECHNICAL</span><h2>Additional <em>information.</em></h2></div></div><div className="additional-grid">{additionalInfo.map(item => <article className="additional-card panel" key={item.title}><span className="eyebrow">{item.title}</span><div className="additional-items">{item.items.map(value => <span key={value}>{value}</span>)}</div></article>)}</div></section>;
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [state, setState] = useState('');
  const update = event => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = event => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setState('Thanks for reaching out! The contact form is currently in demo mode. Please use the email address above.');
    setForm({ name: '', email: '', message: '' });
  };
  return <section id="contact" className="section shell section-anchor"><div className="section-head"><div><span className="eyebrow">HAVE A PROJECT IN MIND?</span><h2>Get in <em>touch.</em></h2><p>Feel free to reach out for collaborations, opportunities, or just a friendly hello!</p></div></div><div className="contact-grid"><div className="contact-aside"><div className="contact-note"><span className="note-mark">↗</span><h3>Good things<br/>start with a hello.</h3><p>I'm always open to connecting with people who care about thoughtful technology.</p></div><div className="contact-lines"><div><span>EMAIL</span><a href="mailto:trkishorekumar2005@gmail.com">trkishorekumar2005@gmail.com</a></div><div><span>PHONE</span><a href="tel:+918122897908">+91 8122897908</a></div><div><span>LOCATION</span><b>Kumbakonam, Tamil Nadu</b></div></div></div><form className="contact-form panel" onSubmit={submit}><div className="form-head"><span>01 — SEND A NOTE</span><span className="form-dot"/></div><label>Your name<input name="name" value={form.name} onChange={update} placeholder="Your name" required minLength="2"/></label><label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required/></label><label>Your message<textarea name="message" value={form.message} onChange={update} placeholder="Tell me a little about what you have in mind…" required minLength="10" rows="4"/></label><button className="button primary submit" type="submit">Send Message <span>↗</span></button>{state && <p className="form-status" role="status">{state}</p>}<p className="form-hint">Demo mode · Please use the email address to contact me directly.</p></form></div></section>;
}

function Footer() {
  return <footer className="footer shell"><a className="brand" href="#home">K<span>.</span></a><div><strong>Kishore Kumar T.R</strong><span>Aspiring Full Stack Developer</span></div><a className="footer-email" href="mailto:trkishorekumar2005@gmail.com">trkishorekumar2005@gmail.com</a><span className="footer-location">Kumbakonam, Tamil Nadu</span><a className="back-top" href="#home">BACK TO TOP ↑</a><small>© 2026 Kishore Kumar T.R. All rights reserved.</small></footer>;
}

export default function App() {
  return <><div className="ambient ambient-one"/><div className="ambient ambient-two"/><Navbar/><main><Hero/><About/><Projects/><Skills/><Journey/><Certifications/><AdditionalInfo/><Contact/></main><Footer/></>;
}
