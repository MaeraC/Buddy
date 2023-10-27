const nextBtn = document.querySelector(".next-header")
const header = document.querySelector(".profile-form-page header")
const headerBtn = document.querySelector(".profile-form-page .btn")
const sectionRelationType = document.querySelector(".relation-type")

nextBtn.addEventListener("click", () => {
    header.style.display = "none"
    headerBtn.style.display = "none"
    sectionRelationType.style.display = "flex"
})

const checkInput = document.querySelector(".check-input")
const checkbox = document.querySelector(".checkbox")

checkInput.addEventListener("click", () => {
    if (checkInput.checked == true) {
        console.log("c'est checked")
        checkbox.style.background = "white"
    }
    else {
        console.log("'est pas checked")
    }
})