const MainText = document.querySelector('h1');
let BgAudio = new Audio('../assets/bgMusic.mp3');
let doneAud = new Audio('../assets/Sound1.mp3');

let isAction = true;
BgAudio.play();
BgAudio.volume = 0.5;

const btn = document.querySelector('button');
btn.addEventListener('click', () =>{
  isAction = !isAction;
  BgAudio.volume = !isAction ? 0 : 0.5;
  btn.style.background = !isAction ? 'red' : 'none'
});

var text1 = "This is the first text variable. It contains some initial text to demonstrate its usage. You can modify it or append more text as needed.";
var text2 = "Here's another text variable, the second one. This variable is intended to hold longer strings of text. Feel free to use it for storing detailed information or messages.";
var text3 = "And this is the third text variable, containing some more text. You can utilize it for storing additional information or messages in your JavaScript code. Remember, variables like these can be handy for organizing and managing textual data.";
var text4 = "This is the fourth text variable. It adds more content to our collection of text variables. You can use it to store even more information or messages.";
var text5 = "Here's the fifth text variable. It further expands our text storage capabilities in JavaScript. Feel free to assign any text you need to this variable.";
var text6 = "And finally, here's the sixth text variable. With this variable, you have even more flexibility to store and manipulate text in your JavaScript code. Use it wisely!";



random();
function random(){
  let textArray = [text1, text2, text3, text4, text5, text6] 

  let randomText = Math.floor(Math.random() * textArray.length)

  MainText.textContent = textArray[randomText];
};

let letters = MainText.textContent.split("");
const spannedText = letters.map(letter => `<span>${letter}</span>`).join("");
MainText.innerHTML = spannedText;

const spans = document.querySelectorAll('span');

spans.forEach((span, index) =>{
  let currentIndex = 0;
  window.addEventListener('keydown', (e) =>{
    if (currentIndex < spans.length && e.key === spans[currentIndex].textContent) {
      spans[currentIndex].style.backgroundColor = 'green';
      spans[currentIndex].style.color = 'white';
      currentIndex ++;
      if(currentIndex === spans.length){
        doneAud.play();
      }
    }
    
  })
})