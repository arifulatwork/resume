const portfolioItems = [
    {
        img: './assets/images/bravori.png',
        title: 'Bravori',
        description: 'Fixed multiple bugs in a React Native music school application designed for children to learn music. Improved performance and user experience.',
        demoLink: 'https://play.google.com/store/apps/details?id=com.bravorimusic.bravori'
    },
    {
        img: './assets/images/unique-class.png',
        title: 'Unique Class Management System',
        description: 'A collaborative project from my university course under Dr. Ahmad Fadhil Yusof. Gained hands-on experience in teamwork, software development, and project management.',
        demoLink: 'https://github.com/arifulUTM/Application-Development-Project-UTM-2020'
    },
    {
        img: './assets/images/addarapp.png',
        title: 'Addar Beauty Application',
        description: 'Freelance project for Rubysoft Sdn Bhd to develop a beauty services application. Created features and authored a comprehensive user manual for primary users.',
        demoLink: 'https://addarapp.com/docs/addar-manual-110.pdf'
    },
    {
        img: './assets/images/portfolio.png',
        title: 'Lost and Found Web Application',
        description: 'Developed a robust lost-and-found web platform using Servlets, JSP, Maven, and MySQL with item registration, search, and authentication features.',
        demoLink: 'https://github.com/arifulUTM/Lost-and-Found'
    },
    {
        img: './assets/images/covid-tracker.png',
        title: 'Covid Tracker',
        description: 'React.js application showing real-time COVID-19 stats using Disease.sh API. Includes filtering by country and interactive map visualization.',
        demoLink: 'https://resume-jade-seven.vercel.app/projects'
    },
    {
        img: './assets/images/stock-predictor.png',
        title: 'Stock Predictor',
        description: 'A stock prediction system with React.js frontend, Flask backend, and TensorFlow-trained models predicting opening and closing prices.',
        demoLink: 'https://resume-jade-seven.vercel.app/projects'
    },
    {
        img: './assets/images/finditjobs.png',
        title: 'FindITJobs Web Application',
        description: 'A dynamic Laravel job portal with integrated admin panel for job postings, applications, and user management to streamline operations.',
        demoLink: 'https://resume-jade-seven.vercel.app/projects'
    },
    {
        img: './assets/images/classified-marketplace.png',
        title: 'Classified Marketplace Application',
        description: 'A Laravel-based buying and selling platform with authentication, listing management, search filters, and secure transaction handling.',
        demoLink: 'https://resume-jade-seven.vercel.app/projects'
    },
    {
        img: './assets/images/pos.png',
        title: 'Point-of-Sales System',
        description: 'PHP-based POS system following MVC architecture, including inventory management, sales tracking, user authentication, and reporting.',
        demoLink: 'https://resume-jade-seven.vercel.app/projects'
    },
    {
        img: './assets/images/restoran.png',
        title: 'Restoran Nasi Lounge',
        description: 'Online food ordering system that simplifies restaurant orders, manages promotions, tracks benefits, and improves customer engagement.',
        demoLink: 'https://resume-jade-seven.vercel.app/projects'
    },
    {
        img: './assets/images/chatbot.png',
        title: 'Chatbot Application',
        description: 'Web programming project chatbot with AI-driven conversations. Top grade achievement. Currently improving with advanced techniques and modern UI.',
        demoLink: 'https://github.com/arifulUTM/Chatbot-with-PHP'
    },
    {
        img: './assets/images/msri.png',
        title: 'Malaysian Social Research Institute Web Application',
        description: 'Custom PHP/MySQL web app for a Malaysian client, delivering a dynamic and interactive platform with optimized performance.',
        demoLink: 'https://msri.org.my/'
    },
    {
        img: './assets/images/iptv.jpeg',
        title: 'IPTV Application – Flutter-Based Streaming',
        description: 'A Flutter IPTV application built to address unreliable providers, ensuring smooth, lag-free streaming with a user-friendly interface.',
        demoLink: 'https://resume-jade-seven.vercel.app/projects'
    },
    {
        img: './assets/images/covid-care.png',
        title: 'Covid Care Website',
        description: 'Website providing health tips and real-time COVID-19 updates, integrated with a chatbot for instant guidance.',
        demoLink: 'https://resume-jade-seven.vercel.app/projects'
    },
    {
        img: './assets/images/photocopy.png',
        title: 'Photocopying Machine Project',
        description: 'Hands-on circuit design project simulating a Xerox machine, enhancing practical skills in electronics with decoder, counter, comparator, and clock disable.',
        demoLink: 'https://resume-jade-seven.vercel.app/projects'
    },
    {
        img: './assets/images/productivity-app.png',
        title: 'Productivity and Task Management App',
        description: 'Flutter-based mobile application with Calendar, Tasks, and Notes features to enhance organization and productivity.',
        demoLink: 'https://resume-jade-seven.vercel.app/projects'
    },
    {
        img: './assets/images/pathfinder.png',
        title: 'Pathfinder – Travel Guide Application',
        description: 'Final year thesis project: Travel guide app with COVID-19 contact tracing, built using Flutter, Firebase, and Google Cloud APIs.',
        demoLink: 'https://resume-jade-seven.vercel.app/projects'
    },
    {
        img: './assets/images/travel-guide.png',
        title: 'Travel Guide Web Application',
        description: 'In-development travel guide app for a Spanish company, built with React.js and Laravel, featuring real-time data, authentication, and cloud storage.',
        demoLink: 'https://resume-jade-seven.vercel.app/projects'
    }
];

let currentIndex = 0;

function showPortfolioItem(index) {
    const portfolioImage = document.querySelector('.portfolio-image');
    const portfolioDescription = document.querySelector('.portfolio-description');
    
    portfolioImage.src = portfolioItems[index].img;
    portfolioDescription.innerHTML = `
        <h3>${portfolioItems[index].title}</h3>
        <p>${portfolioItems[index].description}</p>
        <a href="${portfolioItems[index].demoLink}" class="demo-button">Demo</a>
    `;
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : portfolioItems.length - 1;
    showPortfolioItem(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex < portfolioItems.length - 1) ? currentIndex + 1 : 0;
    showPortfolioItem(currentIndex);
});

// Initialize the first portfolio item
showPortfolioItem(currentIndex);

// switch remote to city

const locationElement = document.getElementById("location");
            const locations = ["🏴 Liepāja, Latvia", "🏡 Working Remotely"];
            let index = 0;
    
            setInterval(() => {
                index = (index + 1) % locations.length;
                locationElement.textContent = locations[index];
            }, 10000); // 10000 milliseconds = 10 seconds

// switch between two email addresses

const emailElement = document.getElementById("email");
        const emails = [
            '✉️ <a href="mailto:arifulatwork@gmail.com">arifulatwork@gmail.com</a>',
            '🎓 <a href="mailto:Md-Ariful.Islam@edu.rtu.lv">Md-Ariful.Islam@edu.rtu.lv</a>',
            '🎓 <a href="mailto:Md-Ariful.Islam@rtu.lv">Md-Ariful.Islam@rtu.lv</a>'
        ];
        let emailIndex = 0;

        setInterval(() => {
            emailIndex = (emailIndex + 1) % emails.length;
            emailElement.innerHTML = emails[emailIndex];
        }, 10000); // 10000 milliseconds = 10 seconds


// Navbar

const menuToggle = document.getElementById('menu-toggle');
const navbarLinks = document.getElementById('navbar-links');

// Toggle menu on click
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navbarLinks.classList.toggle('active');
});


// Start Animation Programming JS

// Programming languages to display
const languages = ["Python", "JavaScript", "Java", "C++", "Ruby", "Go", "Rust", "PHP", "Kotlin"];

// Create a container for the animated languages
const container = document.getElementById("animated-background");

// Function to generate random position
function randomPosition(side) {
  const top = Math.random() * 100; // Random vertical position (0-100%)
  const left = side === "left" ? Math.random() * 5 + 1 : 95 - Math.random() * 5; // Left (1-5%) or right (95-99%)
  return { top: `${top}%`, left: `${left}%` };
}

// Function to create floating elements
function createLanguageElement(language, side) {
  const span = document.createElement("span");
  span.classList.add("language");
  span.textContent = language;

  const { top, left } = randomPosition(side);
  span.style.top = top;
  span.style.left = left;

  // Add random animation duration
  span.style.animation = `float ${Math.random() * 5 + 10}s infinite ease-in-out`;

  return span;
}

// Add languages dynamically to the container
languages.forEach((language, index) => {
  const side = index % 2 === 0 ? "left" : "right";
  const languageElement = createLanguageElement(language, side);
  container.appendChild(languageElement);
});

// Keyframe animations
const style = document.createElement("style");
style.innerHTML = `
  @keyframes float {
    0% { transform: translateY(0) scale(1); opacity: 0.5; }
    50% { transform: translateY(-20px) scale(1.1); opacity: 0.7; }
    100% { transform: translateY(20px) scale(1); opacity: 0.5; }
  }
`;
document.head.appendChild(style);
