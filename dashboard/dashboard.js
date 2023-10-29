const sectionSwipes = document.querySelector(".swipes1")
const sectionSwipes2 = document.querySelector(".swipes2")
const noMatchBtn = document.querySelector(".no-match-btn")

noMatchBtn.addEventListener("click", () => {
    sectionSwipes.style.display = "none"
    sectionSwipes2.style.display = "block"
})

const clickItem = document.querySelectorAll(".clic")
const dashboard = document.querySelector(".dashboard")

clickItem.forEach(item => {
    item.addEventListener("click", () => {
        const msgClic = document.createElement("form")
        const msg = document.createElement("textarea")
        const submitBtn = document.createElement("button")
        const closeMsg = document.createElement("img")

        console.log(item)

        msgClic.classList.add("msg-clic")
        msg.classList.add("msg")
        submitBtn.classList.add("msg-submit")

        closeMsg.setAttribute("src", "../assets/no-match.png")
        msg.setAttribute("placeholder", "Engage la conversation en décrivant ce qui te vient en tête avec cet élément.")

        submitBtn.textContent = "Envoyer"

        dashboard.appendChild(msgClic)
        msgClic.appendChild(msg)
        msgClic.appendChild(submitBtn)
        msgClic.appendChild(closeMsg)  

        closeMsg.addEventListener("click", () => {
            msgClic.style.display = "none"
        })

        submitBtn.addEventListener("click", (e) => {
            e.preventDefault()
            msgClic.style.display = "none"
        })
    })
})