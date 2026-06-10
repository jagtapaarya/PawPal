let btn = document.getElementById("petBtn");
let video = document.getElementById("petVideo");

btn.onclick = function() {
    video.style.display = "block";
    video.play();
};