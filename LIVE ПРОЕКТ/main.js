let switchMode = document.getElementById('switchMode');

switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if (theme.getAttribute('href') == "index.css") {
        theme.href = "black-mod.css";
    } else {
        theme.href = "index.css";
    }


}