document.addEventListener("play",function (e) {
  var audios = document.getElementsByTagName("audio");
    for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
        audios[i].pause();
        audios[i].load();
      }
    }
  },
  true
);

var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
var navList = document.querySelector('.nav-list')
toggleButton.addEventListener('click', function () {
  navBar.classList.toggle('toggle');
});
navList.addEventListener('click', function () {
  navBar.classList.toggle('toggle');
});