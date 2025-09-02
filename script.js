const quantityContainers = document.querySelectorAll('.section-details__card-quality-form');

quantityContainers.forEach(container => {
  const minus = container.querySelector('img[alt="Minus"]');
  const plus = container.querySelector('img[alt="Plus"]');
  const number = container.querySelector('span');

  let value = parseInt(number.textContent);

  minus.addEventListener('click', () => {
    if (value > 0) {
      value--;
      number.textContent = value;
    }
  });

  plus.addEventListener('click', () => {
    value++;
    number.textContent = value;
  });
});