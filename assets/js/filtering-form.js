document.addEventListener('DOMContentLoaded', function() {
  const filterBtn = document.querySelector('.filter-button[data-filter=\"open\"]');
  const filteringForm = document.querySelector('.filtering-form');

  if (filterBtn && filteringForm) {
    filterBtn.addEventListener('click', function(e) {
      e.preventDefault();
      filteringForm.classList.toggle('open');
    });
  }
}); 