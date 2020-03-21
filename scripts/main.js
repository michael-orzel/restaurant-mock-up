const icon = document.querySelector('.nav-icon');

function toggleMenu() {
  var navmenu = document.getElementById('nav-links');
  if (navmenu.style.display === "block") {
    navmenu.style.display = "none";
  } else {
    navmenu.style.display = "block";
  }
}

icon.addEventListener('click', toggleMenu);
