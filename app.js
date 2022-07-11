// selecting all the item that we need
const email = document.querySelector("#email"),
  subject = document.querySelector("#subject"),
  deletBtn = document.querySelector("#rest"),
  form = document.querySelector("#form"),
  sendBtn = document.querySelector("#send"),
  discription = document.querySelector("#discription");

// add event listner to form
document.addEventListener("DOMContentLoaded", startApp);

form.addEventListener("submit", emaiVldidate);
sendBtn.addEventListener("click", sendEmail);
deletBtn.addEventListener("click", restEmail);

email.addEventListener("blur", validtionemail);
subject.addEventListener("blur", validtionemail);
discription.addEventListener("blur", validtionemail);

function startApp() {
  // sendBtn.disabled = true;
}
function validtionemail() {
  validtionlenght(this);
  if (this.type == "email") {
    emaiVldidate(this);
  }
  if (erros.length > 0) {
  }
}
function validtionlenght(fild) {
  if (fild.value.length > 0) {
    fild.style.borderBottomColor = "green";
  } else {
    fild.style.borderBottomColor = "red";
  }
}

function emaiVldidate(email) {
  // const message = email.value;
  // if (message.indexOf("@") !== -1) {
  //   email.style.borderBottomColor = "green";
  // } else {
  //   email.style.borderBottomColor = "red";
  // }
}

function sendEmail(e) {
  // e.preventDefault();
}
function restEmail(e) {
  // e.preventDefault();
  form.reset();
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let erros = [];
  clearError()
  if (email.value.length == 0 || email.indexOf("@") !== -1){
    erros.push('please add correct email')
  }
  if (subject.value.length == 0) {
    erros.push("subject must be at lest 6 characters");
  }
  if (discription.value.length == 0) {
    erros.push("please fill the discrption");
  }
  console.log(erros);
  if (erros.length > 0) {
    e.preventDefault();
    renderError(erros);
  }
});
function renderError(message) {
  message.forEach((erros) => {
    const userError = document.createElement("li");
    userError.innerText = erros;
    const errorlist = document.querySelector("#error-list");
    errorlist.appendChild(userError);
  });
  errorList.classList.add("show");
}
function clearError(){
  const errorlist = document.querySelector("#error-list");
  errorlist.innerHTML=""

}