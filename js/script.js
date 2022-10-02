// Assign Fixed Div Height to Placeholder Div
const headerEl = document.getElementById('header-el');
const headerElPlaceholder = document.getElementById('header-placeholder');
const body = document.querySelector('body');

addEventListener('load', function () {
  headerElPlaceholder.style.height = `${headerEl.clientHeight}px`;
});

addEventListener('resize', function () {
  headerElPlaceholder.style.height = `${headerEl.clientHeight}px`;
});

// ----------- Header On Scroll ------------ //
let className = 'trans';
let scrollTrigger = 60;

window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    headerEl.classList.add(className);
  } else {
    headerEl.classList.remove(className);
  }
};

// Mobile Menu Trigger

const burgerBar = document.getElementById('mobi-bar');
const ul_enu = document.querySelector('header nav .menu-items');

addEventListener('resize', function () {
  if (ul_enu.classList.contains('active')) {
    ul_enu.classList.remove('active');
    body.style.overflow = 'unset';
  }
});

burgerBar.addEventListener('click', function (e) {
  if (!ul_enu.classList.contains('active')) {
    ul_enu.classList.add('active');
    body.style.overflow = 'hidden';
  } else {
    ul_enu.classList.remove('active');
    body.style.overflow = 'unset';
  }
});
