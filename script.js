// Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu functionality - FIXED
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                // Close mobile menu if open
                navLinks.classList.remove('active');
                
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        // Project modal functionality
        function openProjectModal(projectId) {
            const modal = document.getElementById('project-modal');
            const modalTitle = document.getElementById('modal-title');
            const modalSubtitle = document.getElementById('modal-subtitle');
            const modalDescription = document.getElementById('modal-description');
            const modalHighlight = document.getElementById('modal-highlight');
            const modalImg = document.getElementById('modal-img');
            const modalTech = document.querySelector('.modal-tech');
            const modalLinks = document.querySelector('.modal-links');
            
            // Clear previous content
            modalTech.innerHTML = '';
            modalLinks.innerHTML = '';
            
            // Project data
            let projectData;
            
            switch(projectId) {
                case 'project1': // Nessy Engine
                    projectData = {
                        title: 'The Nessy Engine',
                        subtitle: 'Custom Game Engine',
                        description: 'The Nessy Engine is a custom game engine in development since July 2025. Built with C++ using OpenGL and Vulkan for rendering, the engine focuses on high-fidelity environments with flexible lighting options. The goal is to create an engine that enables visually stunning games with lightweight mechanics, addressing frustrations with bloat in existing engines.',
                        highlight: 'The Lock Lake Renderer provides multiple rendering pathways, allowing developers to choose between performance and visual fidelity based on their project needs.',
                        image: 'ProjectImages/image-9.png',
                        tech: ['C++', 'Vulkan', 'OpenGL', 'Engine Architecture', 'Rendering'],
                        links: [
                            {text: 'View Blog', url: 'blubber.html', icon: 'fas fa-book'}
                        ]
                    };
                    break;
                    
                case 'project2': // Atom's Embrace
                    projectData = {
                        title: "Atom's Embrace",
                        subtitle: 'Narrative Walking Simulator',
                        description: "Atom's Embrace is a narrative-driven walking simulator that explores themes of survivors guilt in a post-apocalyptic world. As the project lead and systems programmer, I designed the game's progression systems and optimized Unreal Engine implementation for the best possible performance.",
                        highlight: 'The emotional narrative is enhanced by dynamic environmental storytelling that changes based on player choices and progression.',
                        image: 'ProjectImages/AtomsEmbrace/Barrel.png',
                        tech: ['Unreal Engine', 'C++', 'Narrative Design', 'Blueprints', 'Environmental Storytelling'],
                        links: [
                            {text: 'Play Game', url: 'https://atomsembrace.itch.io/atoms-embrace', icon: 'fas fa-gamepad'}
                        ]
                    };
                    break;
                    
                case 'project3': // Dread Not
                    projectData = {
                        title: 'Dread Not',
                        subtitle: 'Cooperative Submarine Adventure',
                        description: 'Dread Not is an asynchronous cooperative game where players take on roles of Pilot and Mechanic aboard a submarine being chased by a mysterious creature. As Project Manager for this capstone project, I coordinated a team of 12 developers while implementing core gameplay systems using Unity and C#.',
                        highlight: 'The asymmetric gameplay requires constant communication and coordination between players with different abilities and perspectives.',
                        image: 'ProjectImages/sub_poster_pilot_PREVIEW.png',
                        tech: ['Unreal', 'C++', 'Multiplayer', 'Network Programming', 'Project Management'],
                        links: [
                            {text: 'Play Game', url: 'https://store.steampowered.com/app/3616560/Dread_Not/', icon: 'fas fa-gamepad'}
                        ]
                    };
                    break;
                
                case 'project4': // Earthline Protocol
                    projectData = {
                        title: 'Earthline Protocol',
                        subtitle: 'An Itch Game Made for IndieCade Climate Jame',
                        description: 'Earthline Protocol is a tower defense game made in Unity for the IndieCade Climate Jam (circa 2025.) I worked on gameplay systems that allowed our team to navigate the engine in such a way to build the game from the ground up with the assets they needed. Working on complex data structures and editor focused integration of the backend. ',
                        highlight: 'Balance between managing enemies and environmental happenings.',
                        image: 'ProjectImages/Start_Menu.png',
                        tech: ['Unity', 'C#', 'Gameplay Systems Programming'],
                        links: [
                            {text: 'Play Game', url: 'https://store.steampowered.com/app/3616560/Dread_Not/', icon: 'fas fa-gamepad'}
                        ]
                    };
                    break;

                case 'project5': // Python Physics Projects
                    projectData = {
                        title: 'Python Physics Projects',
                        subtitle: 'PyGame Physics Based Games',
                        description: 'These are a collection of projects that I completed to showcase my understanding of physics in game engines, how they are handled and calculated then applied to the objects. I continuously add, tweak, and experiment with these projects in order to test new ideas and such.',
                        highlight: 'Showcasing my knowledge of Physics mathematics in Python',
                        image: 'Images/Screenshot 2025-01-14 181422.png',
                        tech: ['PyGame', 'Python', 'Physics Programming'],
                        links: [
                            {text: 'Play Game', url: 'https://store.steampowered.com/app/3616560/Dread_Not/', icon: 'fas fa-gamepad'}
                        ]
                    };
                    break;
                
                case 'project6': // N-Body Simulation
                    projectData = {
                        title: 'N-Body Simulation',
                        subtitle: 'An N-Body Simulation using OpenFrameworks',
                        description: 'This project was an attempt to simulate a gravitational field with particles in OpenGL. The goal here was to be able to simulate this at a particle count of 1,000+ at a high framerate. In order to achieve this, I attempted a barnes-hut algorithmic approach to rendering the particles on the screen. **THIS PROJECT IS STILL A WORK IN PROGRESS**',
                        highlight: 'The project uses the openframeworks library to simulate gravitational fields.',
                        image: 'ProjectImages/Screenshot 2025-01-14 163651.png',
                        tech: ['OpenFrameworks', 'C++','Graphics Programming'],
                        links: [
                            {text: 'Play Game', url: 'https://store.steampowered.com/app/3616560/Dread_Not/', icon: 'fas fa-gamepad'}
                        ]
                    };
                    break;
                                    
                case 'project7': // Shader Programming
                    projectData = {
                        title: 'Shader Programming',
                        subtitle: 'A Project Containing Multiple Different Shader Programming Concepts',
                        description: 'These are a selection of projects that showcase some of my skills specifically in Shader Programming. Some notable inclusions are: Kuwahara Filter, Water Shaders, Quantization effects, Translucency, etc.',
                        highlight: 'A showcase of shader programming as well as procedural modeling.',
                        image: 'ProjectImages/AtomsEmbrace/SC1.png',
                        tech: ['Unreal', 'C++', 'Graphics Programming'],
                        links: [
                            {text: 'Play Game', url: 'https://store.steampowered.com/app/3616560/Dread_Not/', icon: 'fas fa-gamepad'}
                        ]
                    };
                    break;

                case 'project8': // Game of Life Web Game
                    projectData = {
                        title: 'Game of Life Web Game',
                        subtitle: 'A Web Game Version of the Board Game "Game of Life',
                        description: 'The purpose of this application is to have a personal app on my phone that can store information about games, such as; Whether I have played those games, My thoughts on those games. In order to achieve this I utilize the IGDB api integration to have access to their database of games. This project has challenged my ability to navigate a large database and display that information to the user (me). As well as tracking that information over to new pages. This was the first time I had ever used Dart or Flutter to build anything, so it was more or less to familiarize myself with the language and build tools.',
                        highlight: 'Working with several clients at the University of Wisconsin - Stout to Build apps',
                        image: 'ProjectImages/Screenshot 2025-01-15 215831.png',
                        tech: ['Phaser', 'NodeJS', 'AWS', 'Project Management'],
                        links: [
                            {text: 'Play Game', url: 'https://store.steampowered.com/app/3616560/Dread_Not/', icon: 'fas fa-gamepad'}
                        ]
                    };
                    break;
            }
            
            // Populate modal with data
            modalTitle.textContent = projectData.title;
            modalSubtitle.textContent = projectData.subtitle;
            modalDescription.textContent = projectData.description;
            modalHighlight.textContent = projectData.highlight;
            modalImg.src = projectData.image;
            
            // Add tech tags
            projectData.tech.forEach(tech => {
                const tag = document.createElement('span');
                tag.className = 'tech-tag';
                tag.textContent = tech;
                modalTech.appendChild(tag);
            });
            
            // Add links
            projectData.links.forEach(link => {
                const a = document.createElement('a');
                a.href = link.url;
                a.className = 'btn';
                a.target = '_blank';
                a.innerHTML = `<i class="${link.icon}"></i> ${link.text}`;
                modalLinks.appendChild(a);
            });
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeProjectModal() {
            const modal = document.getElementById('project-modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside content
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('project-modal');
            if (event.target === modal) {
                closeProjectModal();
            }
        });

        // Form validation
        const contactForm = document.querySelector('.contact-form form');
        contactForm.addEventListener('submit', function(e) {
            const email = document.getElementById('email').value;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailPattern.test(email)) {
                e.preventDefault();
                alert('Please enter a valid email address.');
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    navLinks.style.display = 'none';
                }
            });
        });

                // Project filtering functionality
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const projectCards = document.querySelectorAll('.project-card');
            const projectCount = document.getElementById('project-count');
            
            // Set initial count
            projectCount.textContent = projectCards.length;
            
            // Add animation delay to each project card
            projectCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
            });
            
            // Filter button functionality
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    button.classList.add('active');
                    
                    const filter = button.dataset.filter;
                    
                    let visibleCount = 0;
                    
                    // Filter projects
                    projectCards.forEach(card => {
                        if (filter === 'all') {
                            card.classList.remove('hidden');
                            visibleCount++;
                        } else {
                            if (card.dataset.category === filter) {
                                card.classList.remove('hidden');
                                visibleCount++;
                            } else {
                                card.classList.add('hidden');
                            }
                        }
                    });
                    
                    // Update project count
                    projectCount.textContent = visibleCount;
                });
            });
        });