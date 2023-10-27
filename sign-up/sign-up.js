const sectionPhone = document.querySelector(".phone-number")
const sectionEmail = document.querySelector(".email-form")
const sectionName = document.querySelector(".name-form")
const sectionBirthdate = document.querySelector(".birthdate-form")
const btnTel = document.querySelector(".btn-tel")
const btnEmail = document.querySelector(".btn-email")
const phoneNextBtn = document.querySelector(".next-phone")
const emailNextBtn = document.querySelector(".next-email")
const nameNextBtn = document.querySelector(".next-name")

btnTel.addEventListener("click", () => {
    const titleSignUp = document.querySelector(".sign-up-page .title")
    const btnsSignUp = document.querySelector(".sign-up-page .btns")
    const infoSignUp = document.querySelector(".sign-up-page .btns p")

    sectionPhone.style.display = "flex"
    titleSignUp.style.display = "none"
    btnsSignUp.style.display = "none"
    infoSignUp.style.display = "none"
})

btnEmail.addEventListener("click", () => {
    const titleSignUp = document.querySelector(".sign-up-page .title")
    const btnsSignUp = document.querySelector(".sign-up-page .btns")
    const infoSignUp = document.querySelector(".sign-up-page .btns p")

    sectionEmail.style.display = "flex"
    titleSignUp.style.display = "none"
    btnsSignUp.style.display = "none"
    infoSignUp.style.display = "none"
})

phoneNextBtn.addEventListener("click", (e) => {
    e.preventDefault()
    sectionPhone.style.display = "none"
    sectionName.style.display = "flex"
})

emailNextBtn.addEventListener("click", (e) => {
    e.preventDefault()
    sectionEmail.style.display = "none"
    sectionName.style.display = "flex"
})

nameNextBtn.addEventListener("click", (e) => {
    e.preventDefault()
    sectionName.style.display = "none"
    sectionBirthdate.style.display = "flex"
})