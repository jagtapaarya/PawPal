let moodRange = document.getElementById("moodRange");
let status = document.getElementById("status");
let catImage = document.getElementById("catImage");

function updateMood() {
    let mood = moodRange.value;

    if (mood <= 30) {
        status.innerHTML = "😿 Kitty is very sad!";
        catImage.src = "persu_sad.jpg";
    }
    else if (mood <= 70) {
        status.innerHTML = "😺 Kitty is feeling okay.";
        catImage.src = "persu_petting.jpg";
    }
    
    else {
        status.innerHTML = "😻 Kitty is EXTREMELY HAPPY and PURRING!";
        catImage.src = "persu_happy.webp";
    }
}

moodRange.addEventListener("input", updateMood);
updateMood();