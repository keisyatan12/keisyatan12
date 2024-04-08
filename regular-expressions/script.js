document.addEventListener('DOMContentLoaded', function() {
    const fullNameInput = document.getElementById('full-name');
    const nimInput = document.getElementById('nim');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');
  
    const nameRegex = /^[a-zA-Z\s]+$/;
    const nimRegex = /^\d{9}$/; // Assuming NIM is a 9-digit number
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,}$/; // Assuming phone number is at least 10 digits
    const addressRegex = /^.{30,}$/; // Assuming address has at least 30 characters
  
    fullNameInput.addEventListener('input', function() {
        validateInput(fullNameInput, nameRegex, "Please enter a valid name", "Name is valid");
    });
  
    nimInput.addEventListener('input', function() {
        validateInput(nimInput, nimRegex, "NIM must be a 9-digit number", "NIM is valid");
    });
  
    emailInput.addEventListener('input', function() {
        validateInput(emailInput, emailRegex, "Please enter a valid email address", "Email is valid");
    });
  
    phoneInput.addEventListener('input', function() {
        validateInput(phoneInput, phoneRegex, "Phone must be at least 10 digits of number only", "Phone is valid");
    });
  
    addressInput.addEventListener('input', function() {
        validateInput(addressInput, addressRegex, "Address must be at least 30 characters", "Address is valid");
    });
  
    function validateInput(inputElement, regex = null, errorMessage = "Invalid input", validMessage = "Input is valid") {
        const value = inputElement.value.trim();
        const isValid = !regex || regex.test(value);
  
        if (isValid) {
            inputElement.classList.remove('border-red-500');
            inputElement.classList.add('border-green-500');
            removeErrorLabel(inputElement);
            // Tambahkan pesan validasi khusus
            const validMessageElement = inputElement.parentElement.querySelector('.valid-message');
            if (validMessageElement) {
                validMessageElement.textContent = validMessage;
            } else {
                const newValidMessage = document.createElement('small');
                newValidMessage.textContent = validMessage;
                newValidMessage.classList.add('text-green-500', 'valid-message');
                inputElement.parentElement.appendChild(newValidMessage);
            }
            // Menghilangkan pesan kesalahan kustom jika ada
            inputElement.setCustomValidity('');
        } else {
            inputElement.classList.remove('border-green-500');
            inputElement.classList.add('border-red-500');
            showErrorLabel(inputElement, errorMessage);
            // Mengatur pesan kesalahan kustom
            inputElement.setCustomValidity(errorMessage);
            // Menghapus pesan validasi jika ada
            const validMessageElement = inputElement.parentElement.querySelector('.valid-message');
            if (validMessageElement) {
                inputElement.parentElement.removeChild(validMessageElement);
            }
        }
    }
  
    function showErrorLabel(inputElement, message) {
        const errorLabel = inputElement.parentElement.querySelector('.error-label');
        if (errorLabel) {
            errorLabel.textContent = message;
        } else {
            const newErrorLabel = document.createElement('small');
            newErrorLabel.textContent = message;
            newErrorLabel.classList.add('text-red-500', 'error-label');
            inputElement.parentElement.appendChild(newErrorLabel);
        }
    }
  
    function removeErrorLabel(inputElement) {
        const errorLabel = inputElement.parentElement.querySelector('.error-label');
        if (errorLabel) {
            inputElement.parentElement.removeChild(errorLabel);
        }
    }
});
