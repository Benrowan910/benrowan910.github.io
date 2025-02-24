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
        title: "Why Vulkan",
        author: "Ben Rowan",
        content: `Work in progress! Come back Soon!`
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