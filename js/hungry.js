let meat = document.getElementById("meat");
let fish = document.getElementById("fish");
let pedigree = document.getElementById("pedigree");

let dogImage = document.getElementById("dogImage");
let capacity = document.getElementById("capacity");

function updateBowl() {

    let total =
        Number(meat.value) +
        Number(fish.value) +
        Number(pedigree.value);

    capacity.textContent = total;

    if (total < 100) {
        dogImage.src = "../html/pup_sad.webp";
        dogImage.style.height="400px";
        dogImage.style.border = "5px solid black";
    }
    else if (total == 100) {
        dogImage.src ="../html/pup_eating.jpeg";
        dogImage.style.width="70%";
        dogImage.style.height="400px";
        dogImage.style.border = "5px solid black";
    }
    else {
        alert("Bowl Overflow!");
    }
}

meat.oninput = updateBowl;
fish.oninput = updateBowl;
pedigree.oninput = updateBowl;

updateBowl();