document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            hamburgerMenu.setAttribute('aria-expanded', isExpanded);

            // Optional: Add class to body to prevent scrolling when menu is open
            document.body.classList.toggle('no-scroll', isExpanded);
        });
    }
});