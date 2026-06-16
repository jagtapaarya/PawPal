let catName = prompt(" Enter your cat's name:");

localStorage.setItem("catName", catName);

document.getElementById("welcome").innerHTML =" Welcome " + catName + "!";