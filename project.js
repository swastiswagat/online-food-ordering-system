document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cart = document.querySelector('#cart ul');
    const clearCartBtn = document.querySelector('#clear-cart-btn');
    let totalPrice = 0;
  
    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const price = parseFloat(button.dataset.price);
            totalPrice += price;
            cart.innerHTML += `<li>${button.parentElement.querySelector('h3').textContent} - ${price}₹ <button class="remove-btn" data-price="${price}">Remove</button></li>`;
            document.querySelector('#total-price').textContent = totalPrice;
        });
    });

    document.getElementById('checkout-btn').addEventListener('click', function () {
      document.getElementById('location-form').style.display = 'block';
    });
  
    clearCartBtn.addEventListener('click', function () {
        cart.innerHTML = '';
        totalPrice = 0;
        document.querySelector('#total-price').textContent = totalPrice;
    });
  
    cart.addEventListener('click', function (event) {
        if (event.target.matches('.remove-btn')) {
            const price = event.target.dataset.price;
            totalPrice -= parseFloat(price);
            document.querySelector('#total-price').textContent = totalPrice;
            event.target.parentElement.remove();
            event.target.parentElement.classList.add('remove-animation');
        }
    });
  });

  const locationForm = document.getElementById('location-form');

locationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  window.location.href = 'payment.html';
});
const paymentMethodSelect = document.getElementById('payment-method');
const upiIdInput = document.getElementById('upi-id');

paymentMethodSelect.addEventListener('change', () => {
  if (paymentMethodSelect.value === 'upi') {
    upiIdInput.style.display = 'block';
  } else {
    upiIdInput.style.display = 'none';
  }
});