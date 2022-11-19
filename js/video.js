// Add js here.
var vid = document.getElementById("videoplayer");
vid.preload = "auto";
vid.autoplay = false;
vid.loop = false;

var play = document.getElementById("play");
play.addEventListener('click',playVid);

function playVid() {
    vid.play();
}



var play = document.getElementById("pause");
pause.addEventListener('click',pauseVid);

function pauseVid() {
    vid.pause();
}

var slower = document.getElementById("slower");
slower.addEventListener('click', slowerVid);
function slowerVid() {
    if (vid.playbackRate == 1){
        vid.playbackRate = 0.5;
    }
    else if (vid.playbackRate == 2) {
        vid.playbackRate = 1;}
    else if (vid.playbackRate == 0.5) {
            alert('Video is at slowest speed!');
      }
}


var faster = document.getElementById("faster");
faster.addEventListener('click', fasterVid);
function fasterVid() {
    if (vid.playbackRate == 1){
        vid.playbackRate = 2;
    }
    else if (vid.playbackRate == 0.5) {
        vid.playbackRate = 1;}
    else if (vid.playbackRate == 2) {
            alert('Video is at fastest speed!');
      }
}


var skip = document.getElementById("skip");
skip.addEventListener('click', skipAhead);

function skipAhead() {
    if (vid.currentTime + 15 < vid.duration){
    vid.currentTime += 15;}
    else {
        vid.currentTime = 0;
    }
}

var mute = document.getElementById("mute");
mute.addEventListener('click', mute_unmute);
function mute_unmute() {
    if (vid.muted == false){
        vid.muted = true;
        document.getElementById("mute").innerText = "unmute";}
    else {
        vid.muted = false
        document.getElementById("mute").innerText = "mute";

    }
}
var volume = document.getElementById("volume");
const slider = document.getElementById("slider");
slider.addEventListener('change', volumeSlider);
function volumeSlider() {
    vid.volume = slider.value / 100;
    volume.innerText = slider.value;
}