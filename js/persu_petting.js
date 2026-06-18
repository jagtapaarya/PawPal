let btn = document.getElementById("petbtn");
let video = document.getElementById("video");

btn.onclick = function() {
    video.style.display = "block";
    video.play();
};