const sectionSwipes = document.querySelector(".swipes1")
const sectionSwipes2 = document.querySelector(".swipes2")
const noMatchBtn = document.querySelector(".no-match-btn")

noMatchBtn.addEventListener("click", () => {
    sectionSwipes.style.display = "none"
    sectionSwipes2.style.display = "block"
})