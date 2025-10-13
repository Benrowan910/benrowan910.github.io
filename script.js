// ===== MOBILE MENU =====
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  const icon = mobileMenuBtn.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});

// Close mobile menu when clicking on a nav link
const navItems = document.querySelectorAll(".nav-links a");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
    const icon = mobileMenuBtn.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ===== PROJECT MODAL FUNCTIONALITY =====
function openProjectModal(projectId) {
  const modal = document.getElementById("project-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalSubtitle = document.getElementById("modal-subtitle");
  const modalDescription = document.getElementById("modal-description");
  const modalHighlight = document.getElementById("modal-highlight");
  const modalTech = document.querySelector(".modal-tech");
  const modalLinks = document.querySelector(".modal-links");

  let projectData = {};

  // Define project data based on projectId
  switch (projectId) {
    case "project1":
      projectData = {
        title: "The Nessy Engine",
        subtitle: "Custom Game Engine Built with Modern Graphics APIs",
        description:
          "The Nessy Engine is a custom game engine I developed to address bloat issues in existing engines while providing high-fidelity rendering capabilities. Built from the ground up using C++, OpenGL, and Vulkan, it features advanced lighting systems, efficient resource management, and flexible architecture for game developers.",
        highlight:
          "Key achievement: Implemented a hybrid OpenGL/Vulkan renderer that provides 40% better performance than Unity for similar scenes.",
        image: "ProjectImages/image-9.png",
        tech: ["C++", "Vulkan", "OpenGL", "GLSL", "Engine Architecture"],
        links: [
          {
            text: "Read Development Blog",
            url: "blubber.html",
            icon: "fas fa-blog",
          },
          {
            text: "View Source Code",
            url: "https://github.com/Benrowan910/NessyEngine",
            icon: "fab fa-github",
          },
        ],
      };
      break;
    case "project2":
      projectData = {
        title: "Atom's Embrace",
        subtitle: "Narrative Walking Simulator Exploring Survivor's Guilt",
        description:
          "A deeply personal narrative walking simulator that explores themes of survivor's guilt and trauma. Developed using Unreal Engine 5, I served as the lead designer and systems programmer, implementing complex narrative systems and atmospheric environmental storytelling.",
        highlight:
          "Successfully led a team of 8 developers through a complete game development cycle, from concept to release.",
        image: "ProjectImages/AtomsEmbrace/Barrel.png",
        tech: [
          "Unreal Engine 5",
          "C++",
          "Blueprint",
          "Narrative Design",
          "Team Leadership",
        ],
        links: [
          {
            text: "Play on Itch.io",
            url: "https://atomsembrace.itch.io/atoms-embrace",
            icon: "fas fa-gamepad",
          },
          { text: "Watch Trailer", url: "#", icon: "fas fa-play" },
        ],
      };
      break;
    case "project3":
      projectData = {
        title: "Dread Not",
        subtitle: "Cooperative Submarine Adventure Game",
        description:
          "My senior capstone project - a cooperative submarine adventure where players work together to ascend from the ocean depths while being pursued by a mysterious creature. As Project Manager, I coordinate a multidisciplinary team and oversee all aspects of development using Agile methodologies.",
        highlight:
          "Currently in development with a planned release on Steam. Leading a team of 12 students across programming, art, and design disciplines.",
        image: "ProjectImages/sub_poster_pilot_PREVIEW.png",
        tech: [
          "Unity",
          "C#",
          "Multiplayer Networking",
          "Project Management",
          "Agile Development",
        ],
        links: [
          {
            text: "Play Demo",
            url: "https://leviathan-interactive.itch.io/dread-not",
            icon: "fas fa-gamepad",
          },
          {
            text: "Steam Page",
            url: "https://store.steampowered.com/app/3616560/Dread_Not/",
            icon: "fab fa-steam",
          },
        ],
      };
      break;
    case "project4":
      projectData = {
        title: "Earthline Protocol",
        subtitle: "Sci-Fi Strategy Game with Procedural Elements",
        description:
          "A strategic management game where players must establish and maintain communication networks across multiple planets. Features procedural planet generation, resource management, and complex diplomatic systems. Developed collaboratively using Unity and C#.",
        highlight:
          "Implemented a sophisticated procedural planet generation system that creates unique worlds with realistic terrain and resource distribution.",
        image: "ProjectImages/Start_Menu.png",
        tech: [
          "Unity",
          "C#",
          "Procedural Generation",
          "Strategy Design",
          "UI/UX",
        ],
        links: [
          {
            text: "Play Game",
            url: "https://ibrower.itch.io/earthline-protocol",
            icon: "fas fa-gamepad",
          },
        ],
      };
      break;
    case "project5":
      projectData = {
        title: "Python Physics Engine",
        subtitle: "Custom Physics Simulation and Game Framework",
        description:
          "A comprehensive physics engine built from scratch in Python, featuring rigid body dynamics, collision detection, and constraint solving. Includes several demo games showcasing different physics concepts, from simple projectile motion to complex multi-body interactions.",
        highlight:
          "Built entirely without external physics libraries, implementing algorithms like GJK collision detection and iterative impulse resolution.",
        image: "Images/Screenshot 2025-01-14 181422.png",
        tech: [
          "Python",
          "Physics Simulation",
          "Algorithm Implementation",
          "Mathematics",
        ],
        links: [
          {
            text: "View Source",
            url: "https://github.com/Benrowan910/PhysicsEngine-Games",
            icon: "fab fa-github",
          },
          {
            text: "Technical Documentation",
            url: "#",
            icon: "fas fa-file-alt",
          },
        ],
      };
      break;
    case "project6":
      projectData = {
        title: "N-Body Simulation",
        subtitle: "Barnes-Hut Algorithm Implementation for Celestial Mechanics",
        description:
          "An optimized N-body simulation implementing the Barnes-Hut algorithm for efficient gravitational calculations. Capable of simulating thousands of celestial bodies with realistic orbital mechanics and gravitational interactions, featuring real-time visualization and parameter adjustment.",
        highlight:
          "Achieved O(N log N) complexity using spatial partitioning, enabling simulation of 10,000+ bodies at interactive framerates.",
        image: "ProjectImages/Screenshot 2025-01-14 163651.png",
        tech: [
          "C++",
          "OpenGL",
          "Algorithm Optimization",
          "Spatial Data Structures",
          "Astrophysics",
        ],
        links: [
          {
            text: "View Source",
            url: "https://github.com/Benrowan910/Barnes-Hut-N-Body-Simulation",
            icon: "fab fa-github",
          },
          {
            text: "Algorithm Explanation",
            url: "#",
            icon: "fas fa-info-circle",
          },
        ],
      };
      break;
    case "project7":
      projectData = {
        title: "Advanced Shader Programming",
        subtitle: "Collection of Real-Time Rendering Techniques",
        description:
          "A comprehensive collection of advanced shader programming techniques including Kuwahara filters, water simulation, quantization effects, and translucency. Each shader is optimized for real-time performance while maintaining visual quality, demonstrating expertise in GLSL and real-time rendering.",
        highlight:
          "Features include custom water physics simulation, artistic stylization filters, and advanced lighting models.",
        image: "ProjectImages/AtomsEmbrace/SC1.png",
        tech: [
          "GLSL",
          "Unreal Engine",
          "Real-time Rendering",
          "Graphics Programming",
          "Mathematics",
        ],
        links: [
          {
            text: "View Source",
            url: "https://github.com/Benrowan910/FinalShaderProject",
            icon: "fab fa-github",
          },
          { text: "Shader Breakdowns", url: "#", icon: "fas fa-code" },
        ],
      };
      break;
    case "project8":
      projectData = {
        title: "Conway's Game of Life - Web Implementation",
        subtitle: "Interactive Cellular Automata Simulation",
        description:
          "A web-based implementation of Conway's Game of Life featuring an intuitive interface, pattern library, and performance optimizations. Includes various preset patterns, adjustable simulation speed, and the ability to draw custom initial conditions.",
        highlight:
          "Optimized rendering and calculation routines allow for smooth simulation of large grids with thousands of active cells.",
        image: "ProjectImages/Screenshot 2025-01-15 215831.png",
        tech: [
          "JavaScript",
          "HTML5 Canvas",
          "Algorithm Implementation",
          "Web Development",
        ],
        links: [
          { text: "Try It Live", url: "#", icon: "fas fa-external-link-alt" },
          {
            text: "View Source",
            url: "https://github.com/Benrowan910/OldGoL",
            icon: "fab fa-github",
          },
        ],
      };
      break;
    default:
      console.error("Project not found:", projectId);
      return;
  }

  // Populate modal content
  modalImg.src = projectData.image;
  modalImg.alt = projectData.title;
  modalTitle.textContent = projectData.title;
  modalSubtitle.textContent = projectData.subtitle;
  modalDescription.textContent = projectData.description;
  modalHighlight.textContent = projectData.highlight;

  // Clear and populate tech tags
  modalTech.innerHTML = "";
  projectData.tech.forEach((tech) => {
    const tag = document.createElement("span");
    tag.className = "project-tag";
    tag.textContent = tech;
    modalTech.appendChild(tag);
  });

  // Clear and populate links
  modalLinks.innerHTML = "";
  projectData.links.forEach((link) => {
    const linkElement = document.createElement("a");
    linkElement.href = link.url;
    linkElement.innerHTML = `<i class="${link.icon}"></i> ${link.text}`;
    if (link.url.startsWith("http")) {
      linkElement.target = "_blank";
    }
    modalLinks.appendChild(linkElement);
  });

  // Show modal
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  const modal = document.getElementById("project-modal");
  if (e.target === modal) {
    closeProjectModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal();
  }
});

// ===== PROJECT FILTERING FUNCTIONALITY =====
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const projectsGrid = document.getElementById("projects-grid");
  const visibleCountSpan = document.getElementById("visible-count");
  const totalCountSpan = document.getElementById("total-count");

  // Set initial counts
  const totalProjects = projectCards.length;
  totalCountSpan.textContent = totalProjects;
  visibleCountSpan.textContent = totalProjects;

  // Add animation delay to each project card
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });

  // Function to update project count and adjust grid height
  function updateProjectDisplay() {
    const visibleCards = document.querySelectorAll(
      ".project-card:not(.hidden)",
    );
    const visibleCount = visibleCards.length;

    // Update count display
    visibleCountSpan.textContent = visibleCount;

    // Add dynamic grid sizing based on visible projects
    if (visibleCount === 0) {
      projectsGrid.style.minHeight = "200px";
      projectsGrid.style.display = "flex";
      projectsGrid.style.alignItems = "center";
      projectsGrid.style.justifyContent = "center";

      // Show "No projects found" message if needed
      if (!document.querySelector(".no-projects-message")) {
        const noProjectsMsg = document.createElement("div");
        noProjectsMsg.className = "no-projects-message";
        noProjectsMsg.style.cssText = `
          color: var(--text-secondary);
          font-size: 1.1rem;
          text-align: center;
          padding: 40px;
        `;
        noProjectsMsg.textContent = "No projects found for this category";
        projectsGrid.appendChild(noProjectsMsg);
      }
    } else {
      // Remove no projects message
      const noProjectsMsg = document.querySelector(".no-projects-message");
      if (noProjectsMsg) {
        noProjectsMsg.remove();
      }

      // Reset grid to normal display
      projectsGrid.style.minHeight = "auto";
      projectsGrid.style.display = "grid";
      projectsGrid.style.alignItems = "stretch";
      projectsGrid.style.justifyContent = "stretch";

      // Calculate optimal grid height based on visible cards
      const cardsPerRow = Math.floor(projectsGrid.offsetWidth / 380); // 350px + 30px gap
      const estimatedRows = Math.ceil(visibleCount / cardsPerRow);
      const estimatedHeight = estimatedRows * 400; // Approximate card height + gap

      projectsGrid.style.minHeight = `${Math.max(400, estimatedHeight)}px`;
    }

    // Smooth transition for count changes
    visibleCountSpan.style.transform = "scale(1.1)";
    setTimeout(() => {
      visibleCountSpan.style.transform = "scale(1)";
    }, 200);
  }

  // Enhanced filter function with smooth animations
  function filterProjects(filter, button) {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    button.classList.add("active");

    // Add filtering class for transition
    projectsGrid.classList.add("filtering");

    // Phase 1: Fade out all cards
    projectCards.forEach((card) => {
      card.classList.add("fade-out");
    });

    // Phase 2: After fade out, apply filter and fade in visible cards
    setTimeout(() => {
      let visibleCount = 0;

      projectCards.forEach((card, index) => {
        if (filter === "all") {
          card.classList.remove("hidden");
          visibleCount++;
        } else {
          if (card.dataset.category === filter) {
            card.classList.remove("hidden");
            visibleCount++;
          } else {
            card.classList.add("hidden");
          }
        }

        // Remove fade-out and add fade-in for visible cards
        card.classList.remove("fade-out");
        if (!card.classList.contains("hidden")) {
          setTimeout(() => {
            card.classList.add("fade-in");
          }, index * 50); // Stagger the fade-in
        }
      });

      // Update display and remove filtering class
      updateProjectDisplay();
      projectsGrid.classList.remove("filtering");

      // Clean up fade-in classes
      setTimeout(() => {
        projectCards.forEach((card) => {
          card.classList.remove("fade-in");
        });
      }, 600);
    }, 200);
  }

  // Filter button functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterProjects(filter, button);
    });
  });

  // Initialize display
  updateProjectDisplay();
});

// ===== CONTACT LINKS =====
// Add click tracking for contact links
const contactLinks = document.querySelectorAll(".contact-link, .social-link");
contactLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Add visual feedback when contact links are clicked
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "";
    }, 150);
  });
});

// ===== TIMELINE SCROLL ENHANCEMENT =====
const timelineContainer = document.querySelector(".timeline-container");
if (timelineContainer) {
  // Add scroll indicators
  let isScrolling = false;

  timelineContainer.addEventListener("scroll", () => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        // Add any scroll-based animations here if needed
        isScrolling = false;
      });
      isScrolling = true;
    }
  });

  // Auto-scroll hint on page load
  setTimeout(() => {
    const scrollHint = document.querySelector(".timeline-scroll-hint");
    if (scrollHint) {
      scrollHint.addEventListener("click", () => {
        timelineContainer.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      });
    }
  }, 1000);
}

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(
    ".project-card, .skill-category, .course-item, .timeline-item",
  )
  .forEach((el) => {
    observer.observe(el);
  });

// Add CSS for animations
const style = document.createElement("style");
style.textContent = `
            .project-card, .skill-category, .course-item, .timeline-item {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease;
            }

            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }

            .project-card.hidden {
                opacity: 0 !important;
                transform: scale(0.8) !important;
                pointer-events: none;
            }
        `;
document.head.appendChild(style);
