document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form elements
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const service = document.getElementById('service');
            const message = document.getElementById('message');
            
            // Reset error states
            resetErrors([name, email, service, message]);
            
            // Validate fields
            let isValid = true;
            
            if (!name.value.trim()) {
                showError(name, 'Por favor ingresa tu nombre');
                isValid = false;
            }
            
            if (!email.value.trim()) {
                showError(email, 'Por favor ingresa tu correo electrónico');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Por favor ingresa un correo electrónico válido');
                isValid = false;
            }
            
            if (!service.value) {
                showError(service, 'Por favor selecciona un servicio');
                isValid = false;
            }
            
            if (!message.value.trim()) {
                showError(message, 'Por favor ingresa tu mensaje');
                isValid = false;
            }
            
            if (isValid) {
                // Form is valid, submit it (simulated here)
                alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
                this.reset();
            }
        });
    }
    
    // Booking Form Validation
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form elements
            const name = document.getElementById('bookingName');
            const email = document.getElementById('bookingEmail');
            const phone = document.getElementById('bookingPhone');
            const service = document.getElementById('bookingService');
            const date = document.getElementById('bookingDate');
            const time = document.getElementById('bookingTime');
            
            // Reset error states
            resetErrors([name, email, phone, service, date, time]);
            
            // Validate fields
            let isValid = true;
            
            if (!name.value.trim()) {
                showError(name, 'Por favor ingresa tu nombre');
                isValid = false;
            }
            
            if (!email.value.trim()) {
                showError(email, 'Por favor ingresa tu correo electrónico');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Por favor ingresa un correo electrónico válido');
                isValid = false;
            }
            
            if (!phone.value.trim()) {
                showError(phone, 'Por favor ingresa tu teléfono');
                isValid = false;
            } else if (!isValidPhone(phone.value)) {
                showError(phone, 'Por favor ingresa un número de teléfono válido');
                isValid = false;
            }
            
            if (!service.value) {
                showError(service, 'Por favor selecciona un servicio');
                isValid = false;
            }
            
            if (!date.value) {
                showError(date, 'Por favor selecciona una fecha');
                isValid = false;
            }
            
            if (!time.value) {
                showError(time, 'Por favor selecciona un horario');
                isValid = false;
            }
            
            if (isValid) {
                // Form is valid, submit it (simulated here)
                alert('¡Cita reservada con éxito! Te hemos enviado un correo de confirmación.');
                this.reset();
            }
        });
    }
    
    // Helper functions
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        if (!formGroup) return;
        
        let errorElement = formGroup.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            formGroup.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        input.classList.add('error');
    }
    
    function resetErrors(inputs) {
        inputs.forEach(input => {
            const formGroup = input.closest('.form-group');
            if (!formGroup) return;
            
            const errorElement = formGroup.querySelector('.error-message');
            if (errorElement) {
                errorElement.remove();
            }
            
            input.classList.remove('error');
        });
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function isValidPhone(phone) {
        // Simple validation - at least 8 digits
        const re = /^[0-9]{8,}$/;
        return re.test(phone.replace(/\D/g, ''));
    }
});