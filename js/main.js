const portfolioItems = [
    {
        img: './assets/images/addarapp.png',
        title: 'Addar Beauty Application',
        description: 'In September 2022, I was assigned to a freelance project with Rubysoft Sdn Bhd to develop an application called Addar Beauty. During this project, I created numerous features for the app and authored a comprehensive user manual for primary users.',
        demoLink: 'https://addarapp.com/docs/addar-manual-110.pdf'
    },
    {
        img: './assets/images/flowyteam.png',
        title: 'FlowyTeam',
        description: "It's a project management system that competes with various other tools in today's market. When I joined Flowy Sdn Bhd, my initial assignment was to fix bugs throughout the system. After successfully resolving the bugs, I transitioned to a new project to enhance it further.",
        demoLink: 'https://flowyteam.com/'
    },
    {
        img: './assets/images/okri.png',
        title: 'OKRI',
        description: "After completing work on Flowyetam, I was assigned to Okri.io, which has similar functionalities but is intended for a low-budget company.",
        demoLink: 'https://okri.io/login'
    },
    {
        img: './assets/images/hitech.jpeg',
        title: 'Hi-Tech Web Application',
        description: 'During the COVID-19 pandemic in 2020, despite juggling university classes, I successfully developed this freelance project—a website completed within just 25 days.',
        demoLink: 'https://hi-techengineering.com/management/'
    },
    {
        img: './assets/images/iptv.jpeg',
        title: 'Personal Project IPTV Application',
        description: 'Due to the lack of reliable IPTV providers in my country, all existing apps suffer from lags and loading issues. Therefore, I developed a custom IPTV application for my household, providing my family with a seamless mobile streaming experience free from buffering.',
        demoLink: '#'
    },
    {
        img: './assets/images/chatbot.png',
        title: 'Chatbot PHP',
        description: 'In my web programming class in 2018, I completed a project that earned me the highest grade. i am m looking to improve upon it.',
        demoLink: 'https://github.com/arifulUTM/Chatbot-with-PHP'
    },
    {
        img: './assets/images/chatbot.png',
        title: 'Lost and Found Application',
        description: 'This project aimed to facilitate the easy retrieval of lost items through the use of Servlets, JSP, Maven, and MySQL.',
        demoLink: 'https://github.com/arifulUTM/Lost-and-Found'
    },
    {
        img: './assets/images/chatbot.png',
        title: 'Unique Class Managment System',
        description: 'This project was a part of our Application Development course, completed with a team of four members under the guidance of Dr. Ahmad Fadhil Yusof during my university years.',
        demoLink: 'https://github.com/arifulUTM/Application-Development-Project-UTM-2020'
    },
    // Add more portfolio items as needed
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
