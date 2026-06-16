let dogName = localStorage.getItem("dogName");

document.getElementById("sleepText").innerHTML =
"😴 " + dogName + " is Sleeping...";

document.getElementById("msg").innerHTML =
"🌙 " + dogName +
" is having sweet dreams! 💤";

let sleep = 10;

let energy = 10;

let meter = [
"█░░░░░░░░░",
"██░░░░░░░░",
"███░░░░░░░",
"████░░░░░░",
"█████░░░░░",
"██████░░░░",
"███████░░░",
"████████░░",
"█████████░",
"██████████"
];

let count = 0;

let timer = setInterval(function(){

    sleep--;

    document.getElementById("timer").innerHTML =
    "Wake up in " + sleep + " seconds";

    if(count < 10){

        document.getElementById("energy").innerHTML =
        "Energy Restored: " +
        meter[count] + " " +
        energy + "%";

        energy += 10;
        count++;
    }

    if(sleep <= 0){

    clearInterval(timer);

    document.getElementById("timer").innerHTML =
    "🐶 " + dogName + " is Fully Rested!";

    document.getElementById("energy").innerHTML =
    "Energy Restored: ██████████ 100%";

    document.getElementById("sleepText").innerHTML =
    "😊 " + dogName + " is Awake and Happy!";

    document.getElementById("msg").innerHTML =
    "🎉 Ready to play again!";

    document.getElementById("dogImage").src = "pup_happy.jpg"; 
}

},2000);