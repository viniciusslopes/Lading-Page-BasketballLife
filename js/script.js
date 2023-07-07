const btnDarkMode = document.getElementById("btn-dark-mode");
const themeSystem = localStorage.getItem("themeSystem") || "dark";

btnDarkMode.addEventListener("click", () => {
    let oldTheme = localStorage.getItem("themeSystem") || "dark";
    let newTheme = oldTheme == "light" ? "dark" : "light";

    localStorage.setItem("themeSystem", newTheme);
    defineCurrentTheme(newTheme);
});

function defineCurrentTheme(theme) {
    const darkimg = "<img src='icons/moon.png'>"
    const ligthimg = "<img src='icons/sun.png'>"


    document.documentElement.setAttribute("data-theme", theme);
    if (theme == "light") {
        btnDarkMode.innerHTML = darkimg
        btnDarkMode.classList.remove("icon-dark");

    } else {
        btnDarkMode.innerHTML = ligthimg
        btnDarkMode.classList.add("icon-dark");
    }
};


defineCurrentTheme(themeSystem);


const ul = document.querySelector("nav ul");
const menuBtn = document.querySelector(".menu-btn img");

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    } else {
        ul.classList.add('open');
    }
};

menuBtn.onclick = () => menuShow();


const btnForm = document.getElementById("btn-submit");
const form = document.querySelector("form");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const modal = document.getElementById("content-pop-up");


const showModal = () => {
    const closeModal = document.getElementById("close-modal");

    modal.style.display = "flex";

    closeModal.onclick = () => {
        modal.style.display = "none";
        userName.value = "";
        userEmail.value = "";
        userName.disabled = false;
        userEmail.disabled = false;
    };

};

form.onsubmit = (event) => {
    event.preventDefault();
};


btnForm.onclick = () => {
    checkInputName();
    checkInputEmail();

    if (checkInputName() === true) {
        hiderMessageError(userName);
    };
    if (checkInputEmail() === true) {
        hiderMessageError(userEmail);
    };
    if (checkInputEmail() && checkInputName() === true) {
        validate();
    };
};


const checkInputName = () => {
    const userNameValue = userName.value;

    if (userNameValue === "") {
        showMessageError(userName, "Preencha o campo acima com seu nome");
        return false;
    };
    return true;
};


const checkInputEmail = () => {
    const userEmailValue = userEmail.value;

    if (userEmailValue === "") {
        showMessageError(userEmail, "Preencha o campo acima com seu email")
        return false
    }
    if (!maskEmail(userEmailValue)) {
        showMessageError(userEmail, "Informe um email válido");
        return false
    }
    return true;
};


const showMessageError = (input, text) => {

    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("p");

    textMessage.innerText = text;
    formItem.className = "user-form-content error";
    textMessage.style.display = "flex";

    return textMessage;
};


const hiderMessageError = (input) => {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("p");

    formItem.className = "user-form-content";
    textMessage.style.display = "none";

    return textMessage;
};


function validate() {
    userName.disabled = true;
    userEmail.disabled = true;
    showModal();

};


const maskEmail = (email) => {
    let referencia = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return referencia.test(email);
};
