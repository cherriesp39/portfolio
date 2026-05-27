const lightSwitch = document.getElementById("lightson");
const sunMoon = document.getElementById("lightonimg");
const mainContent = document.getElementById("maincontent");
const flowers = document.getElementById("headerimg");
var loadScreen = document.getElementById("loading");
let night = true;

window.addEventListener("load", function() {
    loadScreen.style.display = "none"
 }
)
lightSwitch.addEventListener("click", () => {
    mainContent.classList.toggle("lightmain")
    }
)
lightSwitch.addEventListener("click", function(){
    sunMoon.src = "./images/icons/moon.png",
    night = !night;
    if (night) {
        sunMoon.src = "./images/icons/sun.png"
    } else {
        sunMoon.src = "./images/icons/moon.png"
    }
});
