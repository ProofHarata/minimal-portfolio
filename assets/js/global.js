/**
 * Global JavaScript for Website Interactions
 * 
 * This script handles global functionalities such as AOS initialization,
 * navbar behavior, theme toggling, mobile menu, and smooth scrolling.
 * 
 * Author: [Your Name or Company]
 * Version: 1.0.0
 * License: [Specify License, e.g., MIT or Commercial]
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll) library for scroll animations
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }

    // Navbar Solid on Scroll: Adds 'solid' class to navbar when scrolled past 50px
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.classList.toggle('solid', window.scrollY > 50);
        }
    });

    // Toggle Theme: Switches between light and dark themes
    window.toggleTheme = function() {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);

        const button = document.querySelector('.theme-toggle');
        if (button) {
            // Add scale animation to button
            button.style.transform = 'scale(1.2)';
            setTimeout(function() {
                button.style.transform = 'scale(1)';
                // Update button icon based on theme
                button.innerHTML = newTheme === 'dark'
                    ? '<i class="bi bi-sun"></i>'
                    : '<i class="bi bi-moon"></i>';
                // Reinitialize Feather icons if used
                if (typeof feather !== 'undefined') {
                    feather.replace();
                }
            }, 150);
        }
    };

    // Toggle Mobile Menu: Toggles active class on navigation and hamburger
    window.toggleMenu = function() {
        const navigation = document.querySelector('.navigation');
        const hamburger = document.querySelector('.hamburger');
        if (navigation) navigation.classList.toggle('active');
        if (hamburger) hamburger.classList.toggle('active');
    };

    // Smooth Scroll to Section: Scrolls smoothly to a target element by ID
    window.smoothScrollToSection = function(id) {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Anchor Click Handler: Handles clicks on anchor links for smooth scrolling and menu closing
    document.querySelectorAll('a[href^="#"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = link.getAttribute('href');
            const id = href ? href.substring(1) : null;
            if (!id) return;
            e.preventDefault();
            smoothScrollToSection(id);

            // Close mobile menu after navigation
            const navigation = document.querySelector('.navigation');
            const hamburger = document.querySelector('.hamburger');
            if (navigation) navigation.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });
});
