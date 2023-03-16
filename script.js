console.log("hello")

const darkswitch = document.querySelector(".darkswitch")

darkswitch.addEventListener("click",()=>{
    if(darkswitch.getAttribute("class") === "d-flex w-25 darkswitch"){
        darkswitch.setAttribute("class","d-flex w-25 lightswitch ")
    }
    else{
            darkswitch.setAttribute("class","d-flex w-25 darkswitch")

    }
})

const addBtn = document.querySelector(".add-btn")
const blur = document.querySelector(".blur")

blur.addEventListener("click", () => {
    blur.setAttribute("class","blur-disabled")
})


addBtn.addEventListener("click", () => {
    blur.setAttribute("class","blur blur-active")
})




