const burgerBar = document.getElementById('mobi-bar');
const ul_enu = document.querySelector('header nav .menu-items');

addEventListener('resize', function () {
  if (ul_enu.classList.contains('active')) {
    ul_enu.classList.remove('active');
  }
});

burgerBar.addEventListener('click', function (e) {
  if (!ul_enu.classList.contains('active')) {
    ul_enu.classList.add('active');
  } else {
    ul_enu.classList.remove('active');
  }
});
