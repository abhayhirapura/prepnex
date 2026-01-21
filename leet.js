document.addEventListener("DOMContentLoaded", function () {

    const loginBtn = document.querySelector(".login-btn");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorBox = document.getElementById("login-error");

    loginBtn.addEventListener("click", function () {

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        errorBox.style.display = "none";
        errorBox.innerText = "";

        if (username === "" || password === "") {
            showError("Please fill all the fields");
            return;
        }

        if (username.includes("@") && !isValidEmail(username)) {
            showError("Please enter a valid email address");
            return;
        }

        alert("Login successful ✅");


        alert("Login successful ✅");
    });

    usernameInput.addEventListener("keydown", handleEnter);
    passwordInput.addEventListener("keydown", handleEnter);

    function handleEnter(e) {
        if (e.key === "Enter") {
            loginBtn.click();
        }
    }

    function showError(msg) {
        errorBox.innerText = msg;
        errorBox.style.display = "block";

        if (usernameInput.value.trim() === "") {
            usernameInput.focus();
        } else {
            passwordInput.focus();
        }
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
