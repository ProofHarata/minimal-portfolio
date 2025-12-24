/**
 * Home Page JavaScript for Animations and Navigation
 * 
 * This script manages scroll-based animations and active navbar links
 * specifically for the home page.
 * 
 * Author: [Your Name or Company]
 * Version: 1.0.0
 * License: [Specify License, e.g., MIT or Commercial]
 */

document.addEventListener('DOMContentLoaded', function() {
    // Home Page Animation Observer: Adds 'animate' class to elements when they come into view
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Update Active Link in Navbar: Highlights the current section in the navbar
    function updateActiveLink(activeId) {
        // Remove active and light classes from all list items
        document.querySelectorAll('.navbar-menu ul li').forEach(function(li) {
            li.classList.remove('active', 'light');
        });

        // Group 'about' and 'skills' under 'about' for navigation
        let target = activeId;
        if (['about', 'skills'].includes(activeId)) {
            target = 'about';
        }

        // Add active class to the corresponding link
        const link = document.querySelector(`.navbar-menu a[href="#${target}"]`);
        if (link) {
            link.parentElement.classList.add('active');
            if (target === 'home') {
                link.parentElement.classList.add('light');
            }
        }
    }

    // Scroll Section Detection: Updates active navbar link based on scroll position
    window.addEventListener('scroll', function() {
        document.querySelectorAll('section[id]').forEach(function(section) {
            const top = section.offsetTop - 120; // Offset for navbar height
            const height = section.offsetHeight;
            if (window.scrollY >= top && window.scrollY < top + height) {
                updateActiveLink(section.id);
            }
        });
    });
});