document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form');
    const headerSection = document.querySelector('#header');
    const loginMessage = document.querySelector('#login-message');
  
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
  
        const username = loginForm.username.value;
        const password = loginForm.password.value;
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
         .then(response => response.json())
         .then(data => {
                if (data.success) {
                    headerSection.scrollIntoView();
                    loginForm.style.display = 'none';
                    loginMessage.textContent = '';
                } else {
                    loginMessage.textContent = 'Invalid username or password. Please try again.';
                    loginMessage.style.color = 'red';
                }
            })
         .catch(error => {
                console.error('Error:', error);
                loginMessage.textContent = 'An error occurred. Please try again later.';
                loginMessage.style.color = 'red';
            });
    });
  });