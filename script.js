const pwd = document.querySelector("#pwd");
const cpwd = document.querySelector("#cpwd");
const btn = document.querySelector("button");
const form = document.querySelector(".formContainer");
const error = document.createElement("div");
error.classList.add("notmatch")
form.appendChild(error);

cpwd.addEventListener("input", () => {
    if(pwd.value !== cpwd.value){
        cpwd.classList.add("error");
        btn.disabled=true;
        error.textContent = "Passwords do not match";
    }
    else{
        cpwd.classList.remove("error");
        btn.disabled=false;
        error.textContent = "";
    }
})
pwd.addEventListener("input", () => {
    if(pwd.value !== cpwd.value){
        cpwd.classList.add("error");
        btn.disabled=true;
        error.textContent = "Passwords do not match";
    }
    else{
        cpwd.classList.remove("error");
        btn.disabled=false;
        error.textContent = "";
    }
})