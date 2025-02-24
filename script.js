// Skills Modal Logic
function openSkillsModal(category) {
    const modal = document.getElementById('skills-modal');
    const modalBody = document.getElementById('modal-body');
    
    const skillsData = {
        languages: {
            title: 'Languages',
            details: ['C++', 'C#', 'Python', 'Java', 'GLSL', 'SQL', 'HTML/CSS', 'JavaScript']
        },
        methodologies: {
            title: 'Methodologies',
            details: ['Agile Development', 'Scrum', 'Kanban', 'Code Reviews', 'Version Control']
        },
        'project-management': {
            title: 'Project Management',
            details: ['Jira', 'Trello', 'Asana', 'Git', 'Slack']
        },
        interests: {
            title: 'Interests',
            details: ['Game Design', '3D Rendering', 'Shader Programming', 'Physics Simulations']
        },
        'relevant-courses': {
            title: 'Relevant Courses',
            details: ['Game Programming', 'Operating Systems', 'Data Structures', 'Algorithms']
        },
        development: {
            title: 'Development Tools',
            details: ['Unreal Engine', 'Unity', 'Godot', 'Visual Studio', 'JetBrains IDE']
        }
    };

    const data = skillsData[category];
    modalBody.innerHTML = `
        <h3>${data.title}</h3>
        <ul>${data.details.map(skill => `<li>${skill}</li>`).join('')}</ul>
    `;
    modal.style.display = 'flex';
}

function closeSkillsModal() {
    const modal = document.getElementById('skills-modal');
    modal.style.display = 'none';
}

// Project Modal Logic
function openProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('project-modal-body');

    let content = '';
    switch (projectId) {
        case 'project1':
            content = `
                <div style="
                    text-align: center; 
                    padding: 20px; 
                    max-width: 600px; 
                    max-height: 90vh; /* Ensures the modal doesn't exceed the viewport height */
                    overflow-y: auto; /* Enables scrolling for overflowing content */
                    border: 1px solid #ccc; 
                    border-radius: 10px; 
                    background-color: white; 
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
                ">
                    <img src="ProjectImages/AtomsEmbrace/output-onlinepngtools(4).png" alt="Project 2" 
                        style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
                    <h2 style="font-size: 24px; margin-bottom: 10px;">Dread Not</h2>
                    <p style="
                        font-size: 16px; 
                        line-height: 1.6; 
                        margin-bottom: 20px; 
                        text-align: justify; 
                        word-wrap: break-word; 
                    ">
                        Dread Not is an asynchronous, cooperative adventure set in a submarine. Playing as the Pilot, or the Mechanic,
                        you are being chased by some kind of creature. You must work together to keep the sub in working condition while you ascend to the surface.
                    </p>
                    <a href="https://atomsembrace.itch.io/atoms-embrace" style="text-decoration: none;">
                        <button style="
                            background-color: #007BFF; 
                            color: white; 
                            padding: 10px 20px; 
                            font-size: 16px; 
                            border: none; 
                            border-radius: 5px; 
                            cursor: pointer;
                        ">
                            View Project
                        </button>
                    </a>
                </div>
            `;
            break;
        case 'project2':
            content = `
                <div style="
                    text-align: center; 
                    padding: 20px; 
                    max-width: 600px; 
                    max-height: 90vh; /* Ensures the modal doesn't exceed the viewport height */
                    overflow-y: auto; /* Enables scrolling for overflowing content */
                    border: 1px solid #ccc; 
                    border-radius: 10px; 
                    background-color: white; 
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
                ">
                    <img src="ProjectImages/sub_poster_pilot_PREVIEW.png" alt="Project 2" 
                        style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
                    <h2 style="font-size: 24px; margin-bottom: 10px;">Dread Not</h2>
                    <p style="
                        font-size: 16px; 
                        line-height: 1.6; 
                        margin-bottom: 20px; 
                        text-align: justify; 
                        word-wrap: break-word; 
                    ">
                        Dread Not is an asynchronous, cooperative adventure set in a submarine. Playing as the Pilot, or the Mechanic,
                        you are being chased by some kind of creature. You must work together to keep the sub in working condition while you ascend to the surface.
                    </p>
                    <a href="https://leviathan-interactive.itch.io/dread-not" style="text-decoration: none;">
                        <button style="
                            background-color: #007BFF; 
                            color: white; 
                            padding: 10px 20px; 
                            font-size: 16px; 
                            border: none; 
                            border-radius: 5px; 
                            cursor: pointer;
                        ">
                            View Project
                        </button>
                    </a>
                </div>
            `;
            break;
        // Repeat the structure for all other cases
        case 'project3':
            content = `
                <div style="
                    text-align: center; 
                    padding: 20px; 
                    max-width: 600px; 
                    max-height: 90vh; /* Ensures the modal doesn't exceed the viewport height */
                    overflow-y: auto; /* Enables scrolling for overflowing content */
                    border: 1px solid #ccc; 
                    border-radius: 10px; 
                    background-color: white; 
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
                ">
                    <img src="ProjectImages/IMG_6829.jpg" alt="Project 2" 
                        style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
                    <h2 style="font-size: 24px; margin-bottom: 10px;">What Lies Beneath</h2>
                    <p style="
                        font-size: 16px; 
                        line-height: 1.6; 
                        margin-bottom: 20px; 
                        text-align: justify; 
                        word-wrap: break-word; 
                    ">
                        What Lies Beneath is a 2D dungeon crawler, and also the first game I ever worked on!
<br><br>
                        My responsibilities for this project were to build the backend logic for most of this game. Including but not limited to:
                        Dialogue, Mask Capabilities, Character Controls, Puzzle systems, etc.
                    </p>
                    <a href="https://monkek.itch.io/what-lies-beneath" style="text-decoration: none;">
                        <button style="
                            background-color: #007BFF; 
                            color: white; 
                            padding: 10px 20px; 
                            font-size: 16px; 
                            border: none; 
                            border-radius: 5px; 
                            cursor: pointer;
                        ">
                            View Project
                        </button>
                    </a>
                </div>
            `;
            break;
            case 'project4':
            content = `
                <div style="
                    text-align: center; 
                    padding: 20px; 
                    max-width: 600px; 
                    max-height: 90vh; /* Ensures the modal doesn't exceed the viewport height */
                    overflow-y: auto; /* Enables scrolling for overflowing content */
                    border: 1px solid #ccc; 
                    border-radius: 10px; 
                    background-color: white; 
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
                ">
                    <img src="ProjectImages/Screenshot_2024-10-18_013630.png" alt="Project 2" 
                        style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
                    <h2 style="font-size: 24px; margin-bottom: 10px;">Vulkan Graphics Renderer (Tusk Graphics Engine) and Blubber Game Engine</h2>
                    <p style="
                        font-size: 16px; 
                        line-height: 1.6; 
                        margin-bottom: 20px; 
                        text-align: justify; 
                        word-wrap: break-word; 
                    ">
                        This is a project utilizing the Vulkan graphics library and API to attempt to build a framework of a game engine and graphics engine.
<br><br>
                        Using an object oriented approach in C++, this is a continuous project that I intend to work on for years. With a page entirely dedicated to it and
                        I intend to keep the code open and reviewable throughout this process.
                    </p>
                    <a href="blubber.html" style="text-decoration: none;">
                        <button style="
                            background-color: #007BFF; 
                            color: white; 
                            padding: 10px 20px; 
                            font-size: 16px; 
                            border: none; 
                            border-radius: 5px; 
                            cursor: pointer;
                        ">
                            View Project
                        </button>
                    </a>
                </div>
            `;
            break;
            case 'project5':
            content = `
                <div style="
                    text-align: center; 
                    padding: 20px; 
                    max-width: 600px; 
                    max-height: 90vh; /* Ensures the modal doesn't exceed the viewport height */
                    overflow-y: auto; /* Enables scrolling for overflowing content */
                    border: 1px solid #ccc; 
                    border-radius: 10px; 
                    background-color: white; 
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
                ">
                    <img src="Images/Screenshot 2025-01-14 181422.png" alt="Project 2" 
                        style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
                    <h2 style="font-size: 24px; margin-bottom: 10px;">Python Physics Projects</h2>
                    <p style="
                        font-size: 16px; 
                        line-height: 1.6; 
                        margin-bottom: 20px; 
                        text-align: justify; 
                        word-wrap: break-word; 
                    ">
                        These are a collection of projects that I completed to showcase my understanding of physics in game engines, how they are handled and calculated then applied to the objects.
<br><br>
                        I continuously add, tweak, and experiment with these projects in order to test new ideas and such.
                    </p>
                    <a href="https://github.com/Benrowan910/PhysicsEngine-Games.git" style="text-decoration: none;">
                        <button style="
                            background-color: #007BFF; 
                            color: white; 
                            padding: 10px 20px; 
                            font-size: 16px; 
                            border: none; 
                            border-radius: 5px; 
                            cursor: pointer;
                        ">
                            View Project
                        </button>
                    </a>
                </div>
            `;
            break;
            case 'project6':
            content = `
                <div style="
                    text-align: center; 
                    padding: 20px; 
                    max-width: 600px; 
                    max-height: 90vh; /* Ensures the modal doesn't exceed the viewport height */
                    overflow-y: auto; /* Enables scrolling for overflowing content */
                    border: 1px solid #ccc; 
                    border-radius: 10px; 
                    background-color: white; 
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
                ">
                    <img src="ProjectImages/Screenshot 2025-01-14 180655.png" alt="Project 2" 
                        style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
                    <h2 style="font-size: 24px; margin-bottom: 10px;">Game Tracking Application With Flutter</h2>
                    <p style="
                        font-size: 16px; 
                        line-height: 1.6; 
                        margin-bottom: 20px; 
                        text-align: justify; 
                        word-wrap: break-word; 
                    ">
                        The purpose of this application is to have a personal app on my phone that can store information about games, such as;
                        Whether I have played those games, My thoughts on those games.
<br><br>
                        In order to achieve this I utilize the IGDB api integration to have access to their database of games.
<br><br>
                        This project has challenged my ability to navigate a large database and display that information to the user (me). As well as tracking that information
                        over to new pages.
<br><br>
                        This was the first time I had ever used Dart or Flutter to build anything, so it was more or less to familiarize myself with the language and build tools.
                    </p>
                    <a href="https://github.com/Benrowan910/walrustracker" style="text-decoration: none;">
                        <button style="
                            background-color: #007BFF; 
                            color: white; 
                            padding: 10px 20px; 
                            font-size: 16px; 
                            border: none; 
                            border-radius: 5px; 
                            cursor: pointer;
                        ">
                            View Project
                        </button>
                    </a>
                </div>
            `;
            break;
            case 'project7':
            content = `
                <div style="
                    text-align: center; 
                    padding: 20px; 
                    max-width: 600px; 
                    max-height: 90vh; /* Ensures the modal doesn't exceed the viewport height */
                    overflow-y: auto; /* Enables scrolling for overflowing content */
                    border: 1px solid #ccc; 
                    border-radius: 10px; 
                    background-color: white; 
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
                ">
                    <img src="ProjectImages/Screenshot 2025-01-14 163651.png" alt="Project 2" 
                        style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
                    <h2 style="font-size: 24px; margin-bottom: 10px;">Barnes-Hut N-Body Gravity Simulation</h2>
                    <p style="
                        font-size: 16px; 
                        line-height: 1.6; 
                        margin-bottom: 20px; 
                        text-align: justify; 
                        word-wrap: break-word; 
                    ">
                        This project was an attempt to simulate a gravitational field with particles in OpenGL. The goal here was to be able to simulate this at a particle count of 1,000+ at a high framerate.
                        In order to achieve this, I attempted a barnes-hut algorithmic approach to rendering the particles on the screen. **THIS PROJECT IS STILL A WORK IN PROGRESS**
                    </p>
                    <a href="https://github.com/Benrowan910/Barnes-Hut-N-Body-Simulation.git" style="text-decoration: none;">
                        <button style="
                            background-color: #007BFF; 
                            color: white; 
                            padding: 10px 20px; 
                            font-size: 16px; 
                            border: none; 
                            border-radius: 5px; 
                            cursor: pointer;
                        ">
                            View Project
                        </button>
                    </a>
                </div>
            `;
            break;
            case 'project8':
            content = `
                <div style="
                    text-align: center; 
                    padding: 20px; 
                    max-width: 600px; 
                    max-height: 90vh; /* Ensures the modal doesn't exceed the viewport height */
                    overflow-y: auto; /* Enables scrolling for overflowing content */
                    border: 1px solid #ccc; 
                    border-radius: 10px; 
                    background-color: white; 
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
                ">
                    <img src="ProjectImages/AtomsEmbrace/SC1.png" alt="Project 2" 
                        style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
                    <h2 style="font-size: 24px; margin-bottom: 10px;">Shader Programming</h2>
                    <p style="
                        font-size: 16px; 
                        line-height: 1.6; 
                        margin-bottom: 20px; 
                        text-align: justify; 
                        word-wrap: break-word; 
                    ">
                        These are a selection of projects that showcase some of my skills specifically in Shader Programming.
                        Some notable inclusions are: Kuwahara Filter, Water Shaders, Quantization effects, Translucency, etc.
                    </p>
                    <a href="https://github.com/Benrowan910/FinalShaderProject" style="text-decoration: none;">
                        <button style="
                            background-color: #007BFF; 
                            color: white; 
                            padding: 10px 20px; 
                            font-size: 16px; 
                            border: none; 
                            border-radius: 5px; 
                            cursor: pointer;
                        ">
                            View Project
                        </button>
                    </a>
                </div>
            `;
            break;
            case 'project9':
            content = `
                <div style="
                    text-align: center; 
                    padding: 20px; 
                    max-width: 600px; 
                    max-height: 90vh; /* Ensures the modal doesn't exceed the viewport height */
                    overflow-y: auto; /* Enables scrolling for overflowing content */
                    border: 1px solid #ccc; 
                    border-radius: 10px; 
                    background-color: white; 
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
                ">
                    <img src="ProjectImages/Screenshot 2025-01-15 215831.png" alt="Project 2" 
                        style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
                    <h2 style="font-size: 24px; margin-bottom: 10px;">Dread Not</h2>
                    <p style="
                        font-size: 16px; 
                        line-height: 1.6; 
                        margin-bottom: 20px; 
                        text-align: justify; 
                        word-wrap: break-word; 
                    ">
                        The Game of Life was a project assigned to me upon request from a professor at UW-Stout. 
                        The Game of Life was developed using Phaser and Javascript in a fullstack development manner.
                        My responsibilities on the project were to build and optimize the backend to a point where the game could operate 
                        in a smooth and efficient manner. Changing algorithms and functions from previous versions of the project.

                    </p>
                    <a href="https://main.d2mf1swe2rwo3x.amplifyapp.com/" style="text-decoration: none;">
                        <button style="
                            background-color: #007BFF; 
                            color: white; 
                            padding: 10px 20px; 
                            font-size: 16px; 
                            border: none; 
                            border-radius: 5px; 
                            cursor: pointer;
                        ">
                            View Project
                        </button>
                    </a>
                </div>
            `;
            break;
            case 'project10':
                content = `
                    <div style="
                        text-align: center; 
                         max-width: 600px; 
                        max-height: 90vh; /* Ensures the modal doesn't exceed the viewport height */
                        overflow-y: auto; /* Enables scrolling for overflowing content */
                        border: 1px solid #ccc; 
                        border-radius: 10px; 
                        background-color: white; 
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
                    ">
                        <img src="ProjectImages/Screenshot 2025-01-15 215831.png" alt="Project 2" 
                            style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
                        <h2 style="font-size: 24px; margin-bottom: 10px;">Doodle Dice</h2>
                        <p style="
                            font-size: 16px; 
                            line-height: 1.6; 
                            margin-bottom: 20px; 
                            text-align: justify; 
                            word-wrap: break-word; 
                        ">
                            Doodle Dice was a game made during a 49 hour game jam at the UW-Stout
                            IGDA Spring Semester Game Jam. This was my first completed project in Godot, 
                            I worked almost entirely on the backend of the game making sure it worked (and, not to brag
                            made the art.)
    
                        </p>
                        <a href="https://tyler-betanski.itch.io/doodle-dice" style="text-decoration: none;">
                            <button style="
                                background-color: #007BFF; 
                                color: white; 
                                padding: 10px 20px; 
                                font-size: 16px; 
                                border: none; 
                                border-radius: 5px; 
                                cursor: pointer;
                            ">
                                View Project
                            </button>
                        </a>
                    </div>
                `;
                break; 
                    // Add more cases for additional projects
        default:
            content = `<p class="modal-description">Project details are not available.</p>`;
            break;
        // Add more cases for other projects
    }

    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
    modalBody.innerHTML = '';
}

// Close modals when clicking outside
window.onclick = function (event) {
    const skillsModal = document.getElementById('skills-modal');
    const projectModal = document.getElementById('project-modal');

    if (event.target === skillsModal) {
        closeSkillsModal();
    } else if (event.target === projectModal) {
        closeProjectModal();
    }
};

// Timeline Animation
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineLine = document.querySelector('.timeline-line');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    entry.target.classList.remove('inactive');
                } else {
                    entry.target.classList.remove('active');
                    entry.target.classList.add('inactive');
                }
            });
        },
        {
            threshold: 0.5,
        }
    );

    timelineItems.forEach((item) => {
        observer.observe(item);
    });

    // Animate the timeline line based on scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const timelineHeight = document.querySelector('.timeline').offsetHeight;
        const viewportHeight = window.innerHeight;

        const scrolledPercentage = Math.min(scrollY / (timelineHeight - viewportHeight), 1);
        timelineLine.style.height = `${scrolledPercentage * 100}%`;
    });
});

function validateForm() {
    // Validate Email
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  // Basic email regex
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate Phone Number
    const phone = document.getElementById("phone").value;
    const phonePattern = /^\+?[0-9]{1,4}?[-.\s]?[0-9]{1,3}?[-.\s]?[0-9]{4,10}$/;  // Simple international phone number regex
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    return true;  // All validations passed
}


// Sample blog data (replace with your actual data or fetch from an API)
const blogPosts = {
    1: {
        title: "Why We're Making Dread Not",
        author: "Sarah Ziebarth",
        content: `The water is dark and incredibly cold. The pressure is intense, and the stakes couldn’t be higher... <br> <br> 
        After being attacked by a colossal sea creature, a small nuclear submarine outfitted for research is thrown into a high-stakes 
        battle and must reach the surface before air runs out. Players take on the role of either the Pilot or the Mechanic and must work 
        together to keep the submarine stable by communicating with each other, fixing failing systems, and navigating through perilous waters. 
        Survival depends on the pair’s ability to work together under immense pressure. Failure is not an option. <br> <br> Dread Not is a virtual 
        reality/PC asymmetric co-op game created by Leviathan Interactive, a studio comprised of 15 UW-Stout students, whose mission is to unite people 
        through games! You play as a pair of marine researchers aboard a doomed vessel that has suffered severe damage and only has 10 minutes before running out of oxygen. 
        Your only chance of reaching the surface is by making emergency repairs, which are completed through cooperative and individual puzzles scattered throughout the 
        system rooms of the submarine. The Pilot, who can be played on either PC or in VR, is constrained to a single room where they control navigation and relay 
        information to the Mechanic in order to keep necessary systems up and running. Alternatively, the Mechanic, played only on PC, is able to move between all 
        other rooms and must repair systems under the Pilot's guidance. This game is all about communication and cooperation. In a world that’s increasingly 
        connected, inspiring people to reach out and work with each other is great motivation for our team. We believe that by creating a game that not only 
        brings people together, but literally requires two to play, we can gradually make the world a better and more entertaining place. <br> <br> Generating a fun, 
        yet semi-chaotic atmosphere for players that allows them to really feel the tension of the situation was also key to the idea of this game, and what better way 
        to do that than have both players be in completely different roles with simple, yet interconnected tasks. This is what led our team to implement both PC and 
        VR; we wanted to enhance that asymmetric experience by having two distinct modes of immersion and additionally add another layer of interactivity to the 
        gameplay of the Pilot. Transporting the more stationary role of the two into the environment in such a way that allows them to feel as though they’re 
        actually there helps intensify and incorporate action into an experience that otherwise doesn’t provide much space to explore. However, there is still PC 
        compatibility for the Pilot available for players who prefer a traditional platform, seeing as getting the game into as many hands as possible was another 
        team goal of ours. <br> <br> Needless to say, with inspirations taken from real 1960’s Navy Nuclear Ballistic Missile submarines of the George Washington 
        Class combined with the 80's vibes found in cinematic classics such as The Hunt for Red October and Jaws, Dread Not is sure to be an absolute blast for players 
        of all ages. Will you sync or swim? `
    },
    2: {
        title: "Chaos in Deep Waters",
        author: "Eleanor Berg",
        content: `Deep beneath the water’s surface, under hundreds of tons of pressure, at the depth 
        the furthest rays of the sun can’t reach is where the crew members of 
        this beaten-up tin can of a submarine find themselves. If they fail to keep the machine functioning, 
        they will be flattened in an instant by the unwavering pressure of the sea. 
        <br><br>
        The Mechanic sprints haphazardly through the submarine, their footsteps drowned out by the piercing alarms. 
        They shout, their voice echoing through the metal hull, but the target of their frustration simply turns down 
        the radio’s volume. The Pilot and the Mechanic are arguing. The Pilot, stuck in the cockpit, pours even more 
        coffee into their "World's Best Submarine Pilot” mug with shaking hands. The sonar pings echo off the steel walls. 
        Something is outside the submarine. The Pilot doesn’t notice, they are screaming through the comms system at the Mechanic, 
        who just said something very rude about the Pilot. Something in the deep dark grows nearer, unseen and unheard. 
        The submarine creaks as the clock ticks down. Water bursts out from a pipe behind a fish-themed motivational poster 
        in the kitchen. The Mechanic can’t understand the Pilot’s directions. The Pilot can’t nderstand the submarine’s user 
        manual. If they don’t communicate efficiently and work together, they will both die, and probably also get fired.
        <br><br>
        Despite the inherent horror the open ocean provides, Dread Not is not meant to be a dark and serious game. 
        We want panic, we want some fear, but communication between the two players is the main priority. What is 
        needed is some lightheartedness and humor to encourage the players to interact and fight playfully with 
        each other. We wanted to make the world around the ship dark yet sublimely beautiful in addition to having 
        a fun, stressful but not overly so, energy-filled game. The juxtaposition of those two ideas made actualizing 
        the atmosphere a bit of a struggle. 
        <br><br>
        We spent a long time in predevelopment trying to nail down consistent mood and aesthetics through concept art 
        and having watch parties of theme-related movies. Making the game pretty was straightforward: prioritizing mood 
        lighting, god rays, pops of color, particle effects, and extra windows to watch the schools of fish– or to 
        watch out for whatever is lurking in the dark. However, getting the general mood right was much harder. On 
        one hand, we want the player to feel stressed, panicked, and maybe frustrated, but we also want them to enjoy 
        the game instead of rage-quitting. We decided an effective way to give the players a break from the panic was to 
        have environmental assets tell a story, not of seriousness and horror, but of cynical, overworked employees and 
        an absurd, out of touch corporation. Many props were included with the sole purpose of forcing players to break 
        out of their frustration. We determined that adding some absurdity to the game helped players relax and get more 
        fun out of the struggle. Eventually we got the mood nailed down in concept, and now all that is left is to make 
        it a reality. 
        <br><br>`
    },
    3: {
        title: "The World of Dread Not",
        author: "Gabe Anderson",
        content: `The ocean – what a wonderful, diverse, horrifying place to go. Well, you’ve been sent down in a rickety 
        ole’ submarine to research a possible new species. Of course, you’re also needed to collect some extravagant 
        goods for your partner company and expedition funder, Sienna Allure. Sienna is a rising multinational conglomerate 
        hell bent on delivering quality luxury products to its customers. Their newest hit product is a perfume made from a 
        kind of ambergris originating from an undiscovered species that seemingly comes from an unexplored region of the ocean. 
        The group of researchers responsible for the discovery are dying to prove this is a new species after all. To get funding 
        and a capable submarine, they agreed to work with Sienna Allure… a deal with the devil. 
        <br><br>
        Cordelia, the submarine the players are on, is a 1960’s era United States nuclear powered George Washington. Sienna 
        Allure was able to make this lucrative purchase because the government deemed it unsalvageable and useless. 
        Luckily, Sienna Allure has also deemed you expendable! The Cordelia is an amalgamation of parts that barely 
        function together; some components have been appropriately updated to 1980’s technology, while others are stuck 
        in the past. Not to mention that undiscovered creature, Charlie, will make his presence known. He isn’t too happy 
        with your intrusion on his turf. 
        <br><br>
        The narrative in Dread Not is driven primarily by captivating environments and immersive audio. We incorporate dynamic 
        lighting affected by the environment and creatures, decals and logos plastered on the walls and equipment, 
        in addition with incredible 80’s themed music to bring it all to life. While your employers may not have your 
        well-being in mind, the automated voice onboard certainly does, though it may not always be too helpful. All the 
        world building is to help contrast suspense and humor; making a more chaotic scenario for the players to work through.
        `
    }
};

// Function to display blog content
function displayBlogContent(postId) {
    const blogContentSection = document.getElementById("blog-content");
    const blogListSection = document.getElementById("blog-list");

    // Hide the blog list and show the blog content
    blogListSection.style.display = "none";
    blogContentSection.style.display = "block";

    // Populate the blog content
    const blogPost = blogPosts[postId];
    document.getElementById("blog-content-title").textContent = blogPost.title;
    document.getElementById("blog-content-body").innerHTML = `
        <p><em>By ${blogPost.author}</em></p>
        ${blogPost.content}
    `;
}

// Function to go back to the blog list
function goBackToBlogList() {
    const blogContentSection = document.getElementById("blog-content");
    const blogListSection = document.getElementById("blog-list");

    // Hide the blog content and show the blog list
    blogContentSection.style.display = "none";
    blogListSection.style.display = "block";
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    // Add click event listeners to blog links
    const blogLinks = document.querySelectorAll(".blog-link");
    blogLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const postId = e.currentTarget.getAttribute("data-post-id");
            displayBlogContent(postId);
        });
    });

    // Add click event listener to the "Back to Blogs" button
    const backButton = document.getElementById("back-to-blogs");
    backButton.addEventListener("click", (e) => {
        e.preventDefault();
        goBackToBlogList();
    });
});