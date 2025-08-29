// Simple JavaScript for Advertisement Agency Website
// This code makes the website interactive and animated

// Wait for the page to load completely before running our code
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website is ready!');
    
    // Start all our website features
    setupNavigation();
    setupHeroAnimation();
    setupMobileMenu();
    setupSmoothScrolling();
    setupScrollAnimations();
});

// NAVIGATION BAR FEATURES
function setupNavigation() {
    // Get the navigation bar
    const navbar = document.getElementById('navbar');
    
    // Add shadow to navbar when scrolling down
    window.addEventListener('scroll', function() {
        // Check how far we've scrolled
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });
    
    // Highlight the current section in navigation
    window.addEventListener('scroll', function() {
        // Get all sections on the page
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Check which section is currently visible
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scrollPosition = window.scrollY;
            
            // If this section is visible
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const sectionId = section.getAttribute('id');
                
                // Remove highlight from all nav links
                navLinks.forEach(function(link) {
                    link.classList.remove('text-blue-600');
                    link.classList.add('text-gray-700');
                });
                
                // Add highlight to current section's nav link
                const activeLink = document.querySelector('a[href="#' + sectionId + '"]');
                if (activeLink) {
                    activeLink.classList.remove('text-gray-700');
                    activeLink.classList.add('text-blue-600');
                }
            }
        });
    });
}

// HERO SECTION ANIMATION
function setupHeroAnimation() {
    // Get the hero content
    const heroContent = document.querySelector('.hero-content');
    
    // Animate the hero content after a short delay
    setTimeout(function() {
        if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }
    }, 500);
}

// MOBILE MENU FUNCTIONALITY
function setupMobileMenu() {
    // Get mobile menu elements
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-menu a');
    
    // Check if elements exist
    if (!menuButton || !mobileMenu) return;
    
    // When menu button is clicked
    menuButton.addEventListener('click', function() {
        // Toggle menu visibility
        if (mobileMenu.classList.contains('hidden')) {
            // Show menu
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('active');
            
            // Change icon to X
            const icon = menuButton.querySelector('i');
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            // Hide menu
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('active');
            
            // Change icon back to hamburger
            const icon = menuButton.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close menu when a link is clicked
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('active');
            
            // Reset icon
            const icon = menuButton.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// SMOOTH SCROLLING FOR NAVIGATION LINKS
function setupSmoothScrolling() {
    // Get all navigation links that start with #
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event to each link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Prevent default jump behavior
            e.preventDefault();
            
            // Get the target section
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // If target section exists, scroll to it smoothly
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Leave space for navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// SCROLL ANIMATIONS FOR ELEMENTS
function setupScrollAnimations() {
    // Get all elements that should animate when scrolled into view
    const animatedElements = document.querySelectorAll('.reveal');
    
    // Function to check if element is visible
    function isElementVisible(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Element is visible if its top is within the window
        return rect.top < windowHeight - 100;
    }
    
    // Function to animate visible elements
    function animateVisibleElements() {
        animatedElements.forEach(function(element) {
            if (isElementVisible(element)) {
                element.classList.add('active');
            }
        });
    }
    
    // Check for visible elements when scrolling
    window.addEventListener('scroll', animateVisibleElements);
    
    // Check once when page loads
    animateVisibleElements();
    
    // Add staggered animation to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(function(card, index) {
        // Add delay based on card position
        card.style.transitionDelay = (index * 0.1) + 's';
    });
}

// CONTACT FORM HANDLING
function setupContactForm() {
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields!');
                return;
            }
            
            // Show success message (in real website, you'd send this to a server)
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// BUTTON CLICK EFFECTS
function setupButtonEffects() {
    // Get all buttons
    const buttons = document.querySelectorAll('button, .btn-primary, .btn-secondary');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            // Add a simple click effect
            button.style.transform = 'scale(0.95)';
            
            // Reset after a short time
            setTimeout(function() {
                button.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// KEYBOARD NAVIGATION
function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Close mobile menu when Escape key is pressed
        if (e.key === 'Escape') {
            const mobileMenu = document.querySelector('.mobile-menu');
            const menuButton = document.querySelector('.mobile-menu-button');
            
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('active');
                
                // Reset menu icon
                const icon = menuButton.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
}

// WINDOW RESIZE HANDLING
function setupResponsiveFeatures() {
    window.addEventListener('resize', function() {
        // Close mobile menu on larger screens
        if (window.innerWidth >= 768) {
            const mobileMenu = document.querySelector('.mobile-menu');
            const menuButton = document.querySelector('.mobile-menu-button');
            
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('active');
                
                // Reset menu icon
                const icon = menuButton.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
}

// Initialize additional features when page loads
document.addEventListener('DOMContentLoaded', function() {
    setupContactForm();
    setupButtonEffects();
    setupKeyboardNavigation();
    setupResponsiveFeatures();
});
