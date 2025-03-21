/* DOMcelementer */



/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

// din kode her

const myRedFigure=document.getElementById('redFigure');
console.log(myRedFigure);

const myYellowFigure=document.getElementById('yellowFigure');
console.log(myYellowFigure);


/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/


// din kode her

myRedFigure.style.backgroundColor='blue'; 
myYellowFigure.style.backgroundColor='blue'; 


/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/


// din kode her

/* Student's note: if I write the following, nothing is displayed even through each set of 4 lines works on their own. 
"The appendChild() method appends a node (element) as the last child of an element." https://www.w3schools.com/jsref/met_node_appendchild.asp

let nyH2 = document.createElement('h2');
nyH2.innerText = 'Opgave 2.1 løsning';
const eOpgaveTwo = document.getElementById('opgaveTwo');
eOpgaveTwo.appendChild(nyH2);

let nyP = document.createElement('p');
nyP.innerText = 'Jeg har løst opgave 2.1';
const eOpgaveTwo = document.getElementById('opgaveTwo');
eOpgaveTwo.appendChild(nyP);
 */

/* Student's note: the following (appending the p to the h2 before appending the h2 to eOpgaveTwo) does insert both lines of text in the DOM, but the p element is formatted as an h2! 

let nyH2 = document.createElement('h2');
nyH2.innerText = 'Opgave 2.1 løsning';

let nyP = document.createElement('p');
nyP.innerText = 'Jeg har løst opgave 2.1';
nyH2.appendChild(nyP);

const eOpgaveTwo = document.getElementById('opgaveTwo');
eOpgaveTwo.appendChild(nyH2);
*/

/* Solution: append the elements to be added to a container, then append the container to sth in the DOM. */
let newH2 = document.createElement('h2');
newH2.innerText = 'Opgave 2.1 løsning';

let newP = document.createElement('p');
newP.innerText = 'Jeg har løst opgave 2.1';

let newSection = document.createElement('section');
newSection.appendChild(newH2);
newSection.appendChild(newP);

const eOpgaveTwo = document.getElementById('opgaveTwo');
eOpgaveTwo.appendChild(newSection);


// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

// din kode her

let myPurpleFigures = document.getElementsByClassName('purpleFigures');
console.log(myPurpleFigures);


/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map metoden til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
eller bruge querySelectorAll og foreach til at loope.
*/

// din kode her

/* Løsning 1 med array.from og map() metoden (med hjælp fra Bo) */

/* First, you have to define the array because myPurpleFigures is not an array yet, it is a HTML collection. */
let myArray = Array.from(myPurpleFigures);
console.log(myArray);
/* element is what is called a parameter catcher in this anonymous function, it is not a variable or a name for the function! */
myArray.map((element) => {
    element.style.backgroundColor='red';
});

/* Løsning 2 med querySelectorAll (virker) */

/* If I reuse "let myPurpleFigures" (see 3.1), all my previous answers disappear (it bugs)! It is because a variable cannot be declared twice (with let or const). 
Solution: just don't write let in front of the expression (a line in JavaScript). The text between quotation marks is a string. document er et objekt. querySelectorAll() is a method. 
querySelectorAll is always preceded by document: document.querySelectorAll; often used with forEach, which applies to an array. 
turnRed is a parameter.

myPurpleFigures = document.querySelectorAll('.purpleFigures');
myPurpleFigures.forEach(turnRed);
function turnRed(myPurpleFigures) {
    myPurpleFigures.style.backgroundColor='red';
}   
*/

/* opgave 3.3
Brug din array til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/


// din kode her

/* Løsning 1 (foreach kombineret med array.from metoden) (virker) */

myArray.forEach(textTurnsRed);
function textTurnsRed(myPurpleFigures) {
    myPurpleFigures.style.color='darkred';
}

/* Løsning 2 med querySelectorAll og foreach (virker) 

myPurpleFigures.forEach(textTurnsRed);
function textTurnsRed(myPurpleFigures) {
    myPurpleFigures.style.color='darkred';
}   
*/


/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
Fyld dine elementers innerHtML eller andre atributter med dine data
*/

const myData = {
    name: 'tiger',
    image: 'assets/img/standard_tiger.jpg',
    description: 'En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.'
};


// din kode her

/* Elevsnotat: målet var at blive færdig med så mange øvelser som muligt. Opgave 4 er udenfor pensum. */


