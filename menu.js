// Hamburger menu – Royal Palace Hotel
function toggleMenu() {
  var links = document.getElementById('nav-links');
  if (links.classList.contains('open')) {
    links.classList.remove('open');
  } else {
    links.classList.add('open');
  }
}
