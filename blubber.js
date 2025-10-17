// Blog Modal Functionality
function openBlogModal(title, author, date, content) {
    const modal = document.getElementById("blog-modal");
    const modalTitle = document.getElementById("blog-modal-title");
    const modalMeta = document.getElementById("blog-modal-meta");
    const modalBody = document.getElementById("blog-modal-body");

    modalTitle.textContent = title;
    modalMeta.textContent = `By ${author} • ${date}`;
    modalBody.innerHTML = content;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeBlogModal() {
    const modal = document.getElementById("blog-modal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Close modal when clicking outside
window.addEventListener("click", (e) => {
    const modal = document.getElementById("blog-modal");
    if (e.target === modal) {
        closeBlogModal();
    }
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeBlogModal();
    }
});

// Example of how to add a blog post (for future use):
// openBlogModal(
//     'Why Use Vulkan?',
//     'Ben Rowan',
//     'January 2025',
//     '<p>Content goes here...</p><h3>Section Title</h3><p>More content...</p>'
// );