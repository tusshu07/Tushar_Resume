// Loading Screen
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Hide loading screen after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1500); // Show for 1.5 seconds minimum
    });
});

// Scroll Progress Indicator
document.addEventListener('DOMContentLoaded', function() {
    const scrollProgress = document.getElementById('scrollProgress');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        scrollProgress.style.width = scrollPercent + '%';
    });
});

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    
    // Update toggle icon
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add ripple effect
        createRipple(this, event);
    });
    
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
});

// Custom Cursor
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.getElementById('cursor');
    const cursorOutline = document.getElementById('cursorOutline');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorOutline.style.left = (e.clientX - 20) + 'px';
        cursorOutline.style.top = (e.clientY - 20) + 'px';
    });
    
    // Add hover effects
    const hoverElements = document.querySelectorAll('a, button, .project-card, .btn');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursorOutline.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', function() {
            cursorOutline.classList.remove('hover');
        });
    });
});

// Floating Action Button
document.addEventListener('DOMContentLoaded', function() {
    const floatingBtn = document.getElementById('floatingBtn');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            floatingBtn.classList.add('show');
        } else {
            floatingBtn.classList.remove('show');
        }
    });
    
    floatingBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Add click animation
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Status Indicator with Real-time Clock
document.addEventListener('DOMContentLoaded', function() {
    const statusIndicator = document.getElementById('statusIndicator');
    const currentTimeSpan = document.getElementById('currentTime');
    
    function updateStatus() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        const hour = now.getHours();
        
        let status;
        if (hour >= 9 && hour < 18) {
            status = "💻 Available for work";
        } else if (hour >= 18 && hour < 22) {
            status = "🌆 Evening hours";
        } else {
            status = "🌙 Outside work hours";
        }
        
        statusIndicator.innerHTML = `${status} • <span id="currentTime">${timeString}</span>`;
    }
    
    updateStatus();
    setInterval(updateStatus, 1000);
});

// Particle Background Animation
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        particlesContainer.appendChild(particle);
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }
});

// Button Ripple Effect
function createRipple(button, event) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to all buttons
document.addEventListener('DOMContentLoaded', function() {
    const rippleButtons = document.querySelectorAll('.btn-ripple');
    
    rippleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            createRipple(this, e);
        });
    });
});

// Enhanced Card Animations with Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('card-enter-active');
                }, index * 100); // Staggered animation
            }
        });
    }, observerOptions);
    
    // Observe all cards
    const cards = document.querySelectorAll('.project-card, .achievement-card, .extracurr-card, .about-stats .stat');
    cards.forEach(card => {
        card.classList.add('card-enter');
        observer.observe(card);
    });
});

// Project Card Tilt Effect
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 8;
            const rotateY = (centerX - x) / 8;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });
});

// Enhanced Typing Speed Animation
document.addEventListener('DOMContentLoaded', function() {
    const typingSpeed = document.getElementById('typingSpeed');
    
    if (typingSpeed) {
        setInterval(() => {
            const speed = Math.floor(Math.random() * 20 + 75); // 75-95 WPM
            typingSpeed.textContent = speed + 'wpm';
        }, 3000);
    }
});

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update navigation on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});

// Typewriter Effect
document.addEventListener('DOMContentLoaded', function() {
    const typewriterText = document.getElementById('typewriter');
    const phrases = [
        'Software Developer',
        'Innovative Creator', 
        'Robotics',
        'ML Engineering'
    ];
    
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const phrase = phrases[currentPhrase];
        
        if (isDeleting) {
            typewriterText.textContent = phrase.substring(0, currentChar - 1);
            currentChar--;
        } else {
            typewriterText.textContent = phrase.substring(0, currentChar + 1);
            currentChar++;
        }
        
        let typeSpeed = 100;
        
        if (isDeleting) {
            typeSpeed = 50;
        }
        
        if (!isDeleting && currentChar === phrase.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    typeWriter();
});

// Skill bars animation
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    };
    
    // Intersection Observer for skill bars
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
            }
        });
    });
    
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
});

// Projects Show More/Less functionality
document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const hiddenProjects = document.querySelectorAll('.hidden-project');
    let isExpanded = false;
    
    showMoreBtn.addEventListener('click', function() {
        if (!isExpanded) {
            // Show hidden projects
            hiddenProjects.forEach((project, index) => {
                setTimeout(() => {
                    project.classList.add('show');
                }, index * 100); // Staggered animation
            });
            
            // Update button text and icon
            showMoreBtn.innerHTML = '<i class="fas fa-minus"></i> Show Less Projects';
            isExpanded = true;
        } else {
            // Hide projects
            hiddenProjects.forEach(project => {
                project.classList.remove('show');
            });
            
            // Update button text and icon
            showMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Show More Projects';
            isExpanded = false;
            
            // Scroll to projects section
            setTimeout(() => {
                document.getElementById('projects').scrollIntoView({
                    behavior: 'smooth'
                });
            }, 300);
        }
    });
});

// Resume download functionality
document.addEventListener('DOMContentLoaded', function() {
    const resumeBtn = document.querySelector('a[href="resume.pdf"]');
    
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function(e) {
            // Check if the resume file exists
            fetch('resume.pdf')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Resume not found');
                    }
                    return response.blob();
                })
                .catch(error => {
                    e.preventDefault();
                    alert('Resume file not found. Please contact me directly for my resume.');
                });
        });
    }
});

// Profile photo handling
document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.querySelector('.profile-photo');
    const profilePlaceholder = document.querySelector('.profile-placeholder');
    
    if (profileImg) {
        profileImg.addEventListener('error', function() {
            profileImg.style.display = 'none';
            profilePlaceholder.style.display = 'flex';
        });
        
        profileImg.addEventListener('load', function() {
            profilePlaceholder.style.display = 'none';
            profileImg.style.display = 'block';
        });
    }
});

// Smooth scroll for hero scroll indicator
document.addEventListener('DOMContentLoaded', function() {
    const heroScroll = document.querySelector('.hero-scroll a');
    
    if (heroScroll) {
        heroScroll.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Add scroll effect to navbar
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// Enhanced Parallax Effect
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        // Parallax for hero section
        const hero = document.querySelector('.hero .hero-container');
        if (hero) {
            const speed = scrolled * 0.3;
            hero.style.transform = `translateY(${speed}px)`;
        }
        
        // Parallax for particles
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            const speed = scrolled * (0.1 + (index % 3) * 0.05);
            particle.style.transform = `translateY(${speed}px)`;
        });
    });
});

// Add sound effects (optional)
function playSound(soundName) {
    try {
        const audio = new Audio(`sounds/${soundName}.mp3`);
        audio.volume = 0.1;
        audio.play().catch(() => {}); // Fail silently if no audio
    } catch (error) {
        // Silently handle missing audio files
    }
}

// Add sound to interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add click sounds to buttons
    document.querySelectorAll('.btn, .project-card').forEach(element => {
        element.addEventListener('click', () => playSound('click'));
    });
    
    // Add hover sounds to cards
    document.querySelectorAll('.project-card, .achievement-card').forEach(element => {
        element.addEventListener('mouseenter', () => playSound('hover'));
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Scroll-based animations can be optimized here
}, 10); 

// ===== DYNAMIC BACKGROUND SYSTEM =====

// Create Floating Bubbles
function createFloatingBubbles() {
    const bubblesContainer = document.getElementById('bubbles');
    const bubbleCount = 8; // Reduced from 15 to 8
    
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Random size between 15px and 45px (reduced from 20-80px)
        const size = Math.random() * 30 + 15;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        
        // Random starting position
        bubble.style.left = Math.random() * 100 + '%';
        
        // Random animation duration between 8s and 15s
        const duration = Math.random() * 7 + 8;
        bubble.style.animationDuration = duration + 's';
        
        // Random animation delay
        bubble.style.animationDelay = Math.random() * 5 + 's';
        
        // Random opacity
        bubble.style.opacity = Math.random() * 0.7 + 0.3;
        
        bubblesContainer.appendChild(bubble);
        
        // Remove bubble after animation completes
        setTimeout(() => {
            if (bubble.parentNode) {
                bubble.parentNode.removeChild(bubble);
            }
        }, (duration + 5) * 1000);
    }
    
    // Create initial bubbles
    for (let i = 0; i < bubbleCount; i++) {
        setTimeout(() => createBubble(), i * 1000);
    }
    
    // Continuously create new bubbles (reduced frequency)
    setInterval(() => {
        createBubble();
    }, 4000); // Increased from 2000ms to 4000ms
}

// Create Geometric Shapes
function createGeometricShapes() {
    const shapesContainer = document.getElementById('shapes');
    const shapeTypes = ['triangle', 'diamond', 'hexagon'];
    
    function createShape() {
        const shape = document.createElement('div');
        shape.className = 'shape';
        
        const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        
        if (shapeType === 'triangle') {
            shape.classList.add('shape-triangle');
            const size = Math.random() * 12 + 10; // Reduced from 20+15 to 12+10
            shape.style.borderBottomWidth = size + 'px';
            shape.style.borderLeftWidth = size/2 + 'px';
            shape.style.borderRightWidth = size/2 + 'px';
            shape.style.borderBottomColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        } else if (shapeType === 'diamond') {
            shape.classList.add('shape-diamond');
            const size = Math.random() * 15 + 10; // Reduced from 25+15 to 15+10
            shape.style.width = size + 'px';
            shape.style.height = size + 'px';
        } else {
            shape.classList.add('shape-hexagon');
            const size = Math.random() * 18 + 12; // Reduced from 30+20 to 18+12
            shape.style.width = size + 'px';
            shape.style.height = size * 0.866 + 'px';
        }
        
        // Random starting position
        shape.style.left = Math.random() * 100 + '%';
        
        // Faster animation duration - much faster rotation
        const duration = Math.random() * 2 + 3; // Changed from 4+6 to 2+3 for much faster rotation (3-5s)
        shape.style.animationDuration = duration + 's';
        
        // Random animation delay
        shape.style.animationDelay = Math.random() * 5 + 's'; // Reduced from 8s to 5s
        
        shapesContainer.appendChild(shape);
        
        // Remove shape after animation - adjusted timing
        setTimeout(() => {
            if (shape.parentNode) {
                shape.parentNode.removeChild(shape);
            }
        }, (duration + 5) * 1000); // Adjusted removal timing
    }
    
    // Create initial shapes (reduced count)
    for (let i = 0; i < 5; i++) { // Reduced from 8 to 5
        setTimeout(() => createShape(), i * 1500); // Reduced from 2000 to 1500
    }
    
    // Continuously create new shapes - reduced frequency
    setInterval(() => {
        createShape();
    }, 3500); // Increased from 2000 to 3500
}

// Create Particle Field
function createParticleField() {
    const particleContainer = document.getElementById('particles');
    const particleTypes = ['', 'type-2', 'type-3'];
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random particle type
        const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
        if (type) particle.classList.add(type);
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        
        // Random size
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random animation duration
        const duration = Math.random() * 8 + 12;
        particle.style.animationDuration = duration + 's';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 3 + 's';
        
        // Random horizontal movement
        const randomX = (Math.random() - 0.5) * 200;
        particle.style.setProperty('--random-x', randomX + 'px');
        
        particleContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, (duration + 3) * 1000);
    }
    
    // Create initial particles
    for (let i = 0; i < 50; i++) {
        setTimeout(() => createParticle(), i * 100);
    }
    
    // Continuously create new particles
    setInterval(() => {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => createParticle(), i * 300);
        }
    }, 1000);
}

// ===== NAVIGATION FUNCTIONALITY =====

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update navigation on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Add scroll effect to navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// ===== TYPEWRITER EFFECT =====

document.addEventListener('DOMContentLoaded', function() {
    const typewriterText = document.getElementById('typewriter');
    const phrases = [
        'Software Developer',
        'Innovative Creator', 
        'Robotics',
        'ML Engineering'
    ];
    
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const phrase = phrases[currentPhrase];
        
        if (isDeleting) {
            typewriterText.textContent = phrase.substring(0, currentChar - 1);
            currentChar--;
        } else {
            typewriterText.textContent = phrase.substring(0, currentChar + 1);
            currentChar++;
        }
        
        let typeSpeed = 100;
        
        if (isDeleting) {
            typeSpeed = 50;
        }
        
        if (!isDeleting && currentChar === phrase.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    typeWriter();
});

// ===== SKILL BARS ANIMATION =====

document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    };
    
    // Intersection Observer for skill bars
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
            }
        });
    }, {
        threshold: 0.5
    });
    
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
});

// ===== PROJECTS SHOW MORE/LESS FUNCTIONALITY =====

document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const hiddenProjects = document.querySelectorAll('.hidden-project');
    let isExpanded = false;
    
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            if (!isExpanded) {
                // Show hidden projects
                hiddenProjects.forEach((project, index) => {
                    setTimeout(() => {
                        project.classList.add('show');
                    }, index * 100); // Staggered animation
                });
                
                // Update button text and icon
                showMoreBtn.innerHTML = '<i class="fas fa-minus"></i> Show Less Projects';
                isExpanded = true;
            } else {
                // Hide projects
                hiddenProjects.forEach(project => {
                    project.classList.remove('show');
                });
                
                // Update button text and icon
                showMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Show More Projects';
                isExpanded = false;
                
                // Scroll to projects section
                setTimeout(() => {
                    document.getElementById('projects').scrollIntoView({
                        behavior: 'smooth'
                    });
                }, 300);
            }
        });
    }
});

// ===== SCROLL ANIMATIONS =====

document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    const animatedElements = document.querySelectorAll('section, .project-card, .achievement-card, .extracurr-card, .stat');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.8s ease';
        observer.observe(element);
    });
});

// ===== RESUME DOWNLOAD FUNCTIONALITY =====

document.addEventListener('DOMContentLoaded', function() {
    const resumeBtn = document.querySelector('a[href="resume.pdf"]');
    
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function(e) {
            // Check if the resume file exists
            fetch('resume.pdf')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Resume not found');
                    }
                    return response.blob();
                })
                .catch(error => {
                    e.preventDefault();
                    alert('Resume file not found. Please contact me directly for my resume.');
                });
        });
    }
});

// ===== PROFILE PHOTO HANDLING =====

document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.querySelector('.profile-photo');
    const profilePlaceholder = document.querySelector('.profile-placeholder');
    
    if (profileImg && profilePlaceholder) {
        profileImg.addEventListener('error', function() {
            profileImg.style.display = 'none';
            profilePlaceholder.style.display = 'flex';
        });
        
        profileImg.addEventListener('load', function() {
            profilePlaceholder.style.display = 'none';
            profileImg.style.display = 'block';
        });
    }
});

// ===== SMOOTH SCROLL FOR HERO SCROLL INDICATOR =====

document.addEventListener('DOMContentLoaded', function() {
    const heroScroll = document.querySelector('.hero-scroll a');
    
    if (heroScroll) {
        heroScroll.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});

// ===== PERFORMANCE OPTIMIZATIONS =====

// Throttle scroll events for better performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll-based animations
let ticking = false;

function updateAnimations() {
    // Update any scroll-based animations here
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
});

// ===== INITIALIZE DYNAMIC BACKGROUNDS =====

document.addEventListener('DOMContentLoaded', function() {
    // Start all dynamic background systems
    setTimeout(() => {
        createFloatingBubbles();
    }, 500);
    
    setTimeout(() => {
        createGeometricShapes();
    }, 1000);
    
    setTimeout(() => {
        createParticleField();
    }, 1500);
    
    // Initialize scrolling code background
    setTimeout(() => {
        createScrollingCodeBackground();
    }, 2000);
});

// ===== MOUSE INTERACTION EFFECTS =====

document.addEventListener('DOMContentLoaded', function() {
    // Add subtle interaction effects to cards
    const cards = document.querySelectorAll('.project-card, .achievement-card, .extracurr-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ===== CONTACT FORM VALIDATION (if needed) =====

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add form submission logic here
            alert('Thank you for your message! I\'ll get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
});

// ===== CONSOLE EASTER EGG =====

console.log(`
🚀 Welcome to Tushar Chinchole's Portfolio!
💻 Built with passion and lots of coffee ☕
🎨 Featuring dynamic backgrounds and smooth animations
📧 Feel free to reach out: c_traju@cs.iitr.ac.in
⭐ GitHub: https://github.com/tusshu07
`);

// ===== PERFORMANCE MONITORING =====

// Monitor performance and adjust animations based on device capabilities
document.addEventListener('DOMContentLoaded', function() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    // Reduce animations on slower connections
    if (connection && connection.effectiveType === 'slow-2g') {
        document.body.classList.add('reduced-motion');
    }
    
    // Reduce animations on low-end devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        const particles = document.getElementById('particles');
        if (particles) particles.style.display = 'none';
    }
}); 

// ===== SCROLLING CODE BACKGROUND SYSTEM =====

function createScrollingCodeBackground() {
    const codeBackground = document.getElementById('codeBackground');
    const codeParallax = document.getElementById('codeParallax');
    
    if (!codeBackground || !codeParallax) return;
    
    // Actual code snippets from this website with syntax highlighting
    const codeSnippets = [
        `<span class="code-selector">.hero</span> {
    <span class="code-property">background</span>: <span class="code-function">linear-gradient</span>(<span class="code-number">135deg</span>, <span class="code-string">#667eea</span>, <span class="code-string">#764ba2</span>);
    <span class="code-property">animation</span>: <span class="code-value">fadeInUp</span> <span class="code-number">1s</span> <span class="code-value">ease</span>;
    <span class="code-property">transform</span>: <span class="code-function">translateY</span>(<span class="code-number">0</span>);
}`,

        `<span class="code-keyword">function</span> <span class="code-function">typeWriter</span>() {
    <span class="code-keyword">const</span> <span class="code-value">phrase</span> = <span class="code-value">phrases</span>[<span class="code-value">currentPhrase</span>];
    <span class="code-comment">// Dynamic text animation</span>
    <span class="code-value">typewriterText</span>.<span class="code-property">textContent</span> = <span class="code-value">phrase</span>;
    <span class="code-function">setTimeout</span>(<span class="code-value">typeWriter</span>, <span class="code-number">100</span>);
}`,

        `<span class="code-selector">.project-card</span><span class="code-selector">:hover</span> {
    <span class="code-property">transform</span>: <span class="code-function">translateY</span>(<span class="code-number">-10px</span>) <span class="code-function">scale</span>(<span class="code-number">1.02</span>);
    <span class="code-property">box-shadow</span>: <span class="code-number">0</span> <span class="code-number">20px</span> <span class="code-number">50px</span> <span class="code-function">rgba</span>(<span class="code-number">0,0,0,0.4</span>);
    <span class="code-property">backdrop-filter</span>: <span class="code-function">blur</span>(<span class="code-number">10px</span>);
}`,

        `<span class="code-keyword">document</span>.<span class="code-function">addEventListener</span>(<span class="code-string">'DOMContentLoaded'</span>, <span class="code-keyword">function</span>() {
    <span class="code-keyword">const</span> <span class="code-value">observer</span> = <span class="code-keyword">new</span> <span class="code-function">IntersectionObserver</span>(<span class="code-value">entries</span> => {
        <span class="code-comment">// Animate on scroll</span>
        <span class="code-value">entries</span>.<span class="code-function">forEach</span>(<span class="code-value">entry</span> => <span class="code-value">entry</span>.<span class="code-property">target</span>.<span class="code-function">classList</span>.<span class="code-function">add</span>(<span class="code-string">'active'</span>));
    });
});`,

        `<span class="code-selector">@keyframes</span> <span class="code-value">gradientShift</span> {
    <span class="code-number">0%</span>, <span class="code-number">100%</span> { <span class="code-property">transform</span>: <span class="code-function">scale</span>(<span class="code-number">1</span>) <span class="code-function">rotate</span>(<span class="code-number">0deg</span>); }
    <span class="code-number">33%</span> { <span class="code-property">transform</span>: <span class="code-function">scale</span>(<span class="code-number">1.1</span>) <span class="code-function">rotate</span>(<span class="code-number">120deg</span>); }
    <span class="code-number">66%</span> { <span class="code-property">filter</span>: <span class="code-function">hue-rotate</span>(<span class="code-number">120deg</span>); }
}`,

        `<span class="code-keyword">const</span> <span class="code-value">skillBars</span> = <span class="code-value">document</span>.<span class="code-function">querySelectorAll</span>(<span class="code-string">'.skill-progress'</span>);
<span class="code-value">skillBars</span>.<span class="code-function">forEach</span>(<span class="code-value">bar</span> => {
    <span class="code-keyword">const</span> <span class="code-value">width</span> = <span class="code-value">bar</span>.<span class="code-function">getAttribute</span>(<span class="code-string">'data-width'</span>);
    <span class="code-value">bar</span>.<span class="code-property">style</span>.<span class="code-property">width</span> = <span class="code-value">width</span>;
    <span class="code-comment">// Smooth skill animation</span>
});`,

        `<span class="code-selector">.particle</span> {
    <span class="code-property">position</span>: <span class="code-value">absolute</span>;
    <span class="code-property">background</span>: <span class="code-function">radial-gradient</span>(<span class="code-string">#ffd700</span>, <span class="code-string">#f093fb</span>);
    <span class="code-property">border-radius</span>: <span class="code-number">50%</span>;
    <span class="code-property">animation</span>: <span class="code-value">particleMove</span> <span class="code-function">linear</span> <span class="code-value">infinite</span>;
    <span class="code-property">box-shadow</span>: <span class="code-number">0</span> <span class="code-number">0</span> <span class="code-number">10px</span> <span class="code-value">currentColor</span>;
}`,

        `<span class="code-keyword">class</span> <span class="code-function">PortfolioAnimator</span> {
    <span class="code-keyword">constructor</span>() {
        <span class="code-keyword">this</span>.<span class="code-property">animations</span> = <span class="code-keyword">new</span> <span class="code-function">Map</span>();
        <span class="code-comment">// Initialize dynamic effects</span>
        <span class="code-keyword">this</span>.<span class="code-function">init</span>();
    }
}`,

        `<span class="code-selector">.floating-bubbles</span> <span class="code-selector">.bubble</span> {
    <span class="code-property">background</span>: <span class="code-function">var</span>(<span class="code-string">--glass-bg</span>);
    <span class="code-property">backdrop-filter</span>: <span class="code-function">blur</span>(<span class="code-number">10px</span>);
    <span class="code-property">animation</span>: <span class="code-value">floatUp</span> <span class="code-function">linear</span> <span class="code-value">infinite</span>;
    <span class="code-property">opacity</span>: <span class="code-number">0.7</span>;
}`,

        `<span class="code-keyword">async</span> <span class="code-keyword">function</span> <span class="code-function">loadPortfolio</span>() {
    <span class="code-keyword">try</span> {
        <span class="code-keyword">const</span> <span class="code-value">response</span> = <span class="code-keyword">await</span> <span class="code-function">fetch</span>(<span class="code-string">'/api/portfolio'</span>);
        <span class="code-keyword">const</span> <span class="code-value">data</span> = <span class="code-keyword">await</span> <span class="code-value">response</span>.<span class="code-function">json</span>();
        <span class="code-comment">// Process portfolio data</span>
        <span class="code-keyword">return</span> <span class="code-value">data</span>;
    } <span class="code-keyword">catch</span> (<span class="code-value">error</span>) {
        <span class="code-function">console</span>.<span class="code-function">error</span>(<span class="code-string">'Failed to load:'</span>, <span class="code-value">error</span>);
    }
}`
    ];

    // Simple code lines for parallax effect
    const codeLines = [
        'background: linear-gradient(135deg, #667eea, #764ba2);',
        'transform: translateY(-10px) scale(1.02);',
        'animation: fadeInUp 1s ease both;',
        'const typewriter = document.getElementById("typewriter");',
        'backdrop-filter: blur(10px);',
        'box-shadow: 0 20px 50px rgba(0,0,0,0.4);',
        'function createParticle() { /* Dynamic effects */ }',
        'position: relative; z-index: 5;',
        'border-radius: 50%; overflow: hidden;',
        'addEventListener("scroll", handleScroll);',
        'opacity: 0.8; transition: all 0.3s ease;',
        'grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));',
        'display: flex; align-items: center;',
        'font-family: "Poppins", sans-serif;',
        'color: var(--text-light); text-shadow: 0 0 8px rgba(255,255,255,0.2);'
    ];

    // Create code blocks
    function createCodeBlocks() {
        for (let i = 0; i < 10; i++) { // Increased from 6 to 10
            const codeBlock = document.createElement('div');
            codeBlock.className = 'code-block';
            codeBlock.innerHTML = codeSnippets[i % codeSnippets.length];
            
            // Random vertical position
            codeBlock.style.top = Math.random() * (window.innerHeight - 200) + 'px';
            
            // Staggered start times
            codeBlock.style.animationDelay = (i * -3) + 's'; // Reduced delay for more frequent appearance
            
            codeBackground.appendChild(codeBlock);
        }
    }

    // Create floating code lines
    function createCodeLines() {
        for (let i = 0; i < 25; i++) { // Increased from 15 to 25
            const codeLine = document.createElement('div');
            codeLine.className = 'code-line';
            codeLine.textContent = codeLines[i % codeLines.length];
            
            // Random vertical position
            codeLine.style.top = Math.random() * window.innerHeight + 'px';
            
            // Staggered animation delays
            codeLine.style.animationDelay = (i * -2) + 's'; // Reduced delay
            
            codeParallax.appendChild(codeLine);
        }
    }

    // Initialize code background
    createCodeBlocks();
    createCodeLines();

    // Add parallax scroll effect
    let scrolled = 0;
    
    function updateCodeParallax() {
        const currentScroll = window.pageYOffset;
        const scrollDiff = currentScroll - scrolled;
        scrolled = currentScroll;
        
        // Move code background opposite to scroll direction
        const codeBlocks = document.querySelectorAll('.code-block');
        const codeLineElements = document.querySelectorAll('.code-line');
        
        codeBlocks.forEach((block, index) => {
            const currentTransform = block.style.transform || '';
            const yOffset = scrollDiff * (0.3 + index * 0.1);
            block.style.transform = currentTransform + ` translateY(${yOffset}px)`;
        });
        
        codeLineElements.forEach((line, index) => {
            const currentTransform = line.style.transform || '';
            const yOffset = scrollDiff * (0.2 + index * 0.05);
            line.style.transform = currentTransform + ` translateY(${yOffset}px)`;
        });
    }

    // Throttled scroll listener for performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateCodeParallax();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Periodically add new code blocks for continuous effect
    setInterval(() => {
        if (codeBackground.children.length < 12) { // Increased limit
            const codeBlock = document.createElement('div');
            codeBlock.className = 'code-block';
            codeBlock.innerHTML = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            codeBlock.style.top = Math.random() * (window.innerHeight - 200) + 'px';
            codeBackground.appendChild(codeBlock);
            
            // Remove old blocks to prevent memory issues
            setTimeout(() => {
                if (codeBlock.parentNode) {
                    codeBlock.parentNode.removeChild(codeBlock);
                }
            }, 35000);
        }
    }, 5000); // Reduced from 8000 to 5000

    // Add new code lines periodically
    setInterval(() => {
        if (codeParallax.children.length < 30) { // Increased limit
            const codeLine = document.createElement('div');
            codeLine.className = 'code-line';
            codeLine.textContent = codeLines[Math.floor(Math.random() * codeLines.length)];
            codeLine.style.top = Math.random() * window.innerHeight + 'px';
            codeParallax.appendChild(codeLine);
            
            // Remove old lines
            setTimeout(() => {
                if (codeLine.parentNode) {
                    codeLine.parentNode.removeChild(codeLine);
                }
            }, 50000);
        }
    }, 2500); // Reduced from 5000 to 2500
}

// ===== PROFILE IMAGE ANIMATIONS =====

document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage) {
        // Create floating particles around profile
        function createProfileParticles() {
            const particleContainer = document.createElement('div');
            particleContainer.className = 'profile-particles';
            
            // Create 4 floating particles
            for (let i = 0; i < 4; i++) {
                const particle = document.createElement('div');
                particle.className = 'profile-particle';
                particleContainer.appendChild(particle);
            }
            
            heroImage.appendChild(particleContainer);
        }
        
        createProfileParticles();
    }
}); 