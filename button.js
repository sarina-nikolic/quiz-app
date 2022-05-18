console.clear();

const showAnswerButton = document.querySelector('[data-js="button"]');
// TODO: get hidden answer object
const showAnswerText = document.querySelector('[data-js="show-answer-text"]');
const hideButton = document.querySelector('[data-js="button-hide"]');

showAnswerButton.addEventListener("click", () => {
  showAnswerText.classList.add("show-answer--active");
});

hideButton.addEventListener("click", () => {
  showAnswerText.classList.remove("show-answer--active");
});
