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
