var gridItems = document.getElementsByClassName('grid-item');
var currentMark = 'X';

for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener('click', () => {
        gridItems[i].innerHTML = currentMark;
        currentMark = (currentMark == 'X')? 'O':'X'; 
    });
}