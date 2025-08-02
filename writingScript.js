// Project Modals
const projectModals = {
    project1: {
        title: "Atom's Embrace",
        image: "ProjectImages/AtomsEmbrace/output-onlinepngtools(4).png",
        description: "Atom's Embrace was my first big game project ever. As the project director and systems programmer, I primarily worked on progression systems to advance the game, as well as serving as an Unreal Engine Specialist. I utilized the engine in the best way to ensure optimal performance and a seamless player experience.",
        role: "Lead Designer & Programmer",
        technologies: ["Unreal Engine", "C++", "Blueprints"],
        links: [
            { text: "Play Game", url: "https://atomsembrace.itch.io/atoms-embrace" },
            { text: "Source Code", url: "https://github.com/Benrowan910/AtomsEmbrace" }
        ]
    },
    project2: {
        title: "Dread Not",
        image: "ProjectImages/sub_poster_pilot_PREVIEW.png",
        description: "Dread Not is an asynchronous, cooperative adventure set in a submarine. Players take on the roles of either the Pilot or the Mechanic, being chased by a mysterious creature. They must work together to keep the sub in working condition while ascending to the surface.",
        role: "Project Manager & Programmer",
        technologies: ["Unity", "C#", "Networking"],
        links: [
            { text: "Play Game", url: "https://leviathan-interactive.itch.io/dread-not" }
        ]
    },
    project3: {
        title: "What Lies Beneath",
        image: "ProjectImages/IMG_6829.jpg",
        description: "What Lies Beneath is a 2D dungeon crawler and the first game I ever worked on! My responsibilities included building the backend logic for dialogue, mask capabilities, character controls, and puzzle systems.",
        role: "Systems Programmer",
        technologies: ["Unity", "C#"],
        links: [
            { text: "Play Game", url: "https://monkek.itch.io/what-lies-beneath" }
        ]
    },
    project4: {
        title: "Earthline Protocol",
        image: "ProjectImages/Start_Menu.png",
        description: "Earthline Protocol is a tower defense game made in Unity for the IndieCade Climate Jam (2025). I worked on gameplay systems that allowed our team to build the game efficiently, focusing on complex data structures and editor integration.",
        role: "Gameplay Programmer",
        technologies: ["Unity", "C#"],
        links: [
            { text: "Play Game", url: "https://ibrower.itch.io/earthline-protocol" }
        ]
    },
    project5: {
        title: "Game of Life",
        image: "ProjectImages/Screenshot 2025-01-15 215831.png",
        description: "The Game of Life was a project assigned by a professor at UW-Stout. Developed using Phaser and JavaScript in a full-stack manner, I was responsible for building and optimizing the backend to ensure smooth and efficient game operation.",
        role: "Backend Developer",
        technologies: ["Phaser", "JavaScript", "HTML/CSS"],
        links: [
            { text: "Play Game", url: "https://main.d2mf1swe2rwo3x.amplifyapp.com/" }
        ]
    },
    project6: {
        title: "Doodle Dice",
        image: "ProjectImages/DoodleDice.PNG",
        description: "Doodle Dice is a game of chance created during a 49-hour game jam at UW-Stout. Players roll dice to defeat monsters and progress through the game. This was my first completed project in Godot, where I handled most of the backend programming and art.",
        role: "Programmer & Artist",
        technologies: ["Godot", "GDScript"],
        links: [
            { text: "Play Game", url: "https://tyler-betanski.itch.io/doodle-dice" }
        ]
    },
    project7: {
        title: "Nessy Engine",
        image: "ProjectImages/image-9.png",
        description: "The Nessy Engine is a custom game engine developed since July 2025. Built with OpenGL and Vulkan, the engine focuses on high-fidelity environments with flexible lighting options. The goal is to create an engine that enables visually stunning games with lightweight mechanics.",
        role: "Sole Developer",
        technologies: ["C++", "OpenGL", "Vulkan"],
        links: [
            { text: "Learn More", url: "blubber.html" }
        ]
    },
    project8: {
        title: "Python Physics",
        image: "Images/Screenshot 2025-01-14 181422.png",
        description: "A collection of physics simulations in Python, showcasing concepts such as collision, friction, gravity, and bond forces. These projects serve as a foundation for experimenting with new ideas and understanding physics in game engines.",
        role: "Developer",
        technologies: ["Python", "Pygame"],
        links: [
            { text: "Source Code", url: "https://github.com/Benrowan910/PhysicsEngine-Games.git" }
        ]
    },
    project9: {
        title: "Game Tracker",
        image: "ProjectImages/Screenshot 2025-01-14 180655.png",
        description: "A Flutter application that uses the IGDB API to help users maintain a backlog of games and track notes about them. This project challenged me to navigate a large database and present information effectively across multiple screens.",
        role: "Developer",
        technologies: ["Flutter", "Dart", "IGDB API"],
        links: [
            { text: "Source Code", url: "https://github.com/Benrowan910/walrustracker" }
        ]
    },
    project10: {
        title: "Barnes-Hut Simulation",
        image: "ProjectImages/Screenshot 2025-01-14 163651.png",
        description: "An N-body gravity simulation using the Barnes-Hut algorithm to efficiently calculate gravitational forces between particles. Implemented in C++ with OpenGL for visualization, this project aims to handle 1,000+ particles at high frame rates.",
        role: "Developer",
        technologies: ["C++", "OpenGL"],
        links: [
            { text: "Source Code", url: "https://github.com/Benrowan910/Barnes-Hut-N-Body-Simulation.git" }
        ]
    },
    project11: {
        title: "Shader Programming",
        image: "ProjectImages/AtomsEmbrace/SC1.png",
        description: "A collection of shader programming projects showcasing various techniques including Kuwahara filters, water shaders, quantization effects, and translucency. These demonstrate my expertise in real-time graphics programming.",
        role: "Graphics Programmer",
        technologies: ["GLSL", "HLSL", "Unity Shaders"],
        links: [
            { text: "Source Code", url: "https://github.com/Benrowan910/FinalShaderProject" }
        ]
    }
};

// Modal functionality
const modal = document.getElementById('project-modal');
const modalBody = document.querySelector('.modal-body');
const closeModal = document.querySelector('.close-modal');
const viewDetailsBtns = document.querySelectorAll('.view-details');

viewDetailsBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const projectId = this.getAttribute('data-project');
        const project = projectModals[projectId];
        
        if (project) {
            modalBody.innerHTML = `
                <div class="modal-project">
                    <img src="${project.image}" alt="${project.title}" class="modal-image">
                    <div class="modal-details">
                        <h2>${project.title}</h2>
                        <p>${project.description}</p>
                        <p><strong>Role:</strong> ${project.role}</p>
                        
                        <div class="modal-tech">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                        
                        <div class="modal-links">
                            ${project.links.map(link => `<a href="${link.url}" target="_blank">${link.text}</a>`).join('')}
                        </div>
                    </div>
                </div>
            `;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
});

window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Sticky Header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Active Navigation Highlighting
    const sections = document.querySelectorAll('section');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinksItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });
    
    // Project Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Skill Animation
    const skillBars = document.querySelectorAll('.progress-bar');
    const skillCircles = document.querySelectorAll('.skill-circle');
    
    function animateSkills() {
        skillBars.forEach(bar => {
            const percent = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = percent;
            }, 300);
        });
        
        skillCircles.forEach(circle => {
            const percent = parseInt(circle.dataset.percent);
            const deg = (percent / 100) * 360;
            circle.style.background = `conic-gradient(var(--secondary) ${deg}deg, var(--dark) ${deg}deg)`;
        });
    }
    
    // Timeline Animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function animateTimeline() {
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < window.innerHeight * 0.8) {
                item.classList.add('visible');
            }
        });
    }
    
    // Initialize animations when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'skills') {
                    animateSkills();
                }
                if (entry.target.id === 'timeline') {
                    animateTimeline();
                }
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Form Validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // If validation passes
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }
    
    // Initialize animations on page load
    animateSkills();
    animateTimeline();
});