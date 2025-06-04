const aboutBtn = document.getElementById('aboutBtn');
const popup = document.getElementById('articleModal');
const closeModalBtn = document.getElementById('closeModal');

aboutBtn.addEventListener('click', () => {
  popup.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
  popup.classList.remove('active');
});

const toggleBtn = document.getElementById('toggle-button');
const services = document.getElementById('more-services');

toggleBtn.addEventListener('click', () => {
  if (services.style.display === 'none') {
    services.style.display = 'block';
    toggleBtn.textContent = 'Show Less';
  } else {
    services.style.display = 'none';
    toggleBtn.textContent = 'Show More';
  }
});

function openModal(title, content) {
  const modal = document.getElementById('articleModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalText = document.getElementById('modalText');

  modalTitle.textContent = title;
  modalText.textContent = content;
  modal.classList.add('active');
}

const sendFB = document.getElementById('sendFB');
const disableFB = document.getElementById('disableFB');
const fbAnswer = document.getElementById('FBAnswer');

sendFB.addEventListener('click', () => {
  fbAnswer.textContent = 'Thank you for your feedback!';
});

disableFB.addEventListener('click', () => {
  sendFB.disabled = true;
  fbAnswer.textContent = 'Feedback has been disabled.';
});
