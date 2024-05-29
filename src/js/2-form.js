const form = document.querySelector('.feedback-form');

form.addEventListener('input', onInput);

form.addEventListener('submit', onSubmit);

document.addEventListener('DOMContentLoaded', renderPage);
const LS_KEY = 'feedback-form-state';
function onInput(event) {
  const { email, message } = event.currentTarget.elements;
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}
function onSubmit(event) {
  event.preventDefault();
  const { email, message } = event.currentTarget.elements;
  if (email.value.trim() === '' || message.value.trim() === '') {
    return alert('Fill please all fields');
  }
  console.log({
    email: email.value.trim(),
    message: message.value.trim(),
  });
  localStorage.removeItem(LS_KEY);
  event.currentTarget.reset();
}
function renderPage() {
  const formData = JSON.parse(localStorage.getItem(LS_KEY));
  if (formData) {
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}
