
        // Enhanced portfolio items
        const portfolioItems = [
            {
                img: './assets/images/bravori.webp',
                title: 'Bravori Music School App',
                description: 'Fixed multiple bugs in a React Native music school application designed for children to learn music. Improved performance and user experience.',
                demoLink: 'https://play.google.com/store/apps/details?id=com.bravorimusic.bravori',
                technologies: ['React Native', 'JavaScript', 'Firebase']
            },
            {
                img: './assets/images/unique.webp',
                title: 'Class Management System',
                description: 'A collaborative project from my university course under Dr. Ahmad Fadhil Yusof. Gained hands-on experience in teamwork, software development, and project management.',
                demoLink: 'https://github.com/arifulUTM/Application-Development-Project-UTM-2020',
                technologies: ['PHP', 'MySQL', 'Bootstrap']
            },
            {
                img: './assets/images/addarapp.webp',
                title: 'Addar Beauty Application',
                description: 'Freelance project for Rubysoft Sdn Bhd to develop a beauty services application. Created features and authored a comprehensive user manual for primary users.',
                demoLink: 'https://addarapp.com/docs/addar-manual-110.pdf',
                technologies: ['Flutter', 'Dart', 'Firebase']
            },
            {
            img: './assets/images/lost.webp',
            title: 'Lost and Found Web Application',
            description: 'Developed a robust lost-and-found web platform using Servlets, JSP, Maven, and MySQL with item registration, search, and authentication features.',
            demoLink: 'https://github.com/arifulUTM/Lost-and-Found',
            technologies: ['Java Servlet', 'JSP', 'MySQL']

            },
            {
                img: './assets/images/travel.webp',
                title: 'Travel Guide Web App',
                description: 'In-development travel guide app for a Spanish company, built with React.js and Laravel, featuring real-time data, authentication, and cloud storage.',
                demoLink: '#',
                technologies: ['React', 'Laravel', 'MySQL']
            },
            {
                img: './assets/images/aitools.webp',
                title: 'AI Research Platform',
                description: 'Developed an AI-powered research platform for academic collaboration and knowledge sharing with advanced search and recommendation features.',
                demoLink: '#',
                technologies: ['Python', 'TensorFlow', 'React', 'MongoDB']
            },
            {
            img: './assets/images/covidTracker.webp',
            title: 'Covid Tracker',
            description: 'React.js application showing real-time COVID-19 stats using Disease.sh API. Includes filtering by country and interactive map visualization.',
            demoLink: 'https://resume-jade-seven.vercel.app/projects',
            technologies: ['JavaScript', 'JSON', 'REST API', 'PHP']
            },
            ];

        // Slider functionality
        let currentSlide = 0;
        let slidesPerView = 3;
        let autoSlideInterval;

        // Initialize portfolio slider
        function initializePortfolioSlider() {
            const slider = document.getElementById('portfolioSlider');
            const dotsContainer = document.getElementById('sliderDots');
            
            // Clear existing content
            slider.innerHTML = '';
            dotsContainer.innerHTML = '';
            
            // Create slides
            portfolioItems.forEach((item, index) => {
                const slide = document.createElement('div');
                slide.className = `portfolio-slide fade-in ${index === 0 ? 'active' : ''}`;
                slide.innerHTML = `
                    <div class="portfolio-card">
                        <div class="portfolio-image-container">
                            <img src="${item.img}" alt="${item.title}" class="portfolio-image">
                            <div class="portfolio-overlay">
                                <a href="${item.demoLink}" target="_blank" class="btn btn-primary">
                                    <i class="fas fa-external-link-alt"></i>
                                    Live Demo
                                </a>
                            </div>
                        </div>
                        <div class="portfolio-content">
                            <h3 class="portfolio-title">${item.title}</h3>
                            <p class="portfolio-description">${item.description}</p>
                            <div class="skill-tags">
                                ${item.technologies.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                `;
                slider.appendChild(slide);
                
                // Create dot
                const dot = document.createElement('div');
                dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
                dot.dataset.index = index;
                dot.addEventListener('click', () => goToSlide(index));
                dotsContainer.appendChild(dot);
            });
            
            updateSlidesPerView();
            updateSlider();
        }

        // Update slides per view based on screen size
        function updateSlidesPerView() {
            if (window.innerWidth <= 900) {
                slidesPerView = 1;
            } else if (window.innerWidth <= 1200) {
                slidesPerView = 2;
            } else {
                slidesPerView = 3;
            }
        }

        // Update slider position
        function updateSlider() {
            const slider = document.getElementById('portfolioSlider');
            const slides = document.querySelectorAll('.portfolio-slide');
            const dots = document.querySelectorAll('.slider-dot');
            
            // Calculate slide width based on slides per view
            const slideWidth = 100 / slidesPerView;
            const translateX = -currentSlide * slideWidth;
            
            slider.style.transform = `translateX(${translateX}%)`;
            
            // Update active states
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentSlide);
            });
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
            
            // Update button states
            document.getElementById('prevBtn').disabled = currentSlide === 0;
            document.getElementById('nextBtn').disabled = currentSlide >= portfolioItems.length - slidesPerView;
        }

        // Go to specific slide
        function goToSlide(index) {
            currentSlide = Math.max(0, Math.min(index, portfolioItems.length - slidesPerView));
            updateSlider();
            resetAutoSlide();
        }

        // Next slide
        function nextSlide() {
            if (currentSlide < portfolioItems.length - slidesPerView) {
                currentSlide++;
                updateSlider();
            } else {
                // Loop back to first slide
                currentSlide = 0;
                updateSlider();
            }
            resetAutoSlide();
        }

        // Previous slide
        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlider();
            } else {
                // Loop to last slide
                currentSlide = portfolioItems.length - slidesPerView;
                updateSlider();
            }
            resetAutoSlide();
        }

        // Auto slide functionality
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 5000);
        }

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }

        // Enhanced theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.body.setAttribute('data-theme', newTheme);
            
            // Update icon with animation
            const icon = themeToggle.querySelector('i');
            icon.style.transform = 'rotate(360deg)';
            icon.style.transition = 'transform 0.6s ease';
            
            setTimeout(() => {
                icon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
                icon.style.transform = 'rotate(0deg)';
            }, 300);
            
            // Save theme preference
            localStorage.setItem('theme', newTheme);
        });

        // Mobile menu functionality
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.className = 'fas fa-bars';
            });
        });

        // Enhanced scroll animations
        function initScrollAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { 
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });
        }

        // Enhanced navbar scroll effect
        function initNavbarScroll() {
            const navbar = document.querySelector('.navbar');
            let lastScrollY = window.scrollY;

            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }

                // Hide navbar on scroll down, show on scroll up
                if (window.scrollY > lastScrollY && window.scrollY > 100) {
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }
                lastScrollY = window.scrollY;
            });
        }

        // Enhanced location and email switching
        const locationElement = document.getElementById("location-display");
        const locations = ["Liepāja, Latvia", "Available Remotely"];
        let locationIndex = 0;

        const emailElement = document.getElementById("email-display");
        const emails = [
            "arifulatwork@gmail.com", 
            "Md-Ariful.Islam@edu.rtu.lv", 
            "Md-Ariful.Islam@rtu.lv"
        ];
        let emailIndex = 0;

        function updateContactInfo() {
            locationIndex = (locationIndex + 1) % locations.length;
            emailIndex = (emailIndex + 1) % emails.length;
            
            // Add fade transition
            locationElement.style.opacity = '0';
            emailElement.style.opacity = '0';
            
            setTimeout(() => {
                locationElement.textContent = locations[locationIndex];
                emailElement.textContent = emails[emailIndex];
                
                locationElement.style.opacity = '1';
                emailElement.style.opacity = '1';
            }, 200);
        }

        // Load saved theme
        function loadSavedTheme() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            document.body.setAttribute('data-theme', savedTheme);
            
            const icon = themeToggle.querySelector('i');
            icon.className = savedTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            loadSavedTheme();
            initializePortfolioSlider();
            initScrollAnimations();
            initNavbarScroll();
            
            // Set up slider navigation
            document.getElementById('prevBtn').addEventListener('click', prevSlide);
            document.getElementById('nextBtn').addEventListener('click', nextSlide);
            
            // Start auto slide
            startAutoSlide();
            
            // Update slides per view on resize
            window.addEventListener('resize', () => {
                updateSlidesPerView();
                updateSlider();
            });
            
            // Add loading animation
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
            
            // Start contact info rotation
            setInterval(updateContactInfo, 8000);
        });

        // Add smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
