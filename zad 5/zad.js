function sprawdzanie() {
    var password = document.getElementById("password").value.trim();
    var message = document.getElementById("message");

    var special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    if (password.length < 8) {
        message.innerHTML = 'Hasło za krótkie';
    } else if (!password.match(special)) {
        message.innerHTML = 'Hasło powinno zawierać znak specjalny';
    } else {
        message.innerHTML = 'Hasło poprawne';
    }
}