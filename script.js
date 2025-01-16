const wordsList = ["Developer", "Graphic\u00A0Designer", "Writer", "Artist"];
const span = document.querySelector("span");

// const word = "Graphic\u00A0Designer";
let charIdx = 0;
let reverseType = false;
let wordIdx = 0;

const intervalId = setInterval(() => {
  if (!reverseType) {
    span.innerText = span.innerText + wordsList[wordIdx][charIdx];
    charIdx++;
  } else{
    span.innerText = span.innerText.slice(0, span.innerText.length-1)
  }

  if(span.innerText.length === 0 && reverseType){
    reverseType=false
    charIdx=0
    wordIdx++;
  }

  if (charIdx === wordsList[wordIdx].length) {
    // clearInterval(intervalId)
    reverseType = true;
  }

  if(wordIdx === wordsList.length-1){
    wordIdx=0
  }
}, 800); //delay in milliseconds node script.js
