let moodRange = document.getElementById("moodRange");
let status = document.getElementById("status");
let dogImage = document.getElementById("dogImage");

function updateMood() {

    let mood = Number(moodRange.value);

    if (mood <=50) {
        status.innerHTML = "<b>Hungry 🍖</b>";
        dogImage.src = "pup_sad.webp";

        dogImage.onclick = function() {
        window.location.href = "hungry.html";
    };

    }

    else if (mood < 100) {
        status.innerHTML = "<b>Playful 🎾</b>";
        dogImage.src = "pup_playy.webp";
    }

    else {
        status.innerHTML = "<b>Happy 😊</b>";
        dogImage.src = "pup_happy.jpg";
    }
}

updateMood();

moodRange.addEventListener("input", updateMood);