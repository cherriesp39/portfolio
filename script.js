const lightSwitch = document.getElementById("lightson");
const mainContent = document.getElementById("maincontent");

lightSwitch.addEventListener("click", () => {
    mainContent.classList.toggle("lightmain");
})