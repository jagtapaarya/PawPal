let dogName = prompt("🐶 Enter your dog's name:");

localStorage.setItem("dogName", dogName);

document.getElementById("welcome").innerHTML =
"🐶 Welcome " + dogName + "!";