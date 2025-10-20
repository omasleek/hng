// Form validation and submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('[data-testid="test-contact-form"]');
    const successMessage = document.getElementById('success-message');

    // Validation functions
    function validateName(name) {
        return name.trim().length > 0;
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateSubject(subject) {
        return subject.trim().length > 0;
    }

    function validateMessage(message) {
        return message.trim().length >= 10;
    }

    // Show error message
    function showError(field, message) {
        const errorElement = document.querySelector(`[data-testid="test-contact-error-${field}"]`);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    // Hide error message
    function hideError(field) {
        const errorElement = document.querySelector(`[data-testid="test-contact-error-${field}"]`);
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }

    // Validate individual field
    function validateField(fieldName, value) {
        let isValid = false;
        let errorMessage = '';

        switch(fieldName) {
            case 'name':
                isValid = validateName(value);
                errorMessage = isValid ? '' : 'Full name is required';
                break;
            case 'email':
                isValid = validateEmail(value);
                errorMessage = isValid ? '' : 'Please enter a valid email address';
                break;
            case 'subject':
                isValid = validateSubject(value);
                errorMessage = isValid ? '' : 'Subject is required';
                break;
            case 'message':
                isValid = validateMessage(value);
                errorMessage = isValid ? '' : 'Message must be at least 10 characters long';
                break;
        }

        if (isValid) {
            hideError(fieldName);
        } else {
            showError(fieldName, errorMessage);
        }

        return isValid;
    }

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const subject = document.getElementById('contact-subject').value;
        const message = document.getElementById('contact-message').value;

        const isNameValid = validateField('name', name);
        const isEmailValid = validateField('email', email);
        const isSubjectValid = validateField('subject', subject);
        const isMessageValid = validateField('message', message);

        if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
            // Hide form and show success message
            form.style.display = 'none';
            successMessage.style.display = 'block';

            // Reset form for potential future use
            form.reset();
        }
    });

    // Real-time validation on blur
    const fields = ['contact-name', 'contact-email', 'contact-subject', 'contact-message'];
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const fieldName = fieldId.replace('contact-', '');

        field.addEventListener('blur', function() {
            validateField(fieldName, this.value);
        });

        field.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                hideError(fieldName);
            }
        });
    });
});