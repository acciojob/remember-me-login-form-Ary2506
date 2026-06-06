//your JS code here. If required.
const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Show existing user button if credentials exist
if (
  localStorage.getItem("username") &&
  localStorage.getItem("password")
) {
  existingBtn.style.display = "block";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const user = username.value;
  const pass = password.value;

  alert(`Logged in as ${user}`);

  if (checkbox.checked) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    existingBtn.style.display = "block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }
});

existingBtn.addEventListener("click", function () {
  const savedUser = localStorage.getItem("username");

  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});