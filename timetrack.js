const sleep = document.querySelector("#infoSleep");
const eat = document.querySelector("#infoEat");
const family = document.querySelector("#infoFamily");
const hoursAvailable = document.querySelector("#hoursAvailable");

// Working out how many hours are available?

let sleepNum = 10;

const hoursUsed = () => {
  sleepNum = parsInt(sleep.value);
  hoursAvailable.innerText = sleepNum;
};

// practice sets

const answer = document.querySelector("#answer");

function addInputs() {
  const numOne = document.querySelector("#infoNum1").value;
  const numTwo = document.querySelector("#infoNum2").value;

  let sum = parseInt(numOne) + parseInt(numTwo);

  answer.innerText = sum;
}
