console.clear();

const showAnswerButton = document.querySelector('[data-js="button"]');
// TODO: get hidden answer object

console.log(showAnswerButton);

function onButtonClick() {
  console.log("show answer");
  // TODO: make answer object visible
}

showAnswerButton.addEventListener("click", onButtonClick);
