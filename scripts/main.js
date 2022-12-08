import { passwordLengthCheck } from "./forms.js";
const password = document.querySelector("#password");
let criteria_text = document.querySelector("#password_criteria");
password.addEventListener("keyup", () => {
    let result = passwordLengthCheck(password.value)
    if (result) {
        criteria_text.style.color = "green";
        criteria_text.innerHTML = "Your password fits the requirements";
    } else {
        criteria_text.style.color = "red";
        criteria_text.innerHTML = "Password should be at least 10 characters and can't contain any spaces";
    }
})