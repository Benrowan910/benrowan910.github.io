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
let lastScrollY = window.scrollY;
let ticking = false;

function updateNavbar() {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY < 100) {
    // Always show navbar at the top
    navbar.classList.remove("hidden");
    navbar.classList.remove("scrolled");
  } else {
    if (currentScrollY > lastScrollY && currentScrollY > 150) {
      // Scrolling down - hide navbar
      navbar.classList.add("hidden");
    } else {
      // Scrolling up - show navbar
      navbar.classList.remove("hidden");
    }
    navbar.classList.add("scrolled");
  }
  
  lastScrollY = currentScrollY;
  ticking = false;
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateNavbar);
    ticking = true;
  }
}

window.addEventListener("scroll", requestTick);

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

// ===== SCROLL PROGRESS BAR =====
const scrollProgress = document.querySelector('.scroll-progress');

function updateScrollProgress() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight - windowHeight;
  const scrolled = window.scrollY;
  const progress = (scrolled / documentHeight) * 100;
  
  scrollProgress.style.width = `${progress}%`;
}

window.addEventListener('scroll', updateScrollProgress);
window.addEventListener('resize', updateScrollProgress);

// ===== SCROLL TO TOP BUTTON =====
const scrollToTopBtn = document.querySelector('.scroll-to-top');

function toggleScrollToTop() {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
}

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', toggleScrollToTop);

// ===== ENHANCED SCROLL ANIMATIONS WITH INTERSECTION OBSERVER =====
const scrollAnimationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

// Observe all elements with animation classes
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
  animatedElements.forEach(el => scrollAnimationObserver.observe(el));
});


// ===== SMOOTH REVEAL ON PAGE LOAD =====
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});
