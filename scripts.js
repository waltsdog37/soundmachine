let btn;
let btnList;
let sound;

function getButton () {
    btnList = document.querySelectorAll("button");
    btnList.forEach(function(btn) {
        btn.addEventListener("click", function() {
            let btnText = btn.innerText.toLowerCase();
            playSound(btnText);
        });
    });
}

function playSound(btnText) {
    sound = new Audio("sounds/" + btnText + ".wav");
    console.log(sound);
    sound.play();
}


getButton();