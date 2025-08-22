// Forms handling functionality
document.addEventListener('DOMContentLoaded', () => {
    const quickForm = document.getElementById('quickForm');
    const contactForm = document.getElementById('contactForm');
    const leadMagnetForm = document.getElementById('leadMagnetForm');
    const popupForm = document.getElementById('popupForm');

    // Form step navigation
    const handleFormSteps = () => {
        const formSteps = document.querySelectorAll('.form-step');
        const nextButtons = document.querySelectorAll('.next-step');

        nextButtons.forEach(button => {
            button.addEventListener('click', () => {
                const currentStep = button.closest('.form-step');
                const inputs = currentStep.querySelectorAll('input, select');
                let isValid = true;

                inputs.forEach(input => {
                    if (!input.checkValidity()) {
                        isValid = false;
                        input.reportValidity();
                    }
                });

                if (isValid) {
                    currentStep.classList.remove('active');
                    const nextStep = currentStep.nextElementSibling;
                    if (nextStep) {
                        nextStep.classList.add('active');
                    }
                }
            });
        });
    };

    // Form validation
    const validateForm = (form) => {
        const inputs = form.querySelectorAll('input, select, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                isValid = false;
                input.reportValidity();
            }
        });

        return isValid;
    };

    // WhatsApp number validation
    const validateWhatsApp = (number) => {
        const whatsappRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        return whatsappRegex.test(number.replace(/\s+/g, ''));
    };

    // Form submission handler
    const handleSubmit = async (form, endpoint) => {
        try {
            const formData = new FormData(form);
            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showSuccess(form);
                form.reset();
                if (form === quickForm) {
                    redirectToCalendly();
                }
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            showError(form);
            console.error('Form submission error:', error);
        }
    };

    // Success message
    const showSuccess = (form) => {
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.textContent = 'Thank you! We\'ll be in touch soon.';
        form.innerHTML = '';
        form.appendChild(successMessage);
    };

    // Error message
    const showError = (form) => {
        const errorMessage = document.createElement('div');
        errorMessage.className = 'form-error';
        errorMessage.textContent = 'Something went wrong. Please try again.';
        form.insertBefore(errorMessage, form.firstChild);
        setTimeout(() => errorMessage.remove(), 5000);
    };

    // Calendly redirect
    const redirectToCalendly = () => {
        // Replace with your Calendly URL
        window.location.href = 'https://calendly.com/your-calendly-url';
    };

    // Form submissions
    if (quickForm) {
        handleFormSteps();
        quickForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (validateForm(quickForm)) {
                await handleSubmit(quickForm, 'https://formspree.io/f/your-formspree-id');
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (validateForm(contactForm)) {
                await handleSubmit(contactForm, 'https://formspree.io/f/your-formspree-id');
            }
        });
    }

    if (leadMagnetForm) {
        leadMagnetForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (validateForm(leadMagnetForm)) {
                await handleSubmit(leadMagnetForm, 'https://formspree.io/f/your-formspree-id');
            }
        });
    }

    if (popupForm) {
        popupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (validateForm(popupForm)) {
                await handleSubmit(popupForm, 'https://formspree.io/f/your-formspree-id');
            }
        });
    }
});