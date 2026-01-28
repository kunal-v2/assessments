const options = document.querySelectorAll('.option');
const total = document.getElementById('total');

options.forEach(option => {
  option.addEventListener('click', (e) => {
    // Prevent clicks on dropdowns from re-triggering
    if (e.target.tagName === 'SELECT') return;

    options.forEach(o => {
      o.classList.remove('active');
      o.querySelector('input[type="radio"]').checked = false;
    });

    option.classList.add('active');
    option.querySelector('input[type="radio"]').checked = true;

    total.textContent = `$${option.dataset.price}.00 USD`;
  });
});
