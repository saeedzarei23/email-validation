// selecting all the item that we need
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const deletBtn = document.querySelector("#rest");
const form = document.querySelector("#form");
const sendBtn = document.querySelector("#send");
let erros = [];
// add event listner to form
form.addEventListener("submit", emaiVldidate);
sendBtn.addEventListener("click", sendEmail);
deletBtn.addEventListener("click", restEmail);

function emaiVldidate(email) {
  const mm = document.querySelector("#email");
  const message = email.value;
  if (message.indexOf("@") !== -1) {

}}

function sendEmail(e) {
  e.preventDefault();
}
function restEmail(e) {
  e.preventDefault();
  form.reset();
}
