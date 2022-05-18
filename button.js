console.clear();

const showAnswerButton = document.querySelector('[data-js="button"]');
// TODO: get hidden answer object
const showAnswerText = document.querySelector('[data-js="show-answer-text"]');

console.log(showAnswerButton);

function onButtonClick() {
  showAnswerText.classList.add("show-answer--active");
  // TODO: make answer object visible
}

showAnswerButton.addEventListener("click", onButtonClick);

console.clear();
