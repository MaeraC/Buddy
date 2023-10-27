const nextBtn = document.querySelector(".next-header")
const header = document.querySelector(".profile-form-page header")
const headerBtn = document.querySelector(".profile-form-page .btn")
const sectionRelationType = document.querySelector(".relation-type")
const sectionAstro = document.querySelector(".astro")
const sectionInterest = document.querySelector(".interest")
const nextRelationType = document.querySelector(".next-relation-type")
const nextAstro = document.querySelector(".next-astro")

nextBtn.addEventListener("click", () => {
    header.style.display = "none"
    headerBtn.style.display = "none"
    sectionRelationType.style.display = "flex"
})

nextRelationType.addEventListener("click", (e) => {
    e.preventDefault()
    sectionRelationType.style.display = "none"
    sectionAstro.style.display = "block"
})

nextAstro.addEventListener("click", (e) => {
    e.preventDefault()
    sectionAstro.style.display = "none"
    sectionInterest.style.display = "block"
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
})
