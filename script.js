document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var isValid = true;

    // Validate name
    if (nameInput.value.length < 3) {
        isValid = false;
        nameInput.classList.add('invalid');
    } else {
        nameInput.classList.remove('invalid');
    }

    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        isValid = false;
        emailInput.classList.add('invalid');
    } else {
        emailInput.classList.remove('invalid');
    }

    // Validate message
    if (messageInput.value.length < 10) {
        isValid = false;
        messageInput.classList.add('invalid');
    } else {
        messageInput.classList.remove('invalid');
    }

    // Submit the form if valid
    if (isValid) {
        this.submit();
    }
});
