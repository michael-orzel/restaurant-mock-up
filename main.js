const bars = document.querySelector('.nav-bars');

function toggleDropdown() {
  const navDropdown = document.querySelector('.nav-dropdown');
  if (navDropdown.style.display === "block") {
    navDropdown.style.display = "none";
  } else {
    navDropdown.style.display = "block";
  }
}

bars.addEventListener('click', toggleDropdown);