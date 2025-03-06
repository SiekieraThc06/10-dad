function isPalindrome(inStr) {
    inStr = inStr.replace(/\W/g, '').toLowerCase();
    return inStr === inStr.split('').reverse().join('');
}

function checkPalindrome() {
    const inputText = document.getElementById("inputText").value;
    const result = document.getElementById("result");

    if (inputText.trim() === "") {
        result.textContent = "Wpisz jakiś tekst.";
        return;
    }

    if (isPalindrome(inputText)) {
        result.textContent = "To jest palindrom!";
    } else {
        result.textContent = "To nie jest palindrom.";
    }
}
