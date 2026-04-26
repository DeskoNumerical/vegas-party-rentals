// Automatically updates the copyright year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Adds a smooth fade-in effect to the rental cards when scrolling down
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    cards.forEach(card => {
        // Set initial state for the animation
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Start observing
        observer.observe(card);
    });
});