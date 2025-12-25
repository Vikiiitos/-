function revealMessage(card) {
    // Toggle the flipped class to reveal the message
    card.classList.toggle('flipped');
    
    // Add a subtle animation effect
    card.style.transform = 'scale(0.98)';
    setTimeout(() => {
        card.style.transform = '';
    }, 200);
}

// Add entrance animations for cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.message-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Add click sound effect (optional - can be removed if not needed)
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Optional: Add haptic feedback or sound
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
        });
    });
});
