const sectionPhone = document.querySelector(".phone-number")
const btnTel = document.querySelector(".btn-tel")

btnTel.addEventListener("click", () => {
    const titleSignUp = document.querySelector(".sign-up-page .title")
    const btnsSignUp = document.querySelector(".sign-up-page .btns")
    const infoSignUp = document.querySelector(".sign-up-page .btns p")

    sectionPhone.style.display = "flex"
    titleSignUp.style.display = "none"
    btnsSignUp.style.display = "none"
    infoSignUp.style.display = "none"
})