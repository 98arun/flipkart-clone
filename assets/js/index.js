console.log("hey");
let loginBtn = document.getElementById("sign-up");
let closeBtn = document.getElementById("closeBtn");
let popup = document.getElementById("pop-up");
let newUser = document.getElementById("signup-link");
let existingUser = document.getElementById("sign-in-btn");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault(e);
  popup.style.display = "flex";
});
closeBtn.addEventListener("click", (e) => {
  e.preventDefault(e);
  popup.style.display = "none";
});
let hide = document.getElementsByClassName("hide");
let hidden = document.getElementsByClassName("hidden");
newUser.addEventListener("click", (e) => {
  e.preventDefault(e);

  hidden[0].style.display = "none";
  hidden[1].style.display = "none";
  hidden[2].style.display = "none";
  hidden[3].style.display = "none";
  hidden[4].style.display = "none";
  hidden[5].style.display = "none";
  hidden[6].style.display = "none";
  hidden[7].style.display = "none";
  hidden[8].style.display = "none";
  hide[0].style.display = "block";
  hide[1].style.display = "block";
  hide[2].style.display = "block";
  hide[3].style.display = "block";
});
existingUser.addEventListener("click", (e) => {
  e.preventDefault(e);
  hidden[0].style.display = "block";
  hidden[1].style.display = "block";
  hidden[2].style.display = "block";
  hidden[3].style.display = "block";
  hidden[4].style.display = "block";
  hidden[5].style.display = "block";
  hidden[6].style.display = "block";
  hidden[7].style.display = "block";
  hidden[8].style.display = "block";
  hide[0].style.display = "none";
  hide[1].style.display = "none";
  hide[2].style.display = "none";
  hide[3].style.display = "none";
});
