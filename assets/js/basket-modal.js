// Показываем и скрываем модальное окно корзины при наведении
const basketLink = document.getElementById('basket-link');
const basketModal = document.getElementById('basket-modal');

if (basketLink && basketModal) {
  let modalTimeout;

  basketLink.addEventListener('mouseenter', () => {
    clearTimeout(modalTimeout);
    basketModal.style.display = 'block';
  });
  basketLink.addEventListener('mouseleave', () => {
    modalTimeout = setTimeout(() => {
      if (!basketModal.matches(':hover')) basketModal.style.display = 'none';
    }, 150);
  });
  basketModal.addEventListener('mouseenter', () => {
    clearTimeout(modalTimeout);
    basketModal.style.display = 'block';
  });
  basketModal.addEventListener('mouseleave', () => {
    basketModal.style.display = 'none';
  });
} 