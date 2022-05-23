export function configureToggleableAnswerButton() {
  const toggleAnswerButton = document.querySelector(
    '[data-js="toggle-answer-button"]'
  );
  console.log(toggleAnswerButton);
  console.log(toggleAnswerButton.innerText);

  const showAnswerText = document.querySelector('[data-js="show-answer-text"]');

  let answerVisible = false;

  toggleAnswerButton.addEventListener('click', () => {
    if (answerVisible) {
      showAnswerText.classList.remove('show-answer--active');
      answerVisible = false;
      toggleAnswerButton.innerText = 'Show answer';
    } else {
      showAnswerText.classList.add('show-answer--active');
      answerVisible = true;
      toggleAnswerButton.innerText = 'Hide answer';
    }
    console.log(
      `answerVisible = ${answerVisible} ; toggleAnswerButton text = ${toggleAnswerButton.innerText}`
    );
  });
}
