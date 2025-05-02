// for thr toggles
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// console.log("test");

//Toggle responsive navigation
function toggleMenu() {
  var x = document.querySelector(".nav-links");
  x.classList.toggle("responsive");
    var icon = document.querySelector(".icon a i.fa-bars");
    var iconClose = document.querySelector(".icon a i.fa-close");
    if (x.classList.contains("responsive")) {
        icon.style.display = "none";
        iconClose.style.display = "block";
    }else {
        icon.style.display = "block";
        iconClose.style.display = "none";
    }
}
function search(string){
  window.find(string);
  // /*alert(string + ' found');*/   
  }

         //Map 

      // Shake the search bar if input is null
      document.querySelector('.input2').addEventListener('click', function() {
        var searchInput = document.getElementById('search');
        if (!searchInput.value.trim()) {
        searchInput.classList.add('shake');
        setTimeout(() => searchInput.classList.remove('shake'), 500);
        }
      });

     