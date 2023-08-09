document.addEventListener('DOMContentLoaded', function() {
    const divItems = document.querySelectorAll('.div-item');
  
    divItems.forEach(function(div, index) {
      div.addEventListener('click', function() {
        if (!div.classList.contains('open')) {
          closeAllDivs();
          div.classList.add('open');
          div.style.maxHeight = div.scrollHeight + 'px';
        } else {
          div.classList.remove('open');
          div.style.maxHeight = '0';
        }
      });
  
      if (index !== 0) {
        div.style.maxHeight = '0';
      }
    });
  
    function closeAllDivs() {
      divItems.forEach(function(div) {
        div.classList.remove('open');
        div.style.maxHeight = '0';
      });
    }
});
  
  