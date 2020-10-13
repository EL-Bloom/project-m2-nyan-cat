// const soundGame = document.createElement("audio");
// soundGame.source.src = "images/music/nyan.music1.mp3";
// body.appendChild(soundGame);

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () { 
    this.sound.volume= 0.5;
    this.sound.play(); 
   
  };
  this.stop = function () {
    this.sound.pause();
  };
}

let backGroundMusic = new sound("images/music/nyan.music1.mp3");
let movingSound = new sound("images/music/jump-sound.mp3"); 
let endGameCat = new sound("images/music/endGameCat.mp3");

