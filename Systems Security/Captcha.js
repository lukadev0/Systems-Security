const captchaTextBox = document.querySelector(".captch_box");
const refreshButton = document.querySelector(".refresh_button");
let captchaText = null;

const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomStringArray = randomString.split("");
    const changeString = randomStringArray.map((char) => (Math.random() > 0.5 ? char : char.toUpperCase()));
    captchaText = changeString.join(" ");
    captchaTextBox.value = captchaText;
    console.log(randomString);
};

const refreshBtnClick = () => {
    generateCaptcha();
    captchaInputBox.value = "";
    captchaKeyUpValidate();
};

refreshButton.addEventListener("click", refreshBtnClick);

generateCaptcha();

document.addEventListener("DOMContentLoaded", function () {
    const captchaInput = document.querySelector(".captch_input");
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (captchaInput.value.trim() === captchaText.replace(/\s/g, "")) {
            this.submit();
        } else {
            alert("Captcha non corretto. Riprova.");
            location.reload();
        }
    });
});
