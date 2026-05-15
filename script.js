window.onload = () => {

    const enterBtn = document.getElementById("enterBtn");

    const login = document.getElementById("login");

    const iosUI = document.getElementById("iosUI");

    enterBtn.addEventListener("click", () => {

        login.style.opacity = "0";

        login.style.pointerEvents = "none";

        iosUI.classList.add("show");

    });

};
