function updateNavOnScroll() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');

        let passedSections = Array.from(sections).map((section, index) => {
            return {
                y: section.getBoundingClientRect().top - header.offsetHeight,
                id: section.getAttribute('id')
            };
        }).filter(section => section.y <= 0);

        let currentSectionId = passedSections[passedSections.length - 1]?.id;

        navLinks.forEach(link => {
            link.classList.toggle('active', '#' + currentSectionId === link.getAttribute('href'));
        });
    }

    const header = document.querySelector('header');
    window.addEventListener('scroll', updateNavOnScroll);
    document.addEventListener("DOMContentLoaded", function() {
      AOS.init();
    });
