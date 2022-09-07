const fullName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.querySelector("form");

form.onsubmit = handleSubmit;

async function handleSubmit(e) {
  e.preventDefault();
  const url = "http://localhost:4000/test/test";
  const data = JSON.stringify({
    fullName: fullName.value,
    email: email.value,
    message: message.value,
  });

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: data,
  };

  let response = await fetch(url, requestOptions);
  let responseJSON = await response.json();

  console.log(responseJSON);
}

console.log("It worked");
