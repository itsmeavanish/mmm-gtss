// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabContents = document.querySelectorAll('.tab-content');

    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all triggers and contents
            tabTriggers.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked trigger and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Form submission
    const submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const requiredFields = [
            'firstName', 'lastName', 'email', 'phone', 'country',
            'affiliation', 'designation', 'category', 'paymentMethod'
        ];
        
        let isValid = true;
        const errors = [];
        
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!field.value.trim()) {
                isValid = false;
                errors.push(field.previousElementSibling.textContent.replace(' *', ''));
                field.style.borderColor = '#ef4444';
            } else {
                field.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }
        });
        
        // Email validation
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value && !emailRegex.test(email.value)) {
            isValid = false;
            errors.push('Valid email address');
            email.style.borderColor = '#ef4444';
        }
        
        if (!isValid) {
            alert('Please fill in the following required fields:\n• ' + errors.join('\n• '));
            return;
        }
        
        // Show success message
        this.textContent = 'Processing...';
        this.disabled = true;
        
        setTimeout(() => {
            alert('Registration submitted successfully! You will receive a confirmation email shortly.');
            this.textContent = 'Complete Registration';
            this.disabled = false;
        }, 2000);
    });

    // Form field animations
    const formInputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 0 0 3px rgba(96, 165, 250, 0.1)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add floating animation to cards
    const cards = document.querySelectorAll('.sidebar-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});