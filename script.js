
const darkswitch = document.querySelector(".darkswitch")
const addBtn = document.querySelector(".add-btn")
const front = document.querySelector(".front")
const ajoutPopup = document.querySelector(".ajout-popup")
const blur = document.querySelector(".blur")
const confirmBtn = document.querySelector(".conrimer-ajout")


darkswitch.addEventListener("click",()=>{
        darkswitch.classList.toggle("lightswitch")
        document.body.classList.toggle("dark")

})



confirmBtn.addEventListener("click", () => {
    front.classList.toggle("d-none")
    ajoutPopup.classList.toggle("d-none")

})


blur.addEventListener("click", () => {
    front.classList.toggle("d-none")
    ajoutPopup.classList.toggle("d-none")

})

document.addEventListener("keydown", (e) => {
    if(e.key == "Escape"){
        front.classList.toggle("d-none")
        ajoutPopup.classList.toggle("d-none")
        console.log("escape")

    }
})

addBtn.addEventListener("click", () => {
    front.classList.toggle("d-none")
    ajoutPopup.classList.toggle("d-none")
    console.log("button click")

})




