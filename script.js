
const addBtn = document.querySelector(".add-btn")
const front = document.querySelector(".front")
const ajoutPopup = document.querySelector(".ajout-popup")
const ajoutPopupCours = document.querySelector(".ajout-cours")
const ajoutPopupFormation = document.querySelector(".ajout-formation")
const blur = document.querySelector(".blur")
const confirmBtn = document.querySelector(".conrimer-ajout")
const studentsTable = document.querySelectorAll(".students tr")
const rightSide = document.querySelector(".right-side")
const leftSide = document.querySelector(".left-side")
const modifyBtn = document.querySelector(".modify-student")
const studentInfo = document.querySelector(".student-info")
const modifyForm = document.querySelector(".modify-student-form")
const confirmModifyBtn = document.querySelector(".conrimer-modifier")
const navEl = document.querySelector(".sections")
const selectAll = document.querySelector('#selectAll');
const checkboxes = document.querySelectorAll('#defaultCheck1');
const formationBtns =  document.querySelectorAll(".formation-btn")
const closeStdBtn =  document.querySelector(".close-student")
const addBtnCours =  document.querySelector(".add-btn-cours")
const addBtnFormation =  document.querySelector(".add-btn-formation")

const studentState = {
    student: true,
    state : "general",
}

/// add front to vue
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
if(addBtnCours){
    addBtnCours.addEventListener("click", () => {
        front.classList.remove("d-none")
        ajoutPopupCours.classList.remove("d-none")
        
    })
}
if(addBtnFormation){
    addBtnFormation.addEventListener("click", () => {
        front.classList.remove("d-none")
        ajoutPopupFormation.classList.remove("d-none")
        
    })
}

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






// disable front when click on blur or esc key or submit
const disablefront = () => {
    ajoutPopup?.classList.add("d-none")
    ajoutPopupCours?.classList.add("d-none")
    ajoutPopupFormation?.classList.add("d-none")
    front?.classList.add("d-none")
}
if(blur){
    blur.addEventListener("click", () => {
    disablefront()
})
}
document.addEventListener("keydown", (e) => {
    if(e.key == "Escape"){
        disablefront()

    }
})
if(confirmBtn){
    confirmBtn.addEventListener("click", () => {
    disablefront()
})
}






//select all
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

if(closeStdBtn){
   closeStdBtn.addEventListener("click",() => {
    studentState.student = false
    updateState()
}) 
}

// // choose formation to focus on
// formationBtns.forEach(btn => {
//     btn.addEventListener("click",() => {
//         if(btn.getAttribute("aria-pressed")=="true"){
//             formationBtns.forEach(otherBtn => {
//                 otherBtn.setAttribute("aria-pressed","false")
//                 otherBtn.classList.remove("active")
//             });
//             btn.setAttribute("aria-pressed","false")
//             btn.classList.add("active")
//             studentState.state ="specific"
//         }
//         else{
//             studentState.state ="general"
//         }
//         updateState()
//     })
// });


/// student state
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

// choose student to focus on
studentsTable.forEach((student) => {
    student.addEventListener("click",() =>{
        studentState.student = true
        updateState()
    })
})


// /// sidebar hover effect
// navEl.addEventListener("mouseover", (e) =>{
          
//     if(e.target.classList.contains("section")){

//      navEl.parentElement.querySelector(".logo")?.classList.add("half-opacity")
//      const elmnts = [...navEl.children]
//      elmnts.forEach(element => {
//       element.classList.add("half-opacity")
//      });
//     }
//     e.target.parentElement.classList.remove("half-opacity")
//   })
  
//   navEl.addEventListener("mouseout",(e)=>{
//     if(e.target.classList.contains("sections")){
//         navEl.parentElement.querySelector(".logo")?.classList.remove("half-opacity")
//         const elmnts = [...navEl.children]
//         elmnts.forEach(element => {
//          element.classList.remove("half-opacity")
//         });
//        }
       
//   })