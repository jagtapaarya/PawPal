let btn = document.getElementById("petBtn");
let video = document.getElementById("petVideo");

btn.onclick = function() {

    let choice = confirm("Do you want to pet Buddy?");

    if(choice) {
        video.style.display = "block";
        video.play();
    }
    else {
        alert("Maybe later!");
    }
}