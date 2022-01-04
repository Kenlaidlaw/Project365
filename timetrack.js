const hoursAvailable = document.querySelector("#hoursAvailable");

// Working out how many hours are available?

function addInputs() {
  const sleep = document.querySelector("#infoSleep").value;
  const eat = document.querySelector("#infoLife").value;
  const family = document.querySelector("#infoFamily").value;
  const work = document.querySelector("#infoWork").value;

  let sum = 168 - (parseInt(sleep) + parseInt(eat) + parseInt(family) + parseInt(work)) * 7;

  hoursAvailable.innerText = sum;
}

// Adding a new task
