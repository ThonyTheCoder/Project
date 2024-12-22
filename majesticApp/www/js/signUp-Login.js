// Register and Login Script

document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
    const registerButton = document.querySelector('.btn_Register');
    const loginButton = document.querySelector('.btn_Login');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const firstName = document.getElementById('firstName').value.trim();
            const email = document.getElementById('email').value.trim();
            const username = document.getElementById('loginUsername').value.trim();
            const password = document.getElementById('loginPassword').value.trim();

            if (!firstName || !email || !username || !password) {
                alert('Please fill out all fields.');
                return;
            }

            // Save user data to localStorage
            const userData = {
                firstName: firstName,
                email: email,
                password: password
            };

            // Save the user data in localStorage using username as key
            localStorage.setItem(username, JSON.stringify(userData));

            // Confirmation message
            alert('Registration successful! You can now log in.');

            // Redirect to login page after successful registration
            window.location.href = 'index.html';
        });
    }

    // Login Form Handler
    if (loginForm) {
        loginButton.addEventListener('click', function(event) {
            const username = document.getElementById('txtbxUsername').value.trim();
            const password = document.getElementById('txtbxPassword').value.trim();

            // Validate input fields
            if (!username || !password) {
                alert('Please fill out both fields.');
                return;
            }

            // Check if the username exists in localStorage
            const savedUser = localStorage.getItem(username);

            if (savedUser) {
                // Parse the saved user data from localStorage
                const userData = JSON.parse(savedUser);

                // Compare passwords
                if (userData.password === password) {
                    // Login successful: Redirect to home page
                    window.location.href = 'home.html';
                } else {
                    alert('Incorrect password. Please try again.');
                }
            } else {
                alert('User not found. Please sign up first.');
            }
        });
    }
});
