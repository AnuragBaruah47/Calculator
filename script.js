const number = document.querySelectorAll(".numbers");
const clock = document.querySelector(".t_and_d");
const statusBar = document.querySelector(".current_status");
const allButtons = document.querySelectorAll(".button");
const allRealButtons = document.querySelectorAll("button");
const clearButton = document.getElementById("Clear");
const crossButton = document.getElementById("Erase");
const equalButton = document.getElementById("Equal_to");
let lowerScreen = document.querySelector(".screeninfo");
let valueArr = [];
let totalValue;

document.addEventListener("DOMContentLoaded", () => {
  statusBar.innerHTML = "Welcome";
  allButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const idName = button.id;
      const buttonName = button.name;
      statusBar.innerText = `${idName}`;
      const valueofKeys = button.value;
      valueArr.push(valueofKeys);
      console.log(valueArr);
      totalValue = valueArr.join("");
      lowerScreen.innerText += `${buttonName}`;
      if (valueArr.includes("﹪")) {
        const text = totalValue;
      const pattern = /^(.*?)﹪(.+)$/;
      const match = text?.match(pattern);
        if (match) {
            const textA = match[1];
            const textB = match[2];
            console.log("textA:", textA);
            console.log("textB:", textB);
            console.log(idName);
            equalButton.addEventListener("click", function () {
              lowerScreen.innerText = Percentage(textA, textB);
            });
          }
      }
      if (!valueArr.includes("﹪")) {
        equalButton.addEventListener("click",()=>{
            valueArr = []
            lowerScreen.innerText=eval(totalValue)
            valueArr.push((eval(totalValue)).toString())
        })
      }
      if (idName === "Square") {
        valueArr = []
        lowerScreen.innerText = eval(totalValue);
        valueArr.push((eval(totalValue)).toString())
      }
      if (idName === "Sqr_Root") {
        valueArr = []
        lowerScreen.innerText = Math.sqrt(parseInt(totalValue)).toFixed(5);
        valueArr.push((Math.sqrt(parseInt(totalValue)).toFixed(2)).toString())
      }
    });
  });
});

setInterval(() => {
  const watch_time = new Date();
  const show_time = watch_time.toLocaleTimeString();
  clock.innerHTML = `${show_time}`;
}, 1000);

clearButton.addEventListener("click", () => {
  valueArr = [];
  statusBar.innerText = clearButton.name;
  lowerScreen.innerText = ``;
  console.log("After Clear", valueArr);
});
crossButton.addEventListener("click", () => {
  lowerScreen.innerText = ``;
  statusBar.innerText = crossButton.name;
  valueArr.pop();
  console.log(valueArr);
  valueArr.forEach((valueOfModifiedArr) => {
    lowerScreen.innerText = valueArr.join("");
    console.log("after pop", valueArr);
  });
});

function Percentage(a, b) {
  let value = (a / 100) * b;
  return value;
}
