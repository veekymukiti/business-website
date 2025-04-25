// Add JavaScript functionality for forms here

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us!');
        contactForm.reset();
    });
}