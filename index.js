var textWrapper = document.querySelector('.m9');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class= 'letter'>$&</span>");

anime.timeline({loop: true})
.add({
  targets : '.m9 .letter',
  scale: [4 , 1],
  opacity: [0, 1],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 950,
  delay: (el, i) => 70*1
}) .add ({
  targets: '.m9',
  opacity: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1000
});
