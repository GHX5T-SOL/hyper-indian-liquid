// Hyper-Indian Liquid Website JavaScript

// Copy contract address functionality
function copyContract() {
    const contractInput = document.getElementById('contractAddress');
    const copyBtn = document.getElementById('copyBtn');
    const copyText = copyBtn.querySelector('.copy-text');
    const copyIcon = copyBtn.querySelector('.copy-icon');
    
    // Select the text
    contractInput.select();
    contractInput.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy to clipboard
    navigator.clipboard.writeText(contractInput.value).then(function() {
        // Success feedback
        copyText.textContent = 'Copied!';
        copyIcon.textContent = '✅';
        copyBtn.style.background = 'var(--coriander-green)';
        
        // Reset after 2 seconds
        setTimeout(function() {
            copyText.textContent = 'Copy';
            copyIcon.textContent = '📋';
            copyBtn.style.background = 'var(--coriander-green)';
        }, 2000);
    }).catch(function(err) {
        // Fallback for older browsers
        try {
            document.execCommand('copy');
            copyText.textContent = 'Copied!';
            copyIcon.textContent = '✅';
            copyBtn.style.background = 'var(--coriander-green)';
            
            setTimeout(function() {
                copyText.textContent = 'Copy';
                copyIcon.textContent = '📋';
                copyBtn.style.background = 'var(--coriander-green)';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
            copyText.textContent = 'Error';
            copyIcon.textContent = '❌';
            copyBtn.style.background = 'var(--tamarind-red)';
            
            setTimeout(function() {
                copyText.textContent = 'Copy';
                copyIcon.textContent = '📋';
                copyBtn.style.background = 'var(--coriander-green)';
            }, 2000);
        }
    });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 248, 225, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(109, 76, 65, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 248, 225, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards and PnL cards
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .pnl-card, .token-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add hover effects to PnL cards
document.addEventListener('DOMContentLoaded', function() {
    const pnlCards = document.querySelectorAll('.pnl-card');
    
    pnlCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// Add typing effect to hero tagline
document.addEventListener('DOMContentLoaded', function() {
    const tagline = document.querySelector('.hero-tagline');
    const text = tagline.textContent;
    tagline.textContent = '';
    
    let i = 0;
    const typeWriter = function() {
        if (i < text.length) {
            tagline.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 1000);
});

// Add floating animation to emojis
document.addEventListener('DOMContentLoaded', function() {
    const emojis = document.querySelectorAll('.btn-emoji, .symbol-emoji');
    
    emojis.forEach(emoji => {
        emoji.style.animation = 'float 3s ease-in-out infinite';
    });
});

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);

// Add click effect to launch buttons
document.addEventListener('DOMContentLoaded', function() {
    const launchButtons = document.querySelectorAll('.launch-btn');
    
    launchButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .launch-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Add spice particle animation
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    
    function createSpiceParticle() {
        const particle = document.createElement('div');
        particle.innerHTML = '🌶️';
        particle.style.position = 'absolute';
        particle.style.fontSize = '20px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';
        particle.style.animation = 'spice-fall 8s linear infinite';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1';
        
        hero.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 8000);
    }
    
    // Create particles periodically
    setInterval(createSpiceParticle, 2000);
});

// Add CSS for spice particle animation
const spiceStyle = document.createElement('style');
spiceStyle.textContent = `
    @keyframes spice-fall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(spiceStyle);

// Add confetti effect on button click
function createConfetti() {
    const colors = ['#FFC107', '#F57C00', '#4CAF50', '#8B0000'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.zIndex = '9999';
        confetti.style.animation = 'confetti-fall 3s linear forwards';
        confetti.style.pointerEvents = 'none';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Add CSS for confetti animation
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confetti-fall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Add confetti to launch buttons
document.addEventListener('DOMContentLoaded', function() {
    const launchButtons = document.querySelectorAll('.launch-btn');
    
    launchButtons.forEach(button => {
        button.addEventListener('click', function() {
            setTimeout(createConfetti, 100);
        });
    });
});

// Add sound effects (visual feedback)
document.addEventListener('DOMContentLoaded', function() {
    const interactiveElements = document.querySelectorAll('button, .launch-btn, .social-link, .nav-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('click', function() {
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

// Add loading animation
window.addEventListener('load', function() {
    const loader = document.createElement('div');
    loader.style.position = 'fixed';
    loader.style.top = '0';
    loader.style.left = '0';
    loader.style.width = '100%';
    loader.style.height = '100%';
    loader.style.background = 'var(--cardamom-cream)';
    loader.style.display = 'flex';
    loader.style.alignItems = 'center';
    loader.style.justifyContent = 'center';
    loader.style.zIndex = '9999';
    loader.innerHTML = '<div style="font-size: 2rem; color: var(--spiced-brown);">🌶️ Loading the spice... 🍛</div>';
    
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1500);
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement && (focusedElement.classList.contains('launch-btn') || focusedElement.classList.contains('social-link'))) {
            e.preventDefault();
            focusedElement.click();
        }
    }
});

// Add accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add focus indicators
    const focusableElements = document.querySelectorAll('a, button, input');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--saffron-yellow)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});

// Add performance optimization
document.addEventListener('DOMContentLoaded', function() {
    // Lazy load images
    const images = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '1';
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
            imageObserver.observe(img);
        });
    }
});

console.log('🌶️ Hyper-Indian Liquid website loaded successfully! 🍛');
console.log('Ready to spice up your trading experience! 🔥');
