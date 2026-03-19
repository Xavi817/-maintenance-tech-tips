const buttons = document.querySelectorAll('.toggle-btn');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    const extraContent = button.previousElementSibling;
    if (extraContent.style.display === 'none') {
      extraContent.style.display = 'block';
      button.textContent = 'Read Less';
    } else {
      extraContent.style.display = 'none';
      button.textContent = 'Read More';
    }
  });
});