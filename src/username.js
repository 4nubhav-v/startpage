if (!localStorage.getItem("user")) {
  let username = prompt("Enter your name ");
  localStorage.setItem("user", username);
}

document.getElementById("username").innerHTML = localStorage.getItem("user");
