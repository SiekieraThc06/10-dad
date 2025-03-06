var poletextowe = document.getElementById("poletextowe");
var licznik = document.getElementById("licznik");

var onKeyDown = function () {
    licznik.textContent = poletextowe.value.length;
};

poletextowe.addEventListener("keydown", onKeyDown);
