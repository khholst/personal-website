let checkbox = document.getElementById("leave-feedback");

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        document.getElementById("ux-text").style = "display: inline";
        document.getElementById("design-text").style = "display: inline";
        document.getElementById("design-div").style = "display: inline";
        document.getElementById("ux-div").style = "display: inline";
    } else {
        document.getElementById("ux-text").style = "display: none";
        document.getElementById("design-text").style = "display: none";
        document.getElementById("ux-div").style = "display: none";
        document.getElementById("design-div").style = "display: none";
    }
});