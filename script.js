// Smooth entrance animation
document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);
    
    // Optional: Load custom profile image if it exists
    // To use your own photo, replace 'your-photo.jpg' with your image filename
    const profileContainer = document.getElementById('profileContainer');
    const profileImageUrl = 'profile.jpg'; // Change this to your image filename
    
    // Try to load the image
    const img = new Image();
    img.onload = function() {
        profileContainer.innerHTML = `<img src="${profileImageUrl}" alt="Profile Photo" class="w-full h-full object-cover">`;
    };
    img.onerror = function() {
        // Keep the default avatar SVG if image doesn't exist
        console.log('Using default avatar. To add your photo, place an image file in the project and update the profileImageUrl in script.js');
    };
    img.src = profileImageUrl;
});

// Ripple effect on button clicks
document.querySelectorAll('.social-btn').forEach(button => {
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        Object.assign(ripple.style, {
            position: 'absolute',
            width: size + 'px',
            height: size + 'px',
            left: x + 'px',
            top: y + 'px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            transform: 'scale(0)',
            animation: 'ripple 0.6s ease-out',
            pointerEvents: 'none'
        });
        
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add keyframes for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Log theme preference
const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
console.log(`Current theme: ${theme}`);

// Listen for theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newTheme = e.matches ? 'dark' : 'light';
    console.log(`Theme changed to: ${newTheme}`);
});
