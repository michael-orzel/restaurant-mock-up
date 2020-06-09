const bars = document.querySelector('.fa-bars');

function toggleDropdown() {
  const navDropdown = document.getElementById('nav-dropdown');
  if (navDropdown.style.display === "block") {
    navDropdown.style.display = "none";
  } else {
    navDropdown.style.display = "block";
  }
}

bars.addEventListener('click', toggleDropdown);