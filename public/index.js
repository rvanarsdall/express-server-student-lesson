const fullName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.querySelector("form");

form.onsubmit = handleSubmit;

async function handleSubmit(e) {
  e.preventDefault();
}

console.log("It worked");
