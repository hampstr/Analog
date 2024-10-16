
let play = document.getElementById('play');
let about = document.getElementById('about');
let tutorial = document.getElementById('tutorial');

play.addEventListener('click', function() {
  window.location.href = 'game.html';
});

about.addEventListener('click', function() {
  window.location.href = 'about.html';
});

tutorial.addEventListener('click', function() {
  window.location.href = 'tutorial.html';
});