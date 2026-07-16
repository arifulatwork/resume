// ============ DATA ============
// const portfolioItems = [
//   { img:'./assets/images/remoteoldtv.webp', title:'OLD TV Remote', description:'Designed for viewers who miss the simplicity of classic television — instant channel buttons, responsive controls, and uninterrupted entertainment.', demoLink:'https://github.com/AmraManush/remote', technologies:['Next JS','TypeScript','Firebase'] },
//   { img:'./assets/images/oldtv.webp', title:'OLD TV UI/UX', description:'Designed for viewers who miss the simplicity of classic television — instant channel buttons, responsive controls, and uninterrupted entertainment.', demoLink:'https://github.com/arifulatwork/Nostalgia-Mine-OLD-TV', technologies:['Next JS','TypeScript','Firebase'] },
//   { img:'./assets/images/oldtvbutton.webp', title:'OLD TV Button', description:'Designed for viewers who miss the simplicity of classic television — instant channel buttons, responsive controls, and uninterrupted entertainment.', demoLink:'https://github.com/AmraManush/oldtv-with-button-channel-change', technologies:['Next JS','TypeScript','Firebase'] },
//   { img:'./assets/images/remoteNew.webp', title:'New TV Web Application (Remote)', description:'TV Dekhbo is a modern IPTV streaming platform built for smooth entertainment, real-time access, and a user-friendly viewing experience across all devices.', demoLink:'https://github.com/AmraManush/tv-dekhbo', technologies:['Next JS','TypeScript','Firebase'] },
//   { img:'./assets/images/remoteNew.webp', title:'Remote for New TV', description:'Powerful real-time remote management for IPTV platforms — optimized for performance, usability, and multi-device compatibility.', demoLink:'https://github.com/AmraManush/remoteCholo', technologies:['Next JS','TypeScript','Firebase'] },
// ];

const portfolioItems = [
{
  img:'./assets/images/nazatai.webp',
  title:'Nazat AI',
  description:'Developed an AI-powered platform to help students explore higher education opportunities abroad. Integrated intelligent search, personalized recommendations, and AI-assisted guidance for universities, scholarships, and admissions.',
  demoLink:'#',
  technologies:['Python','AI','Flask','OpenRouter']
},
{
  img:'./assets/images/nazatai.webp',
  title:'Study Chatbot Mobile App',
  description:'Built a Flutter-based AI chatbot application that assists students with study materials, academic questions, and personalized learning support through an interactive conversational interface.',
  demoLink:'#',
  technologies:['Flutter','Firebase','AI','Dart']
},
{
  img:'./assets/images/gym.webp',
  title:'AI Gym Mobile Application',
  description:'Developed an AI-powered fitness application with personalized workout plans, exercise tracking, progress monitoring, and intelligent recommendations to help users achieve their fitness goals.',
  demoLink:'#',
  technologies:['React Native','Expo','Open Router','']
},
{
  img:'./assets/images/obhibash.webp',
  title:'Obhibash.eu',
  description:'Developed a multilingual platform connecting Bangladeshi communities across Europe. The platform provides immigration resources, local services, business listings, news, and community support in a modern, responsive web application.',
  demoLink:'https://obhibash.eu',
  technologies:['Next JS','TypeScript','Prisma','Bootstrap']
},
{
  img:'./assets/images/wakeup.webp',
  title:'Wake Up Projects Website',
  description:'Developed the official multilingual website for Wake Up Projects, an Erasmus+ mobility organization. Built a responsive platform with modern UI, optimized performance, multilingual support, and an enhanced user experience.',
  demoLink:'https://wakeup-projects.com',
  technologies:['Laravel','Blade','JavaScript','Bootstrap','CSS']
},
{ img:'./assets/images/bravori.webp', 
  title:'Bravori Music School App', 
  description:'Fixed multiple bugs in a React Native music school application designed for children to learn music. Improved performance and user experience.', 
  demoLink:'https://play.google.com/store/apps/details?id=com.bravorimusic.bravori', 
  technologies:['React Native','JavaScript','Firebase'] 
},
{ img:'./assets/images/unique.webp', title:'Class Management System', description:'A collaborative project from my university course under Dr. Ahmad Fadhil Yusof. Gained hands-on experience in teamwork, software development, and project management.', demoLink:'https://github.com/arifulUTM/Application-Development-Project-UTM-2020', technologies:['PHP','MySQL','Bootstrap'] },
{ img:'./assets/images/addarapp.webp', title:'Addar Beauty Application', description:'Freelance project for Rubysoft Sdn Bhd to develop a beauty services application. Created features and authored a comprehensive user manual for primary users.', demoLink:'https://addarapp.com/docs/addar-manual-110.pdf', technologies:['Flutter','Dart','Firebase'] },
{ img:'./assets/images/Application.webp', title:'Pathfinder – Travel Guide App', description:'Pathfinder is a travel guide app with COVID-19 safety features, built with Flutter, Firebase, and Google Cloud, developed for my undergraduate thesis.', demoLink:'https://bitbucket.org/pro_ariful/pathfinder-a-travel-guide-mobile-application/src/master/pathfinder/', technologies:['Flutter','Google Cloud Platform','Firebase'] },
{ img:'./assets/images/lost.webp', title:'Lost and Found Web Application', description:'Developed a robust lost-and-found web platform using Servlets, JSP, Maven, and MySQL with item registration, search, and authentication features.', demoLink:'https://github.com/arifulUTM/Lost-and-Found', technologies:['Java Servlet','JSP','MySQL'] },
{ img:'./assets/images/travel.webp', title:'Travel Guide Web App', description:'In-development travel guide app for a Spanish company, built with React.js and Laravel, featuring real-time data, authentication, and cloud storage.', demoLink:'#', technologies:['React','Laravel','MySQL'] },
{ img:'./assets/images/aitools.webp', title:'AI Research Platform', description:'Developed an AI-powered research platform for academic collaboration and knowledge sharing with advanced search and recommendation features.', demoLink:'#', technologies:['Python','TensorFlow','React','MongoDB'] },
{ img:'./assets/images/covidTracker.webp', title:'Covid Tracker', description:'React.js application showing real-time COVID-19 stats using Disease.sh API. Includes filtering by country and interactive map visualization.', demoLink:'https://resume-jade-seven.vercel.app/projects', technologies:['JavaScript','JSON','REST API','PHP'] },
{ img:'./assets/images/tood.webp', title:'Task Management Mobile App', description:'A task management mobile application designed to help users stay organized and boost productivity.', demoLink:'https://github.com/Yasser-dev/what-to-do', technologies:['Flutter','JSON','REST API','Firebase'] },
{ img:'./assets/images/xerox.webp', title:'Photocopying (Xerox) Machine', description:'Successfully completed the project and built a working circuit based on the problem we identified.', demoLink:'https://github.com/Yasser-dev/what-to-do', technologies:['Digital Logic','Circuit'] },
{ img:'./assets/images/covid.webp', title:'Covid Care', description:'A website that provides health-related tips along with real-time updates on the coronavirus situation around the world.', demoLink:'https://github.com/arifulUTM/COVID-CARE', technologies:['JavaScript','PHP','REST API'] },
];
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; dot.style.left=mx+'px'; dot.style.top=my+'px'; });
(function animRing(){
  rx+=(mx-rx)*0.12; ry+=(my-ry)*0.12;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(animRing);
})();

// ============ NAV ============
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileClose = document.getElementById('mobileClose');
menuBtn.addEventListener('click', () => mobileNav.classList.add('open'));
mobileClose.addEventListener('click', () => mobileNav.classList.remove('open'));
document.querySelectorAll('.mob-link').forEach(l => l.addEventListener('click', () => mobileNav.classList.remove('open')));

// Theme
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');
let theme = localStorage.getItem('theme') || 'dark';
function applyTheme(t) {
  document.body.setAttribute('data-theme', t);
  themeIcon.className = t === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('theme', t);
}
applyTheme(theme);
themeBtn.addEventListener('click', () => { theme = theme === 'dark' ? 'light' : 'dark'; applyTheme(theme); });

// ============ SLIDER ============
let cur = 0;
function getSpv() {
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 3;
}
const track = document.getElementById('sliderTrack');
const dotsEl = document.getElementById('sliderDots');

function buildSlider() {
  track.innerHTML = '';
  dotsEl.innerHTML = '';
  portfolioItems.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'proj-card';
    card.innerHTML = `
      <div class="proj-inner">
        <div class="proj-img-wrap">
          <img src="${item.img}" alt="${item.title}" class="proj-img" loading="lazy">
          <div class="proj-overlay">
            <a href="${item.demoLink}" target="_blank" class="btn btn-primary" style="font-size:0.75rem;padding:0.7rem 1.4rem;">
              <i class="fas fa-external-link-alt"></i> View Project
            </a>
          </div>
        </div>
        <div class="proj-body">
          <div class="proj-title">${item.title}</div>
          <p class="proj-desc">${item.description}</p>
          <div class="proj-tags">${item.technologies.map(t=>`<span class="proj-tag">${t}</span>`).join('')}</div>
        </div>
      </div>`;
    track.appendChild(card);

    const dot = document.createElement('div');
    dot.className = 'dot' + (i===0?' active':'');
    dot.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(dot);
  });
  updateSlider();
}

function updateSlider() {
  const spv = getSpv();
  const pct = 100 / spv;
  document.querySelectorAll('.proj-card').forEach(c => c.style.flex = `0 0 ${pct}%`);
  const max = portfolioItems.length - spv;
  cur = Math.min(cur, Math.max(0, max));
  track.style.transform = `translateX(-${cur * pct}%)`;
  document.querySelectorAll('.dot').forEach((d,i) => d.classList.toggle('active', i===cur));
  document.getElementById('prevBtn').disabled = cur === 0;
  document.getElementById('nextBtn').disabled = cur >= max;
}

function goTo(i) { cur = i; updateSlider(); resetAuto(); }
function next() { const spv=getSpv(); cur = cur >= portfolioItems.length-spv ? 0 : cur+1; updateSlider(); }
function prev() { cur = cur <= 0 ? portfolioItems.length-getSpv() : cur-1; updateSlider(); }

document.getElementById('prevBtn').addEventListener('click', () => { prev(); resetAuto(); });
document.getElementById('nextBtn').addEventListener('click', () => { next(); resetAuto(); });

let autoTimer;
function startAuto() { autoTimer = setInterval(next, 5000); }
function resetAuto() { clearInterval(autoTimer); startAuto(); }
window.addEventListener('resize', () => { updateSlider(); });

// ============ REVEAL ============
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ============ CONTACT ROTATION ============
const emails = ['arifulatwork@gmail.com','Md-Ariful.Islam@edu.rtu.lv','Md-Ariful.Islam@rtu.lv'];
const locs = ['Liepāja, Latvia','Available Remotely'];
let ei=0, li=0;
setInterval(() => {
  ei = (ei+1)%emails.length; li = (li+1)%locs.length;
  const ev = document.getElementById('emailVal');
  const lv = document.getElementById('locVal');
  ev.style.opacity='0'; lv.style.opacity='0';
  setTimeout(() => {
    ev.textContent = emails[ei]; lv.textContent = locs[li];
    ev.style.opacity='1'; lv.style.opacity='1';
    ev.style.transition='opacity 0.4s'; lv.style.transition='opacity 0.4s';
  }, 300);
}, 8000);

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior:'smooth', block:'start' }); }
  });
});

// ============ INIT ============
buildSlider();
startAuto();
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.6s ease';
window.addEventListener('load', () => { document.body.style.opacity = '1'; });