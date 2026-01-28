// script.js - B School Education Template

// Data Definitions
const courses = [
    {
        "id": 1,
        "title": "Business Administration",
        "category": "Business",
        "price": "$299",
        "duration": "12 Weeks",
        "description": "Learn essential business management skills, strategic planning, and organizational leadership.",
        "image": "https://picsum.photos/400/250?random=101"
    },
    {
        "id": 2,
        "title": "Computer Science",
        "category": "Technology",
        "price": "$349",
        "duration": "16 Weeks",
        "description": "Master programming, algorithms, data structures, and software development methodologies.",
        "image": "https://picsum.photos/400/250?random=102"
    },
    {
        "id": 3,
        "title": "Digital Marketing",
        "category": "Marketing",
        "price": "$249",
        "duration": "10 Weeks",
        "description": "Learn SEO, social media marketing, content strategy, and digital advertising techniques.",
        "image": "https://picsum.photos/400/250?random=103"
    },
    {
        "id": 4,
        "title": "Data Science",
        "category": "Technology",
        "price": "$399",
        "duration": "14 Weeks",
        "description": "Learn data analysis, machine learning, and statistical modeling techniques.",
        "image": "https://picsum.photos/400/250?random=104"
    },
    {
        "id": 5,
        "title": "Graphic Design",
        "category": "Design",
        "price": "$279",
        "duration": "10 Weeks",
        "description": "Master design principles, typography, and digital illustration techniques.",
        "image": "https://picsum.photos/400/250?random=105"
    },
    {
        "id": 6,
        "title": "Project Management",
        "category": "Business",
        "price": "$329",
        "duration": "12 Weeks",
        "description": "Learn project planning, risk management, and team leadership skills.",
        "image": "https://picsum.photos/400/250?random=106"
    }
];

const testimonials = [
    {
        "id": 1,
        "name": "Sarah Johnson",
        "role": "Business Administration Graduate",
        "quote": "\"The Business Administration course transformed my career. The practical approach and industry insights helped me land my dream job at a Fortune 500 company.\"",
        "rating": 5,
        "image": "https://picsum.photos/80?random=201"
    },
    {
        "id": 2,
        "name": "Michael Chen",
        "role": "Computer Science Graduate",
        "quote": "\"The Computer Science program provided me with cutting-edge skills. The hands-on projects and expert guidance prepared me perfectly for the tech industry.\"",
        "rating": 4.5,
        "image": "https://picsum.photos/80?random=202"
    },
    {
        "id": 3,
        "name": "Emma Rodriguez",
        "role": "Digital Marketing Graduate",
        "quote": "\"The Digital Marketing course was exactly what I needed to start my own agency. The practical strategies and real-world case studies were invaluable.\"",
        "rating": 5,
        "image": "https://picsum.photos/80?random=203"
    },
    {
        "id": 4,
        "name": "David Wilson",
        "role": "Data Science Graduate",
        "quote": "\"The Data Science program gave me the skills to analyze complex datasets and build predictive models that are now used in my company's decision-making process.\"",
        "rating": 4.5,
        "image": "https://picsum.photos/80?random=204"
    },
    {
        "id": 5,
        "name": "Lisa Thompson",
        "role": "Graphic Design Graduate",
        "quote": "\"As a Graphic Design graduate, I now work with major brands creating visual identities. The course's focus on both theory and practice was perfect.\"",
        "rating": 5,
        "image": "https://picsum.photos/80?random=205"
    },
    {
        "id": 6,
        "name": "Robert Garcia",
        "role": "Project Management Graduate",
        "quote": "\"The Project Management certification helped me lead successful projects and advance to a senior management position within a year of graduation.\"",
        "rating": 4,
        "image": "https://picsum.photos/80?random=206"
    }
];

// Utility Functions
function generateStarRating(rating) {
    let stars = "";
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        stars += "<i class=\"fas fa-star\"></i>";
    }
    
    // Add half star if needed
    if (hasHalfStar) {
        stars += "<i class=\"fas fa-star-half-alt\"></i>";
    }
    
    // Add empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += "<i class=\"far fa-star\"></i>";
    }
    
    return stars;
}

function getCategoryColor(category) {
    const colors = {
        "Business": "#2c3e50",
        "Technology": "#3498db",
        "Marketing": "#e74c3c",
        "Design": "#9b59b6",
        "Science": "#27ae60"
    };
    return colors[category] || "#2c3e50";
}

// DOM Content Generation Functions
function generateCourseCard(course) {
    return `
        <div class="course-card" data-course-id="${course.id}">
            <img src="${course.image}" alt="${course.title} Course" class="course-image" loading="lazy">
            <div class="course-content">
                <div class="course-header">
                    <span class="course-category" style="background-color: ${getCategoryColor(course.category)}">
                        ${course.category}
                    </span>
                    <span class="course-price">${course.price}</span>
                </div>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-footer">
                    <div class="course-duration">
                        <i class="fas fa-clock"></i>
                        <span>${course.duration}</span>
                    </div>
                    <button class="enroll-button" data-course="${course.id}">
                        Enroll Now <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function generateTestimonialCard(testimonial) {
    return `
        <div class="testimonial-card" data-testimonial-id="${testimonial.id}">
            <div class="testimonial-header">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-avatar" loading="lazy">
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p class="testimonial-role">${testimonial.role}</p>
                </div>
            </div>
            <p class="testimonial-quote">${testimonial.quote}</p>
            <div class="testimonial-rating">
                ${generateStarRating(testimonial.rating)}
            </div>
        </div>
    `;
}

// DOM Manipulation Functions
function loadCourses() {
    const container = document.getElementById("courses-container");
    if (!container) return;
    
    // Show only first 3 courses initially
    const initialCourses = courses.slice(0, 3);
    container.innerHTML = initialCourses.map(generateCourseCard).join("");
    
    // Add event listeners to enroll buttons
    document.querySelectorAll(".enroll-button").forEach(button => {
        button.addEventListener("click", handleEnrollClick);
    });
}

function loadTestimonials() {
    const container = document.getElementById("testimonials-container");
    if (!container) return;
    
    // Show only first 3 testimonials initially
    const initialTestimonials = testimonials.slice(0, 3);
    container.innerHTML = initialTestimonials.map(generateTestimonialCard).join("");
}

// Event Handlers
function handleEnrollClick(event) {
    event.preventDefault();
    const courseId = event.currentTarget.getAttribute("data-course");
    const course = courses.find(c => c.id === parseInt(courseId));
    
    if (course) {
        alert(`Thank you for your interest in "${course.title}"!\nPrice: ${course.price}\nDuration: ${course.duration}\n\nOur admissions team will contact you shortly.`);
        
        // Simulate form submission
        const button = event.currentTarget;
        const originalText = button.innerHTML;
        button.innerHTML = "<i class=\"fas fa-spinner fa-spin\"></i> Processing...";
        button.disabled = true;
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 2000);
    }
}

function handleNewsletterSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const emailInput = form.querySelector("input[type=\"email\"]");
    const submitButton = form.querySelector("button[type=\"submit\"]");
    
    if (!emailInput.value) {
        alert("Please enter your email address.");
        emailInput.focus();
        return;
    }
    
    if (!isValidEmail(emailInput.value)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return;
    }
    
    // Show loading state
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = "<i class=\"fas fa-spinner fa-spin\"></i> Subscribing...";
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert("Thank you for subscribing to our newsletter! You'll receive our next update soon.");
        emailInput.value = "";
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }, 1500);
}

function handleMobileMenuToggle() {
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu) {
        mobileMenu.classList.toggle("hidden");
        
        // Update button icon
        const button = document.getElementById("mobile-menu-button");
        if (button) {
            const icon = button.querySelector("i");
            if (mobileMenu.classList.contains("hidden")) {
                icon.className = "fas fa-bars";
            } else {
                icon.className = "fas fa-times";
            }
        }
    }
}

function handleNavigationClick(event) {
    event.preventDefault();
    const target = event.currentTarget;
    const href = target.getAttribute("href");
    
    if (href === "#") {
        // Handle internal navigation
        const sectionId = target.textContent.toLowerCase().replace(/\s+/g, "-");
        const targetSection = document.querySelector(`#${sectionId}`);
        
        if (targetSection) {
            targetSection.scrollIntoView({ 
                behavior: "smooth",
                block: "start"
            });
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById("mobile-menu");
            if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
                mobileMenu.classList.add("hidden");
                const button = document.getElementById("mobile-menu-button");
                if (button) {
                    const icon = button.querySelector("i");
                    icon.className = "fas fa-bars";
                }
            }
        }
    } else {
        // Handle external links
        window.open(href, "_self");
    }
}

function handleViewAllCourses() {
    const container = document.getElementById("courses-container");
    if (!container) return;
    
    // Show all courses
    container.innerHTML = courses.map(generateCourseCard).join("");
    
    // Update button text
    const button = document.querySelector(".view-all-button");
    if (button) {
        button.textContent = "Showing All Courses";
        button.disabled = true;
        button.style.opacity = "0.7";
    }
    
    // Re-attach event listeners
    document.querySelectorAll(".enroll-button").forEach(btn => {
        btn.addEventListener("click", handleEnrollClick);
    });
}

// Validation Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Initialize Application
function init() {
    console.log("B School Education Template Initializing...");
    
    // Load dynamic content
    loadCourses();
    loadTestimonials();
    
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener("click", handleMobileMenuToggle);
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById("newsletter-form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", handleNewsletterSubmit);
    }
    
    // Navigation links
    document.querySelectorAll("a[href=\"#\"]").forEach(link => {
        link.addEventListener("click", handleNavigationClick);
    });
    
    // View All Courses button
    const viewAllButton = document.querySelector(".view-all-button");
    if (viewAllButton) {
        viewAllButton.addEventListener("click", handleViewAllCourses);
    }
    
    // CTA buttons
    document.querySelectorAll(".cta-button, .primary-button, .secondary-button").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            alert("Thank you for your interest! Our admissions team will contact you shortly.");
        });
    });
    
    // Mobile CTA button
    const mobileCtaButton = document.querySelector(".mobile-cta-button");
    if (mobileCtaButton) {
        mobileCtaButton.addEventListener("click", function(event) {
            event.preventDefault();
            alert("Thank you for your interest! Our admissions team will contact you shortly.");
        });
    }
    
    // Lazy load images
    if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove("lazy");
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll("img[data-src]").forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    console.log("B School Education Template Initialized Successfully!");
}

// Initialize when DOM is fully loaded
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

// Export for module usage (if needed)
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        courses,
        testimonials,
        generateCourseCard,
        generateTestimonialCard,
        generateStarRating
    };
}