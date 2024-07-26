const paymentForm = document.getElementById('payment-form');
const paymentMethodSelect = document.getElementById('payment-method');
const upiIdInput = document.getElementById('upi-id');

paymentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  paymentForm.classList.add('loading');
  setTimeout(() => {
    paymentForm.classList.remove('loading');
  }, 3000);
});

paymentMethodSelect.addEventListener('change', () => {
  if (paymentMethodSelect.value === 'upi') {
    upiIdInput.style.display = 'block';
  } else {
    upiIdInput.style.display = 'none';
  }
});

paymentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  window.location.href = 'paymentgateway.html';
});