// Write your code below:
const  subHeading= document.createElement('h3');
subHeading.textContent = "Buy hight quality organic fruits online";
subHeading.style.fontStyle = 'italic';

const firstDiv = document.getElementsByTagName('div')[0];
firstDiv.appendChild(subHeading);

const paraText = document.createElement('p');
paraText.content = 'Total fruits:4';
paraText.id = 'fruits-total';

const secondDiv = document.getElementsByTagName('div')[1];

const ul = document.querySelector('ul');
secondDiv.insertBefore(paraText, ul);

