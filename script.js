// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Fetch form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // You can add validation here if needed

    // Example: Sending form data to server (replace with your actual backend code)
    // Here's a basic example using console.log
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Clear form fields after submission
    document.getElementById('contact-form').reset();

    // Optionally, you can display a confirmation message to the user
    alert('Message sent successfully!');
});
