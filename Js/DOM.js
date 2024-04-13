import { deleted, edituser, postUser } from "./API.js";

let tbody = document.querySelector(".tbody");
let thead = document.querySelector(".thead");
let body = document.querySelector("body")
let cover=document.createElement("div");
body.append(cover);
cover.classList.add("cover");
let lightMode = document.querySelector(".lightModeBtn")
let darkMode = document.querySelector(".darkModeBtn")
let darkh1 = document.querySelector(".darkh1")
let selectDark = document.querySelector(".selectDark")
let selectDark1 = document.querySelector(".selectDark1")
let inputDark = document.querySelector(".inputDark")
let addDialog = document.querySelector(".addDialog")
let addBtn = document.querySelector(".addBtn")
let formAdd = document.querySelector(".formAdd")
let editDialog = document.querySelector(".editDialog")
let formEdit = document.querySelector(".formEdit")

function getData(data) {
    tbody.innerHTML=""
    data.forEach(el=>{
        let tr = document.createElement("tr")
        let tdNameAndSurname = document.createElement("td")
        let allUser = document.createElement("div")
        allUser.classList.add("allUser")
        let leftImgUser = document.createElement("div")
        let imgUser = document.createElement("img")
        imgUser.classList.add("imgUser")
        imgUser.src = el.img
        imgUser.style.width='80px'
        imgUser.style.height='80px'
        imgUser.style.borderRadius='50%'
        leftImgUser.append(imgUser)
        let rightImgUser = document.createElement("div")
        let divNameAndSurname = document.createElement("div")
        let nameAndSurname = document.createElement("p")
        nameAndSurname.innerHTML = `${el.surname} ${el.name}`
        nameAndSurname.classList.add("nameAndSurname")
        divNameAndSurname.append(nameAndSurname)
        let divEmail = document.createElement("div")
        let emailUser = document.createElement("p")
        emailUser.innerHTML = el.email
        emailUser.classList.add("emailUsers")
        divEmail.append(emailUser)
        rightImgUser.append(divNameAndSurname,divEmail)
        allUser.append(leftImgUser,rightImgUser)
        tdNameAndSurname.append(allUser)

        let tdCity = document.createElement("td")
        tdCity.innerHTML = el.city
        tdCity.classList.add("textTd")
        let tdActive = document.createElement("td")
        let activeBtn = document.createElement("button")
        activeBtn.innerHTML = el.active
        tdActive.append(activeBtn)
        if(el.active=="Inactive"){
            activeBtn.classList.add("inactive")
        }
        if(el.active=="Active"){
            activeBtn.classList.add("active")
        }

        let tdPhone = document.createElement("td")
        tdPhone.innerHTML=el.phone
        tdPhone.classList.add("textTd")
        let tdAction = document.createElement("td")
        tdAction.classList.add("more")
        tdAction.innerHTML = ". . ."

        let moreclick = document.createElement("div")

        let divDelete = document.createElement("div")
        divDelete.classList.add("editBtn")
        let deleteImg = document.createElement("img")
        deleteImg.src = "icons/delete.svg";
        let textDelete = document.createElement("p")
        textDelete.innerHTML = "Delete";
        textDelete.classList.add("textDelete")
        divDelete.append(deleteImg,textDelete)
        divDelete.onclick=()=>{
            deleted(el.id)
        }

        let divCheck = document.createElement("div")
        divCheck.classList.add("checkBtn")
        let check = document.createElement("input")
        check.type = "checkbox"
        check.checked = el.complited
        check.classList.add("checkbox")
        check.onclick=()=>{
            el.complited=!el.complited
            edituser(el.id,el)
        }
        if(el.complited==true){
            nameAndSurname.classList.add("names")
            activeBtn.classList.add("active")
            activeBtn.innerHTML = "Active"
        }
        let checkText = document.createElement("p")
        checkText.innerHTML = "Complited"
        checkText.classList.add("checkText")
        divCheck.append(check,checkText)

        let divEdit = document.createElement("div")
        divEdit.classList.add("editBtn")
        let editImg = document.createElement("img")
        editImg.src = "icons/edit.svg";
        let textEdit = document.createElement("p")
        textEdit.innerHTML = "Edit";
        divEdit.append(editImg,textEdit)
        divEdit.onclick = () => {
            editDialog.showModal();
            formEdit["editImg"].value = el.img;
            formEdit["editName"].value = el.name;
            formEdit["editSurname"].value = el.surname;
            formEdit["editEmail"].value = el.email;
            formEdit["editStatus"].value=el.active
            formEdit["editSelectCity"].value = el.city;
            formEdit["editPhone"].value = el.phone;
            formEdit.onsubmit = (e) => {
              e.preventDefault();
              let user = {
                img: formEdit["editImg"].value,
                name: formEdit["editName"].value,
                surname: formEdit["editSurname"].value,
                active: formEdit["editStatus"].value,
                city: formEdit["editSelectCity"].value,
                email: formEdit["editEmail"].value,
                phone: formEdit["editPhone"].value,
              };
              editDialog.close();
              edituser(el.id,user)
            };
          };
        moreclick.append(divEdit,divCheck,divDelete);
        moreclick.classList.add("none");
        tdAction.append(moreclick);
        tdAction.onclick=()=>{
            moreclick.classList.toggle("allMore");
        }

        tr.append(tdNameAndSurname,tdCity,tdActive,tdPhone,tdAction)
        tbody.append(tr)
    })
}

  darkMode.onclick=()=>{
    body.style.backgroundColor = "#121212"
    lightMode.style.backgroundColor = "#383737"
    darkh1.style.color = "white"
    selectDark.style.backgroundColor = "black"
    selectDark.style.color = "white"
    selectDark1.style.backgroundColor = "black"
    selectDark1.style.color = "white"
    inputDark.style.backgroundColor = "black"
    inputDark.style.color = "white"
    thead.classList.remove("thead");
    thead.classList.add("theadDark")
    tbody.style.backgroundColor = "black"
    tbody.style.color = "white"
    body.style.transition='1s'
    thead.style.transition='1s'
    tbody.style.transition='1s'
    selectDark.style.transition='1s'
    selectDark1.style.transition='1s'
    inputDark.style.transition='1s'
    darkh1.style.transition='1s'
}

lightMode.onclick=()=>{
    body.style.backgroundColor = "white"
    lightMode.style.backgroundColor = "#00000014"
    darkh1.style.color = "#343A40"
    selectDark.style.backgroundColor = "white"
    selectDark.style.color = "black"
    selectDark1.style.backgroundColor = "white"
    selectDark1.style.color = "black"
    inputDark.style.backgroundColor = "white"
    inputDark.style.color = "black"
    thead.classList.add("thead");
    thead.classList.remove("theadDark")
    tbody.style.backgroundColor = "#FBFBFB"
    tbody.style.color = "#40464C"
    body.style.transition='1s'
    thead.style.transition='1s'
    tbody.style.transition='1s'
    selectDark.style.transition='1s'
    selectDark1.style.transition='1s'
    inputDark.style.transition='1s'
    darkh1.style.transition='1s'
}

addBtn.onclick=()=>{
    addDialog.showModal()
}
formAdd.onsubmit=(e)=>{
    
    e.preventDefault()
    
    let user={
        img : formAdd["addImg"].value,
        name :formAdd["addName"].value,
        surname : formAdd["addSurname"].value,
        email : formAdd["addEmail"].value,
        active: formAdd["selectStatus"].value,
        city : formAdd["selectCity"].value,
        phone : formAdd["addPhone"].value
    }
    postUser(user)
    formAdd["addImg"].value=""
    formAdd["addName"].value=""
    formAdd["addSurname"].value=""
    formAdd["addEmail"].value=""
    formAdd["selectCity"].value=""
    formAdd["addPhone"].value=""
    addDialog.close()
}
  

let cancelDialog = document.querySelector(".cancelBtn")
cancelDialog.onclick=()=>{
    addDialog.close()
}

let cancelDialog1 = document.querySelector(".cancelBtn1")
cancelDialog1.onclick=()=>{
    addDialog.close()
}

let cancelDialogEdit = document.querySelector(".cancelBtnEdit")
cancelDialogEdit.onclick=()=>{
    editDialog.close()
}

let cancelDialogEdits = document.querySelector(".cancelBtnEdits")
cancelDialogEdits.onclick=()=>{
    editDialog.close()
}



export default getData
