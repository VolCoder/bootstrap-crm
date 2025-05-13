import { eyeIcon, passwordInput, toggleBtn } from "../utils/elements.js";

export function index() {

    toggleBtn.addEventListener("click", () => {
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";
        eyeIcon.classList.toggle("fa-lock");
        eyeIcon.classList.toggle("fa-lock-open");
    });


}