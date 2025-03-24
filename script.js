function expandSearch(num) {
    const searchContainer = document.getElementById('searchContainer');
    const searchInput = document.getElementById(`searchInput${num}`);
    searchContainer.classList.toggle('w-8');
    searchContainer.classList.toggle('w-64');
    searchInput.classList.toggle('hidden');
    if (!searchInput.classList.contains('hidden')) {
        searchInput.focus();
    }
}

// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('hidden');
});

// Toggle dropdown for mobile
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    const allDropdowns = document.querySelectorAll('[id$="-mobile"]');
    
    // Close other dropdowns
    allDropdowns.forEach(menu => {
        if (menu.id !== id && !menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
        }
    });

    // Toggle current dropdown
    dropdown.classList.toggle('hidden');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('nav-menu');
    const mobileButton = document.getElementById('mobile-menu-button');
    
    if (!navMenu.contains(event.target) && !mobileButton.contains(event.target) && !navMenu.classList.contains('hidden') && window.innerWidth < 768) {
        navMenu.classList.add('hidden');
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    const navMenu = document.getElementById('nav-menu');
    if (window.innerWidth >= 768) {
        navMenu.classList.remove('hidden');
    } else {
        navMenu.classList.add('hidden');
    }
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide and remove loading screen after animation
    setTimeout(() => {
        loadingScreen.classList.add('hide');
        setTimeout(() => {
            loadingScreen.remove();
        }, 100); // Short delay to allow fade out
    }, 1500); // Match this with the truck animation duration
});

// Prevent loading screen from showing when navigating back
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.remove();
        }
    }
});