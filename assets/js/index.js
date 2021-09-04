console.log("hey");
let loginbtn = document.getElementById("sign-up");
let closebtn = document.getElementById("closeBtn");
let popup = document.getElementById("pop-up");
let newUser = document.getElementById("signup-link");
let existingUser = document.getElementById("sign-in-btn");

loginbtn.addEventListener("click", (e) => {
  e.preventDefault(e);
  popup.style.display = "flex";
});
closebtn.addEventListener("click", (e) => {
  e.preventDefault(e);
  popup.style.display = "none";
});
let hide = document.getElementsByClassName("hide");
let hidden = document.getElementsByClassName("hidden");
newUser.addEventListener("click", (e) => {
  e.preventDefault(e);
  console.log("clicked");
  hidden.style.display = "none";
  hide.style.display = "block";
});
existingUser.addEventListener("click", (e) => {
  e.preventDefault(e);
  hidden.style.display = "block";
  hide.style.display = "none";
});

console.log(hide);
console.log(hidden);
