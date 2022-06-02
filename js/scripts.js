const toast = document.getElementById('toast');
const toastBtn = document.getElementById('toast-btn');
const toastIconBtn = document.getElementById('toast-icon-btn');

let interval;

toastBtn.addEventListener('click', () => {
  toast.classList.add('toast--active');

  interval = setTimeout(() => {
    toast.classList.remove('toast--active');
  }, 5000);
});

toastIconBtn.addEventListener('click', () => {
  toast.classList.remove('toast--active');
  clearInterval(interval);
});
