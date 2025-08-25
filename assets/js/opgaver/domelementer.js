/* DOM-elementer */



/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

// din kode her

const myRedFigureByMariePierreLessard=document.getElementById('redFigure');
console.log(myRedFigureByMariePierreLessard);

const myYellowFigureByMariePierreLessard=document.getElementById('yellowFigure');
console.log(myYellowFigureByMariePierreLessard);


/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/


// din kode her

myRedFigureByMariePierreLessard.style.backgroundColor='blue'; 
myYellowFigureByMariePierreLessard.style.backgroundColor='blue'; 


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

/* Student's note: solution: append the elements to be added to a container, then append the container to sth in the DOM. */
let newH2ByMariePierreLessard = document.createElement('h2');
newH2ByMariePierreLessard.innerText = 'Opgave 2.1 løsning';

let newParByMariePierreLessard = document.createElement('p');
newParByMariePierreLessard.innerText = 'Jeg har løst opgave 2.1';

let newSectionByMariePierreLessard = document.createElement('section');
newSectionByMariePierreLessard.appendChild(newH2ByMariePierreLessard);
newSectionByMariePierreLessard.appendChild(newParByMariePierreLessard);

const eOpgaveTwoByMariePierreLessard = document.getElementById('opgaveTwo');
eOpgaveTwoByMariePierreLessard.appendChild(newSectionByMariePierreLessard);


// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

// din kode her

let myPurpleFiguresByMariePierreLessard = document.getElementsByClassName('purpleFigures');
console.log(myPurpleFiguresByMariePierreLessard);


/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map metoden til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
eller bruge querySelectorAll og foreach til at loope.
*/

// din kode her

/* Løsning 1 med array.from og map() metoden (med hjælp fra Bo) */

/* Student's note: first, you have to define the array because myPurpleFigures is not an array yet, it is a HTML collection. (Array.from makes an array out of sth.) */
let myArrayByMariePierreLessard = Array.from(myPurpleFiguresByMariePierreLessard);
console.log(myArrayByMariePierreLessard);
/* Student's note: in this anonymous function, the parentheses around element are what is called a parameter catcher; element is a parameter, it is not a variable or a name for the function! */
myArrayByMariePierreLessard.map((element) => {
    element.style.backgroundColor='red';
});

/* Løsning 2 med querySelectorAll (virker) */

/* Student's note: if I reuse "let myPurpleFigures" (see 3.1), all my previous answers disappear (it bugs)! It is because a variable cannot be declared twice (with let or const). 
Solution: just don't write let in front of the expression.
Terminology: 
An expression is often a line that ends with ; in our JavaScript exercises. 
The text between quotation marks is a string. 
document er et object. 
querySelectorAll() is a method. querySelectorAll() is always preceded by document or a variable that identifies a part of a document: document.querySelectorAll; often used with forEach, which applies to an array. 
turnRed is a parameter.

myPurpleFiguresByMariePierreLessard = document.querySelectorAll('.purpleFigures');
myPurpleFiguresByMariePierreLessard.forEach(turnRedByMariePierreLessard);
function turnRedByMariePierreLessard(myPurpleFiguresByMariePierreLessard) {
    myPurpleFiguresByMariePierreLessard.style.backgroundColor='red';
}   
*/

/* opgave 3.3
Brug din array til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/


// din kode her

/* Løsning 1 (foreach kombineret med array.from metoden) (virker) */

myArrayByMariePierreLessard.forEach(textTurnsRedByMariePierreLessard);
function textTurnsRedByMariePierreLessard(myPurpleFiguresByMariePierreLessard) {
    myPurpleFiguresByMariePierreLessard.style.color='darkred';
}

/* Løsning 2 med querySelectorAll og foreach (virker) 

myPurpleFiguresByMariePierreLessard.forEach(textTurnsRedByMariePierreLessard);
function textTurnsRedByMariePierreLessard(myPurpleFiguresByMariePierreLessard) {
    myPurpleFiguresByMariePierreLessard.style.color='darkred';
}   
*/

/* Elevsnotat: målet var at blive færdig med så mange øvelser som muligt. Opgave 4 er udenfor pensum. */

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



