const btnDarkMode = document.getElementById("btn-dark-mode");
const themeSystem = localStorage.getItem("themeSystem") || "dark";

btnDarkMode.addEventListener("click", () => {
    let oldTheme = localStorage.getItem("themeSystem") || "dark";
    let newTheme = oldTheme == "ligth" ? "dark" : "ligth";

    localStorage.setItem("themeSystem", newTheme);
    defineCurrentTheme(newTheme);
});

function defineCurrentTheme(theme) {
    const darkimg = "<img src='icons/moon.png'>"
    const ligthimg = "<img src='icons/sun.png'>"


    document.documentElement.setAttribute("data-theme", theme);
    if (theme == "ligth") {
        btnDarkMode.innerHTML = darkimg
        btnDarkMode.classList.remove("icon-dark");

    } else {
        btnDarkMode.innerHTML = ligthimg
        btnDarkMode.classList.add("icon-dark");
    }
};


defineCurrentTheme(themeSystem);


let ul = document.querySelector("nav ul");
let menuBtn = document.querySelector(".menu-btn img");

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    } else {
        ul.classList.add('open');
    }
};

menuBtn.onclick = () => menuShow();
