

document.getElementById('submit-btn').addEventListener('click', function () {

    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (email === 'mdalauddin@gmail.com' && password === "hello") {
        window.location.href = 'js/bank.html';
    }
    else {
        alert('Wrong email or password');
    }
})