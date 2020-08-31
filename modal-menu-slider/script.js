const toggleButton = document.getElementById("toggle");
const bodyElement = document.querySelector("body");
const signUp = document.getElementById("open");
const login = document.getElementById("modal");

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("show-nav");
});

signUp.addEventListener("click", () => {
  login.classList.add("show-modal");
});

login.addEventListener("click", (e) => {
  if ((e.target.id = "close")) {
    login.classList.remove("show-modal");
  }
});
