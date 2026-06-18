let fish = document.getElementById("fish");
let milk = document.getElementById("milk");
let catfood = document.getElementById("catfood");

let catImage = document.getElementById("catImage");
let capacity = document.getElementById("capacity");
let bowlBar = document.getElementById("bowlBar");
let message = document.getElementById("message");

function updateBowl() {

    let total =
        Number(fish.value) +
        Number(milk.value) +
        Number(catfood.value);

    capacity.textContent = total;
    bowlBar.value = total;

    if (total < 100) {
        catImage.src = "persu_sad.jpg";
        catImage.style.width = "50%";
        catImage.style.height = "400px";
        catImage.style.border = "5px solid black";
        message.innerHTML = "😿 Kitty is hungry!";
    }

    else if (total == 100) {
        catImage.src = "persu_eating.webp";
        catImage.style.width = "50%";
        catImage.style.height = "400px";
        catImage.style.border = "5px solid green";
        message.innerHTML = "😸 Kitty is eating happily!";
    }

    else {
        message.innerHTML = "⚠️ Bowl Overflow!";
        alert("Bowl Overflow!");
    }
}

fish.oninput = updateBowl;
milk.oninput = updateBowl;
catfood.oninput = updateBowl;

updateBowl();