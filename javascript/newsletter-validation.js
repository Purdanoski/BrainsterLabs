function validateEmail() {
    var emailInput = document.getElementById('emailInput');
    var errorMessage = document.getElementById('errorMessage');
    var emailValue = emailInput.value.trim();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '' || !emailRegex.test(emailValue)) {

        emailInput.classList.add('invalid');
        errorMessage.textContent = "Please provide a valid email (user@domain.com)";
        errorMessage.style.display = 'block';
    } else {

        emailInput.classList.remove('invalid');
        errorMessage.textContent = "";
        errorMessage.style.display = 'none';
        
        console.log('Email is valid:', emailValue);
    }
}