// display letter buttons
var alphabet = document.getElementById("letters");
for (let letter = 65; letter <= 90; letter++) {
  alphabet.innerHTML +=
    '<a href="#" class="letter">' + String.fromCharCode(letter) + "</a>";
}

