document.getElementById('eye-icon').addEventListener('click', function() {
    passwordIn = document.getElementById('password');
    if (passwordIn.type === 'password') {
            passwordIn.type = 'text';
            this.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            passwordIn.type = 'password';
            this.classList.replace("fa-eye-slash", "fa-eye");
        }
});
