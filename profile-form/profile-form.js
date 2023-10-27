const nextBtn = document.querySelector(".next-header")
const header = document.querySelector(".profile-form-page header")
const headerBtn = document.querySelector(".profile-form-page .btn")
const sectionRelationType = document.querySelector(".relation-type")

nextBtn.addEventListener("click", () => {
    header.style.display = "none"
    headerBtn.style.display = "none"
    sectionRelationType.style.display = "flex"
})

const checkInput = document.querySelectorAll(".check-input")
const checkbox = document.querySelectorAll(".checkbox")



checkInput.forEach(input => {
    input.addEventListener("click", () => {
        if (input.checked == true) {
            input.parentNode.style.background = "#ffffff57"
        }
        else {
            input.parentNode.style.background = "initial"
        }
    })
    console.log(input.parentNode)
})
