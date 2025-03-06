function dodanie(){
 
    var tekst = document.getElementById('pole1').textContent;
    var newElement = document.createElement('li');
    var newText = document.createTextNode(tekst);
    newElement.appendChild(newText);
    var position = document.getElementsByTagName('ul')[0];
    position.appendChild(newElement);
    }