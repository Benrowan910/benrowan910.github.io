function filterProjects(genre) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (genre === 'all' || project.getAttribute('data-genre') === genre) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}