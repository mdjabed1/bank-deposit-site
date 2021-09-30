document.getElementById('submit-button').addEventListener('click', function () {
    event.preventDefault();
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail)
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword)
    if (userEmail == 'mdjabed234353@gmail.com' && userPassword == '01720395322') {
        window.location.href = 'bank'
    }
    if (userEmail == 'riponmia' && userPassword == '01777625480') {
        window.location.href = 'bank'
    }
})