
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

if(confirmBtn){
    confirmBtn.addEventListener("click", () => {
    front.classList.toggle("d-none")
    ajoutPopup.classList.toggle("d-none")

})
}



if(blur){
    blur.addEventListener("click", () => {
    front.classList.toggle("d-none")
    ajoutPopup.classList.toggle("d-none")

})

}

document.addEventListener("keydown", (e) => {
    if(e.key == "Escape"){
        front.classList.toggle("d-none")
        ajoutPopup.classList.toggle("d-none")
        console.log("escape")

    }
})

if(addBtn){
    addBtn.addEventListener("click", () => {
    front.classList.toggle("d-none")
    ajoutPopup.classList.toggle("d-none")
    console.log("button click")

})

}




const selectAll = document.querySelector('#selectAll');
const checkboxes = document.querySelectorAll('#defaultCheck1');

if(selectAll){
    selectAll.addEventListener('click', function() {
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = selectAll.checked;
  }
});
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('click', function() {
    let allChecked = true;
    for (let j = 0; j < checkboxes.length; j++) {
      if (!checkboxes[j].checked) {
        allChecked = false;
        break;
      }
    }
    selectAll.checked = allChecked;
  });
}
}



