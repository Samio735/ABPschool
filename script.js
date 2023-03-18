console.log("hello")

const darkswitch = document.querySelector(".darkswitch")

darkswitch.addEventListener("click",()=>{
        darkswitch.classList.toggle("lightswitch")

})

const addBtn = document.querySelector(".add-btn")
const blur = document.querySelector(".blur")


blur.addEventListener("click", () => {
    blur.setAttribute("class","blur-disabled")
})

document.addEventListener("keydown", (e) => {
    if(e.key == "Escape"){
        blur.setAttribute("class","blur-disabled")

    }
})

addBtn.addEventListener("click", () => {
    blur.setAttribute("class","blur blur-active")
})




