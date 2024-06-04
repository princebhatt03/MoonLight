let moon = document.getElementById('moon');
let stars = document.getElementById('stars');
let mountains_behind = document.getElementById('mountain_behind');
let text = document.getElementById('h21');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountain_front');
let nav = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  stars.style.left = value * 0.7 + 'px';
  moon.style.top = value * 1.05 + 'px';
  mountains_behind.style.top = value * 0.3 + 'px';
  nav.style.top = value * 0.3 + 'px';
  mountains_front.style.top = value * 0 + 'px';
  text.style.marginRight = value * 4 + 'px';
  text.style.marginTop = value * 0.7 + 'px';
  btn.style.marginTop = value * 0.7 + 'px';
});
