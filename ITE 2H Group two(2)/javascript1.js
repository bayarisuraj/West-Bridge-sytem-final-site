    // Toggle responsive navigation

    //service
    function toggleMenu() {
      const nav = document.getElementById("mainNav");
      nav.classList.toggle("active");
    
      const barIcon = document.querySelector(".fa-bars");
      const closeIcon = document.querySelector(".fa-close");
    
      barIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
    }


    // Resquet quotes: 
    const mainNav = document.getElementById('mainNav');
    const toggleBars = document.getElementById('toggle-bars');
    const toggleClose = document.getElementById('toggle-close');

    toggleBars.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      toggleBars.style.display = 'none';
      toggleClose.style.display = 'block';
    });

    toggleClose.addEventListener('click', () => {
      mainNav.classList.remove('active');
      toggleClose.style.display = 'none';
      toggleBars.style.display = 'block';
    });
    