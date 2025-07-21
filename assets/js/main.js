document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.getElementById('burgerBtn');
    const closeBtn = document.getElementById('closeBtn');
    const navbar = document.getElementById('navbarContent');
  
    const linkButtons = document.querySelectorAll('.nav-link');

    linkButtons.forEach(button => {
      button.addEventListener('click', () => {
        navbar.classList.remove('show');
      });
    });

    burgerBtn.addEventListener('click', () => {
      navbar.classList.add('show');
    });
    
    closeBtn.addEventListener('click', () => {
      navbar.classList.remove('show');
    });
});