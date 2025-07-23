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

    window.addEventListener('scroll', function () {
      const header = document.getElementById('transparent-header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
});