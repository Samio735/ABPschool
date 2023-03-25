
const addBtn = document.querySelector(".add-btn")
const front = document.querySelector(".front")
const ajoutPopup = document.querySelector(".ajout-popup")
const blur = document.querySelector(".blur")
const confirmBtn = document.querySelector(".conrimer-ajout")
const studentState = {
    student: true,
    state : "general",
    formation : "none"
}
const studentsTable = document.querySelectorAll(".students tr")
const rightSide = document.querySelector(".right-side")
const leftSide = document.querySelector(".left-side")
const modifyBtn = document.querySelector(".modify-student")
const studentInfo = document.querySelector(".student-info")
const modifyForm = document.querySelector(".modify-student-form")
const confirmModifyBtn = document.querySelector(".conrimer-modifier")

if(confirmModifyBtn){
    confirmModifyBtn.addEventListener("click", () => {
    studentInfo.classList.toggle("d-none")
    modifyForm.classList.toggle("d-none")
    })
}
if(modifyBtn){
    modifyBtn.addEventListener("click" ,() => {
    studentInfo.classList.toggle("d-none")
    modifyForm.classList.toggle("d-none")
})
}



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
    if(studentState.state == "specefic" && studentState.student){

    }
    else{
        ajoutPopup.classList.toggle("d-none")
    }

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



const formationBtns =  document.querySelectorAll(".formation-btn")
const closeStdBtn =  document.querySelector(".close-student")

closeStdBtn.addEventListener("click",() => {
    studentState.student = false
    updateState()
})

formationBtns.forEach(btn => {
    btn.addEventListener("click",() => {
        if(btn.getAttribute("aria-pressed")=="true"){
            formationBtns.forEach(otherBtn => {
                otherBtn.setAttribute("aria-pressed","false")
                otherBtn.classList.remove("active")
            });
            btn.setAttribute("aria-pressed","false")
            btn.classList.add("active")
            studentState.state ="specific"
        }
        else{
            studentState.state ="general"
        }
        updateState()
    })
});



const updateState = function () {
    if(studentState.student == true){
        rightSide.classList.remove("d-none")
        leftSide.classList.add("d-none")
        document.body.classList.add("student")
        if (studentState.state == "general"){
            document.body.classList.add("general")
            document.body.classList.remove("specefic")
            
        }
        else{
            document.body.classList.remove("general")
            document.body.classList.add("specefic")
    
        }
    }
    else{
        document.body.classList.remove("student")
        rightSide.classList.add("d-none")
        leftSide.classList.remove("d-none")

    }
    
}
console.log(studentsTable)

studentsTable.forEach((student) => {
    student.addEventListener("click",() =>{
        studentState.student = true
        updateState()
    })
})