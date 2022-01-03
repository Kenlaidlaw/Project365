// practice sets

const answer = document.querySelector("#answer");

function addInputs() {
  const numOne = document.querySelector("#infoNum1").value;
  const numTwo = document.querySelector("#infoNum2").value;

  let sum = parseInt(numOne) + parseInt(numTwo);

  answer.innerText = sum;
}
