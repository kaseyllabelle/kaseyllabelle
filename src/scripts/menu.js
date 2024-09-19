const menuToggle = document.getElementById("menuToggle");
menuToggle.addEventListener("click", () => {
  document.querySelector('.menu').classList.toggle('expanded');
});