import { passwordLengthCheck } from "./forms.js";
const password = document.querySelector("#password");
let criteria_text = document.querySelector("#password_criteria");
password.addEventListener("keyup", () => {
    let result = passwordLengthCheck(password.value)
    if (result) {
        criteria_text.style.color = "green";
    } else {
        criteria_text.style.color = "red";
    }
})