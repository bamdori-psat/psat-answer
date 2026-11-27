const form = document.querySelector('form');
const input = document.querySelector('#page');
const error = document.querySelector('#error');

form.addEventListener('submit', event => {
  event.preventDefault();
  const link = document.getElementById('p' + Number(input.value));
  if (link) {
    link.click();
    return;
  }
  error.textContent = input.placeholder + ' 사이의 문항번호를 입력해 주세요.';
  error.hidden = false;
  input.focus();
});
input.addEventListener('input', () => { error.hidden = true; });

const choices = document.querySelectorAll('button[aria-controls]');
for (const choice of choices) {
  choice.addEventListener('click', () => {
    const expand = choice.getAttribute('aria-expanded') === 'false';
    for (const button of choices) {
      const selected = expand && button === choice;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-expanded', String(selected));
      document.getElementById(button.getAttribute('aria-controls')).hidden = !selected;
    }
  });
}
