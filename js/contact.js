// ============================================
// Contact Form JavaScript - K & C Traders
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // Basic validation
            if (!formData.name || !formData.phone || !formData.email || !formData.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Phone validation (basic)
            const phoneRegex = /^[0-9]{10,}$/;
            if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
                alert('Please enter a valid phone number.');
                return;
            }
            
            // Simulate form submission
            // In a real application, you would send this data to a server
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
            
            // Note: In production, you would integrate with a backend service
            // or use a service like Formspree, EmailJS, etc.
        });
    }
});

