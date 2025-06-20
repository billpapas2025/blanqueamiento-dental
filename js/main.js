document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    prevBtn.addEventListener('click', function() {
        let newIndex = currentTestimonial - 1;
        if (newIndex < 0) newIndex = testimonials.length - 1;
        showTestimonial(newIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        let newIndex = currentTestimonial + 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        showTestimonial(newIndex);
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showTestimonial(index);
        });
    });
    
    // Auto-rotate testimonials
    setInterval(function() {
        let newIndex = currentTestimonial + 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        showTestimonial(newIndex);
    }, 5000);
    
    // Before-After Image Sliders
    const beforeAfterContainers = document.querySelectorAll('.before-after');
    
    beforeAfterContainers.forEach(container => {
        const slider = container.querySelector('.slider');
        const before = container.querySelector('.before');
        let isDragging = false;
        
        slider.addEventListener('mousedown', function(e) {
            isDragging = true;
            e.preventDefault(); // Prevent text selection
        });
        
        window.addEventListener('mouseup', function() {
            isDragging = false;
        });
        
        window.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            
            const containerRect = container.getBoundingClientRect();
            let x = e.clientX - containerRect.left;
            
            // Constrain within container
            x = Math.max(0, Math.min(x, containerRect.width));
            
            const percent = (x / containerRect.width) * 100;
            
            before.style.width = `${percent}%`;
            slider.style.left = `${percent}%`;
        });
        
        // Touch support
        slider.addEventListener('touchstart', function() {
            isDragging = true;
        });
        
        window.addEventListener('touchend', function() {
            isDragging = false;
        });
        
        window.addEventListener('touchmove', function(e) {
            if (!isDragging) return;
            
            const containerRect = container.getBoundingClientRect();
            let x = e.touches[0].clientX - containerRect.left;
            
            // Constrain within container
            x = Math.max(0, Math.min(x, containerRect.width));
            
            const percent = (x / containerRect.width) * 100;
            
            before.style.width = `${percent}%`;
            slider.style.left = `${percent}%`;
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    const bookingForm = document.getElementById('bookingForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Form validation would be handled in form-validation.js
            // Simulate form submission
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
            this.reset();
        });
    }
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Form validation would be handled in form-validation.js
            // Simulate form submission
            alert('¡Cita reservada con éxito! Te hemos enviado un correo de confirmación.');
            this.reset();
        });
    }
    
    // Set minimum date for booking to today
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
        dateInput.min = today;
    }
});