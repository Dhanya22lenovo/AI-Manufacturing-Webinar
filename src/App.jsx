import React from 'react';
import { Activity, ScanEye, Bot, ChartNoAxesCombined, Factory, Lightbulb, TrendingUp, BrainCircuit, Workflow, Wrench, ClipboardCheck, MessagesSquare, DoorOpen, Cog, Gauge, GraduationCap, Database, Check, ShieldCheck, Plus, Minus } from 'lucide-react';

const navigation = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Agenda', '#agenda'],
  ['Speaker', '#speaker'],
  ['Contact', '#contact'],
];

const learningTopics = [
  {
    icon: Activity,
    title: 'Predictive Maintenance',
    description: 'Use AI to predict equipment failures before they happen and reduce unexpected downtime.',
  },
  {
    icon: ScanEye,
    title: 'Smart Quality Inspection',
    description: 'Discover how computer vision detects product defects with greater accuracy.',
  },
  {
    icon: Bot,
    title: 'Intelligent Automation',
    description: 'Understand how AI-powered robotics improve production efficiency.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Production Optimization',
    description: 'Learn how machine learning helps optimize production processes and reduce waste.',
  },
];

const benefits = [
  {
    icon: Factory,
    title: 'Industry Insights',
    description: 'Understand real-world applications of AI in manufacturing.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Knowledge',
    description: 'Learn how AI technologies solve manufacturing challenges.',
  },
  {
    icon: TrendingUp,
    title: 'Future-Ready Skills',
    description: 'Understand the skills and technologies shaping smart factories.',
  },
];

const agendaSessions = [
  { time: '11:00 AM – 11:05 AM', title: 'Welcome & Introduction', icon: DoorOpen },
  { time: '11:05 AM – 11:20 AM', title: 'Understanding AI in Manufacturing', icon: BrainCircuit },
  { time: '11:20 AM – 11:45 AM', title: 'Real-World AI Applications in Smart Factories', icon: Workflow, featured: true },
  { time: '11:45 AM – 12:00 PM', title: 'Predictive Maintenance & Quality Inspection', icon: Wrench, featured: true },
  { time: '12:00 PM – 12:15 PM', title: 'Industry Case Study & Implementation', icon: ClipboardCheck },
  { time: '12:15 PM – 12:30 PM', title: 'Live Q&A and Closing Remarks', icon: MessagesSquare },
];

const audienceGroups = [
  {
    icon: Cog,
    title: 'Manufacturing Engineers',
    description: 'Discover how AI improves production processes, quality and equipment performance.',
  },
  {
    icon: Gauge,
    title: 'Factory Managers',
    description: 'Learn how intelligent systems improve operational efficiency and reduce downtime.',
  },
  {
    icon: GraduationCap,
    title: 'Students & Fresh Graduates',
    description: 'Explore career opportunities in AI-powered manufacturing and Industry 4.0.',
  },
  {
    icon: Database,
    title: 'AI & Data Professionals',
    description: 'Understand how machine learning and computer vision are applied in industrial environments.',
  },
];

const registrationBenefits = [
  '90-minute live webinar.',
  'Expert-led learning session.',
  'Real-world manufacturing AI use cases.',
  'Interactive Q&A session.',
  'Digital participation certificate.',
];

const faqItems = [
  {
    question: 'What is this webinar about?',
    answer: 'This webinar explores how Artificial Intelligence is transforming manufacturing through predictive maintenance, computer vision, smart automation and production optimization.',
  },
  {
    question: 'Who can attend?',
    answer: 'Manufacturing engineers, factory managers, students, fresh graduates, data scientists and technology professionals can attend.',
  },
  {
    question: 'Will this webinar be conducted online?',
    answer: 'Yes. It is a live online webinar. Joining instructions will be shared with registered participants.',
  },
  {
    question: 'Will I receive a certificate?',
    answer: 'Yes. Participants will receive a digital participation certificate.',
  },
  {
    question: 'Will the session be recorded?',
    answer: 'A recording will be shared with registered participants after the session.',
  },
  {
    question: 'How much does registration cost?',
    answer: 'The registration fee is ₹499 per participant.',
  },
  {
    question: 'Can I ask questions during the webinar?',
    answer: 'Yes. There will be a dedicated live Q&A session.',
  },
];

function Brand({ className = 'brand' }) {
  return (
    <a className={className} href="#home" aria-label="Manufacture dot AI home">
      <span className="brand-symbol" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none"><path d="M4 25V7h5l7 9 7-9h5v18h-5V15l-7 9-7-9v10H4Z" fill="currentColor"/><path d="M27 7h2v18h-2z" fill="#9B8CFF"/></svg>
      </span>
      <span>MANUFACTURE<span className="brand-dot">.AI</span></span>
    </a>
  );
}

function InfoCard({ icon: Icon, title, description, number, variant = 'learning' }) {
  return (
    <article className={`info-card ${variant}-card`}>
      <div className="card-topline">
        <span className="card-icon"><Icon size={21} strokeWidth={1.6} aria-hidden="true" /></span>
        <span className="card-number">{number}</span>
      </div>
      {variant === 'learning' && <LearningSculpture kind={number} title={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="card-arrow" aria-hidden="true">↗</span>
    </article>
  );
}

function LearningSculpture({ kind, title }) {
  const id = `object-${kind}`;
  return (
    <svg className={`learning-sculpture sculpture-${kind}`} viewBox="0 0 300 120" role="img" aria-label={`Isometric illustration for ${title}`}>
      <defs>
        <linearGradient id={`${id}-steel`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#e1edf5"/><stop offset=".48" stopColor="#8098ad"/><stop offset="1" stopColor="#344c61"/></linearGradient>
        <linearGradient id={`${id}-blue`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#7bcbff"/><stop offset="1" stopColor="#316eb5"/></linearGradient>
        <linearGradient id={`${id}-dark`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#27445d"/><stop offset="1" stopColor="#101f2d"/></linearGradient>
        <filter id={`${id}-shadow`} x="-40%" y="-60%" width="180%" height="220%"><feGaussianBlur stdDeviation="5"/></filter>
      </defs>
      <ellipse cx="150" cy="101" rx="82" ry="8" fill="#010810" opacity=".55" filter={`url(#${id}-shadow)`}/>
      {kind === '01' && <g className="sculpture-object"><path d="m83 71 60-34 77 32-61 37Z" fill={`url(#${id}-dark)`} stroke="#7190aa"/><path d="m95 70 49-27 62 26-49 27Z" fill={`url(#${id}-steel)`}/><path d="M95 70v13l62 28V96Z" fill="#2d465c"/><path d="m157 96 49-27v13l-49 29Z" fill="#192e40"/><ellipse cx="143" cy="68" rx="27" ry="17" fill="#1a2c3b" stroke="#a6bfd0" strokeWidth="2"/><ellipse cx="143" cy="68" rx="17" ry="10" fill="#637d92" stroke="#d1e0e9"/><ellipse cx="143" cy="68" rx="7" ry="4" fill="#142434"/><path d="M116 61v-13c0-8 12-14 27-14s27 6 27 14v13" fill={`url(#${id}-steel)`} stroke="#c5d4df"/><ellipse cx="143" cy="48" rx="27" ry="14" fill="#9baebe" stroke="#dbe6ee"/><path d="M189 43c15 8 15 25 0 34m7-40c21 12 21 33 0 46" fill="none" stroke="#69baff" strokeWidth="1.5" strokeDasharray="3 4"/><circle className="sensor-pulse" cx="207" cy="40" r="3" fill="#80dcb2"/><path d="m207 40 17-12h21" stroke="#8fcaff" strokeDasharray="2 3"/></g>}
      {kind === '02' && <g className="sculpture-object"><path d="m63 81 79-44 99 42-81 39Z" fill="#243c50" stroke="#829cb1"/><path d="m63 81v9l97 29v-9Z" fill="#162a3a"/><path d="m160 110 81-40v9l-81 40Z" fill="#101f2c"/><path d="m75 78 66-35 82 34-67 33Z" fill="#7991a4"/><path d="M91 78h141" stroke="#c0d0db" strokeWidth="2"/><path d="M108 68v-18h57v18" fill="#233b50" stroke="#b0c1ce" strokeWidth="2"/><path d="M120 50V36h33v14" fill="#132535" stroke="#7ec5ff"/><circle cx="136" cy="43" r="7" fill="#071522" stroke="#94d2ff"/><path d="m176 61 29-15v17l-29 15Z" fill={`url(#${id}-steel)`}/><rect className="inspection-pulse" x="179" y="57" width="29" height="17" fill="none" stroke="#ffb16e" strokeWidth="1.5" strokeDasharray="3 2"/><path d="M193 57V39h31" stroke="#ffb16e"/><circle cx="92" cy="87" r="3" fill="#8acbff"/><circle cx="218" cy="78" r="3" fill="#8acbff"/></g>}
      {kind === '03' && <g className="sculpture-object"><path d="m97 91 47-26 63 23-49 27Z" fill="#20384c" stroke="#7592aa"/><path d="M116 89 128 69l-9-15 20-15 17 7-9 18 22 12-10 16-24-12-7 12Z" fill={`url(#${id}-steel)`} stroke="#d4e0e9" strokeWidth="2"/><circle cx="139" cy="49" r="9" fill="#36546d" stroke="#8ecbff" strokeWidth="2"/><circle cx="153" cy="70" r="7" fill="#3b5870" stroke="#8ecbff" strokeWidth="2"/><path d="m157 63 21-19 13 5-13 13" fill={`url(#${id}-steel)`} stroke="#d4e0e9" strokeWidth="2"/><circle cx="183" cy="48" r="5" fill="#31506a" stroke="#8ecbff" strokeWidth="2"/><path d="m188 46 10-9 4 2-7 12m4-8 8 4-2 3-9-2" fill="none" stroke="#dce8ef" strokeWidth="2"/><path className="motion-path" d="M164 79c28-4 44-18 43-37" fill="none" stroke="#71bbff" strokeDasharray="3 4"/><path d="M201 42l6-7 5 8" fill="none" stroke="#71bbff"/><path d="M108 92v9m54 8v7m44-21v9" stroke="#92abc0" strokeWidth="2"/></g>}
      {kind === '04' && <g className="sculpture-object"><path d="m59 79 88-47 104 45-91 47Z" fill="#1a3043" stroke="#7390a8"/><path d="m76 79 71-38 79 35-74 40Z" fill="#2b455b" stroke="#8eb0cd"/><path d="m92 78 25-13 27 12-26 14Z" fill="#9eb2c2"/><path d="M92 78v15l26 12V91Z" fill="#435a6b"/><path d="m118 91 26-14v15l-26 13Z" fill="#293e50"/><path d="m135 69 26-14 27 12-27 15Z" fill="#9cb1c1"/><path d="M135 69v15l26 13V82Z" fill="#445a6d"/><path d="m161 82 27-15v15l-27 15Z" fill="#263b4d"/><path d="m175 98 24-13 24 11-25 13Z" fill="#a9bbc9"/><path d="M175 98v10l23 10v-9Z" fill="#52697b"/><path d="m198 109 25-13v10l-25 13Z" fill="#263a4a"/><path className="motion-path" d="m118 83 17-8m52 8 12 5m-45 4 21 10" stroke="#72bdff" strokeWidth="1.5" strokeDasharray="3 3"/><circle cx="133" cy="76" r="3" fill="#7fcaff"/><circle cx="198" cy="89" r="3" fill="#ffb36e"/><circle cx="173" cy="102" r="3" fill="#7fcaff"/></g>}
    </svg>
  );
}

function AgendaTimeline() {
  return (
    <ol className="agenda-timeline">
      {agendaSessions.map(({ time, title, icon: Icon, featured }, index) => (
        <li className={`agenda-item${featured ? ' agenda-featured' : ''}`} key={title}>
          <time className="agenda-time">{time}</time>
          <span className="timeline-marker"><Icon size={17} strokeWidth={1.7} aria-hidden="true" /></span>
          <div className="agenda-session">
            <span className="agenda-session-number">SESSION 0{index + 1}</span>
            <h3>{title}</h3>
          </div>
        </li>
      ))}
    </ol>
  );
}

function PricingAndRegistration() {
  const [registration, setRegistration] = React.useState(null);

  function handleRegistration(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const phoneField = form.elements.phone;
    const phoneDigits = phoneField.value.replace(/\D/g, '');
    if (!/^\+?[0-9()\s.-]+$/.test(phoneField.value.trim()) || phoneDigits.length < 10 || phoneDigits.length > 15) {
      phoneField.setCustomValidity('Enter a valid phone number with 10 to 15 digits.');
      phoneField.reportValidity();
      return;
    }

    phoneField.setCustomValidity('');
    const values = new FormData(form);
    setRegistration({ name: values.get('fullName') });
  }

  return (
    <section className="content-section registration-section" id="registration" aria-labelledby="registration-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker"><span /> PRICING &amp; REGISTRATION</p>
          <h2 id="registration-title">Secure Your Seat.<br className="heading-break" /> Shape the Future.</h2>
        </div>
        <p className="section-subtitle">Join industry professionals and discover the power of AI in manufacturing.</p>
      </div>

      <div className="registration-layout">
        <article className="pricing-card">
          <div className="pricing-card-top">
            <span className="pricing-badge"><span /> LIVE ONLINE WEBINAR</span>
            <span className="pricing-shield"><ShieldCheck size={20} strokeWidth={1.6} aria-hidden="true" /></span>
          </div>
          <h3>AI for Manufacturing</h3>
          <p className="pricing-caption">One session. Practical ideas for a smarter factory.</p>
          <div className="price-display"><strong>₹499</strong><span>per participant</span></div>
          <div className="pricing-divider" />
          <ul className="pricing-benefits">
            {registrationBenefits.map((benefit) => (
              <li key={benefit}><Check size={15} strokeWidth={2} aria-hidden="true" /><span>{benefit}</span></li>
            ))}
          </ul>
          <button className="button button-primary pricing-submit" type="submit" form="registration-form">
            Register Now – ₹499 <span aria-hidden="true">→</span>
          </button>
          <p className="payment-demo-note">Demo registration only. Payment is not processed.</p>
        </article>

        <div className="registration-panel">
          <div className="form-heading">
            <span className="form-step">01 <i /> REGISTRATION DETAILS</span>
            <h3>Save your place in the conversation.</h3>
            <p>Complete the form to see your demo confirmation.</p>
          </div>

          {registration && (
            <div className="registration-success" role="status" aria-live="polite">
              <div className="success-heading"><span><Check size={16} /></span><strong>Demo registration received, {registration.name}.</strong></div>
              <p><b>AI for Manufacturing</b><br />December 12, 2026 · 11:00 AM – 12:30 PM IST · Live Online<br />₹499 per participant</p>
              <small>This is a frontend demonstration. No seat was booked and no payment was processed.</small>
            </div>
          )}

          <form id="registration-form" className="registration-form" onSubmit={handleRegistration}>
            <label className="form-field">
              <span>Full Name</span>
              <input name="fullName" type="text" autoComplete="name" placeholder="e.g. Aditi Sharma" required />
            </label>
            <label className="form-field">
              <span>Email Address</span>
              <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            </label>
            <label className="form-field">
              <span>Phone Number</span>
              <input name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={20} placeholder="+91 98765 43210" onChange={(event) => event.currentTarget.setCustomValidity('')} required />
            </label>
            <label className="form-field">
              <span>Current Profession</span>
              <select name="profession" defaultValue="" required>
                <option value="" disabled>Select your profession</option>
                <option>Student</option>
                <option>Manufacturing Engineer</option>
                <option>Factory Manager</option>
                <option>Data Scientist</option>
                <option>Other</option>
              </select>
            </label>
            <label className="terms-field">
              <input type="checkbox" name="terms" required />
              <span>I agree to the terms and conditions.</span>
            </label>
            <p className="form-demo-note">Frontend demo only. Submitting this form does not complete payment or create a paid booking.</p>
            <button className="button button-primary form-submit" type="submit">Submit Demo Registration <span aria-hidden="true">→</span></button>
          </form>
        </div>
      </div>
    </section>
  );
}

function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <section className="content-section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker"><span /> FREQUENTLY ASKED QUESTIONS</p>
          <h2 id="faq-title">Got Questions?<br className="heading-break" /> We&apos;ve Got Answers.</h2>
        </div>
        <p className="section-subtitle">Everything you need to know before joining us live.</p>
      </div>

      <div className="faq-list">
        {faqItems.map(({ question, answer }, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index + 1}`;
          return (
            <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={question}>
              <h3>
                <button className="faq-question" type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenIndex(isOpen ? null : index)}>
                  <span className="faq-count">0{index + 1}</span>
                  <span className="faq-question-text">{question}</span>
                  <span className="faq-toggle" aria-hidden="true">{isOpen ? <Minus size={17} /> : <Plus size={17} />}</span>
                </button>
              </h3>
              <div className="faq-answer" id={answerId} aria-hidden={!isOpen}>
                <div className="faq-answer-inner"><p>{answer}</p></div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function LinkedInMark() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" /></svg>;
}

function App() {
  return (
    <main className="page-shell" id="home">
      <header className="site-header">
        <Brand />

        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>

        <a className="header-cta" href="#registration">Register Now <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-pulse" /> LIVE INDUSTRY WEBINAR</p>
          <h1 id="hero-title">The Future of<br className="desktop-break" /> Manufacturing<br className="desktop-break" /> is <span>Intelligent.</span></h1>
          <p className="hero-description">
            Discover how Artificial Intelligence is transforming factories through smart automation, predictive maintenance and intelligent quality control.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#registration">Reserve Your Seat <span aria-hidden="true">→</span></a>
            <a className="button button-secondary" href="#agenda"><span className="play-icon" aria-hidden="true">▸</span> Explore Agenda</a>
          </div>

          <div className="trust-note"><span className="trust-line" /> BUILT FOR THE NEXT GENERATION OF INDUSTRY</div>
        </div>

        <div className="hero-art" role="img" aria-label="Robotic arms work on a precision assembly line in a futuristic smart factory">
          <div className="art-wash" />
          <span className="art-index">INDUSTRY 4.0 <i /> 2026</span>
          <div className="event-card" id="register">
            <div className="event-card-heading">
              <span className="event-icon" aria-hidden="true">✳</span>
              <span>YOUR NEXT INDUSTRIAL<br />ADVANTAGE STARTS HERE</span>
            </div>
            <div className="event-details">
              <div className="detail-item"><span className="detail-icon" aria-hidden="true">◷</span><span><small>DATE &amp; TIME</small><strong>December 12, 2026</strong><em>11:00 AM – 12:30 PM IST</em></span></div>
              <div className="detail-item"><span className="detail-icon" aria-hidden="true">⌁</span><span><small>FORMAT</small><strong>Live Online</strong><em>Join from anywhere</em></span></div>
            </div>
            <div className="ticket-row"><span>WEBINAR ACCESS</span><strong>₹499 <small>INR</small></strong></div>
          </div>
          <div className="image-corner" aria-hidden="true" />
        </div>
      </section>

      <section className="content-section learning-section" id="about" aria-labelledby="learning-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker"><span /> WHAT YOU WILL LEARN</p>
            <h2 id="learning-title">Intelligence That<br className="heading-break" /> Transforms Industry</h2>
          </div>
          <p className="section-subtitle">Explore the technologies redefining modern manufacturing.</p>
        </div>
        <div className="learning-grid">
          {learningTopics.map((topic, index) => <InfoCard key={topic.title} {...topic} number={`0${index + 1}`} />)}
        </div>
      </section>

      <section className="content-section benefits-section" id="benefits" aria-labelledby="benefits-title">
        <div className="section-heading benefits-heading">
          <div>
            <p className="section-kicker"><span /> WHY ATTEND?</p>
            <h2 id="benefits-title">Turn Knowledge Into<br className="heading-break" /> Industrial Advantage</h2>
          </div>
          <p className="section-subtitle">One focused session. A smarter way to move your operation forward.</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => <InfoCard key={benefit.title} {...benefit} number={`0${index + 1}`} variant="benefit" />)}
        </div>
      </section>

      <section className="content-section speaker-section" id="speaker" aria-labelledby="speaker-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker"><span /> MEET YOUR SPEAKER</p>
            <h2 id="speaker-title">Learn From Industry<br className="heading-break" /> Expertise</h2>
          </div>
          <p className="section-subtitle">Insights from someone building the future of intelligent manufacturing.</p>
        </div>
        <article className="speaker-card">
          <div className="speaker-portrait">
            <img src="/speaker-arjun-mehta.png" alt="Portrait of Dr. Arjun Mehta in a modern manufacturing facility" />
            <span className="portrait-caption"><span /> INDUSTRY LEADER · 15+ YEARS</span>
          </div>
          <div className="speaker-details">
            <p className="speaker-overline">FEATURED SPEAKER</p>
            <h3>Dr. Arjun Mehta</h3>
            <p className="speaker-role">Director of AI &amp; Industrial Automation</p>
            <p className="speaker-bio">With more than 15 years at the intersection of data science and industrial operations, Arjun helps manufacturers turn emerging AI into practical, measurable improvements on the factory floor.</p>
            <div className="speaker-expertise" aria-label="Areas of expertise">
              <span>Industrial AI &amp; Smart Manufacturing</span>
              <span>Machine Learning</span>
              <span>Predictive Maintenance</span>
            </div>
            <div className="speaker-card-footer">
              <span className="experience-note"><strong>15+</strong> YEARS OF EXPERIENCE</span>
              <span className="linkedin-note" aria-label="LinkedIn profile not provided"><LinkedInMark /> LINKEDIN</span>
            </div>
          </div>
          <span className="speaker-card-glow" aria-hidden="true" />
        </article>
      </section>

      <section className="content-section agenda-section" id="agenda" aria-labelledby="agenda-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker"><span /> WEBINAR AGENDA</p>
            <h2 id="agenda-title">90 Minutes. One<br className="heading-break" /> Intelligent Future.</h2>
          </div>
          <p className="section-subtitle">A focused session covering the technologies transforming manufacturing.</p>
        </div>
        <AgendaTimeline />
      </section>

      <section className="content-section audience-section" id="who-should-attend" aria-labelledby="audience-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker"><span /> WHO SHOULD ATTEND?</p>
            <h2 id="audience-title">Built for the Minds<br className="heading-break" /> Shaping Tomorrow&apos;s Industry</h2>
          </div>
          <p className="section-subtitle">Whether you build, manage or study manufacturing, discover how AI can transform your work.</p>
        </div>
        <div className="audiences-grid">
          {audienceGroups.map((group, index) => (
            <InfoCard key={group.title} {...group} number={`0${index + 1}`} variant="audience" />
          ))}
        </div>
      </section>

      <PricingAndRegistration />

      <FrequentlyAskedQuestions />

      <footer className="site-footer" id="contact">
        <div className="footer-main">
          <div className="footer-brand-column">
            <Brand className="footer-brand" />
            <p>Empowering the next generation of intelligent manufacturing through AI, automation and innovation.</p>
          </div>

          <div className="footer-links-column">
            <h2>QUICK LINKS</h2>
            <nav className="footer-links" aria-label="Footer navigation">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#agenda">Agenda</a>
              <a href="#speaker">Speaker</a>
              <a href="#registration">Register</a>
            </nav>
          </div>

          <div className="footer-contact-column">
            <h2>GET IN TOUCH</h2>
            <a className="footer-email" href="mailto:hello@manufactureai.example">hello@manufactureai.example <span aria-hidden="true">↗</span></a>
            <h2 className="footer-social-title">FOLLOW ALONG</h2>
            <div className="footer-socials" aria-label="Social media">
              <span aria-label="LinkedIn" title="LinkedIn"><LinkedInMark /></span>
              <span aria-label="Instagram" title="Instagram"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg></span>
              <span aria-label="YouTube" title="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-5.8.5-5.8s0-4-.5-5.8Z" /><path fill="#0b1427" d="m9.6 15.7 6.3-3.7-6.3-3.7v7.4Z" /></svg></span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 MANUFACTURE.AI. All rights reserved.</span>
          <span className="footer-signoff"><span /> INTELLIGENCE FOR THE INDUSTRIAL WORLD</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
