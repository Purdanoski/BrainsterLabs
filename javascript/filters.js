document.addEventListener("DOMContentLoaded", function () {
  const filterLabels = document.querySelectorAll('.filters label');
  const cards = document.querySelectorAll('.card');

  filterLabels.forEach(label => {
      label.addEventListener('click', function () {
          filterLabels.forEach(otherLabel => {
              if (otherLabel !== label) {
                  otherLabel.classList.remove('active');
              }
          });
          label.classList.toggle('active');

          if (label.classList.contains('active')) {
              const category = label.getAttribute('for');
              cards.forEach(card => {
                  card.style.display = card.classList.contains(category) ? 'block' : 'none';
              });
          } else {
              cards.forEach(card => {
                  card.style.display = 'block';
              });
          }
      });
  });
});