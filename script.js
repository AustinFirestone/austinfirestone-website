// Toggle Quote Visibility
document.querySelector('.quote-toggle').addEventListener('click', function() {
    const quoteContainer = document.querySelector('.quote-container');
    quoteContainer.classList.toggle('visible');
});

// Toggle Dropdown Menu Visibility
document.querySelector('.menu-btn').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent click from bubbling up
    const menu = document.querySelector('.menu');
    menu.classList.toggle('visible');
});

// Close Dropdown Menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.querySelector('.menu');
    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
    }
});

// Toggle Social Media Icons when "Connect" is clicked
document.getElementById('connect-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    const socialIcons = document.getElementById('social-icons');
    socialIcons.classList.toggle('visible');
});

// Handle LinkedIn Button to Open App if Installed, Else Website
document.getElementById('linkedin-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    const linkedInProfileURL = 'https://www.linkedin.com/in/austin-firestone';
    const linkedInAppURL = 'linkedin://in/austin-firestone';

    // Attempt to open the LinkedIn app
    window.location = linkedInAppURL;

    // After a delay, redirect to the website
    setTimeout(function() {
        window.location = linkedInProfileURL;
    }, 500);
});