let cssChange = document.getElementById("css-change");

cssChange.addEventListener("click", ()=> {
    if (cssChange.textContent === "Switch to larger text and bigger contrast") {
        document.getElementById("style").setAttribute("href", "styles/styles-alt.css");
        cssChange.textContent = "Switch to normal style";
    } else {
        document.getElementById("style").setAttribute("href", "styles/styles.css");
        cssChange.textContent = "Switch to larger text and bigger contrast";
    }
});