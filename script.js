const allButtons = document.querySelectorAll("button");
const current_status = document.querySelector(".current_status");
const clockcontainer = document.querySelector(".t_and_d");
const squareButton = document.querySelector(".square");
const body = document.querySelector("body");
const screen = document.querySelector(".screeninfo");
const clear = document.querySelector(".clear");
const point = document.querySelector(".point");
const cross = document.querySelector(".cross");
const number = document.querySelectorAll(".number");

allButtons.forEach((value) => {
  value.addEventListener("click", () => {
    let currentname = value.name;
    current_status.textContent = `${currentname}`;
  });
});
setInterval(() => {
  const clock = new Date();
  let realClock = clock.toLocaleTimeString();
  clockcontainer.innerText = `${realClock}`;
}, 1000);

allButtons.forEach((value) => {
  value.addEventListener("click", function () {
    screen.textContent += `${value.value}`;
    let currentname = value.name;
    console.log(currentname);
    let valueofscreen=screen.textContent
    let int_valueofscreen=parseInt(valueofscreen)
    let sq_value=Math.pow(int_valueofscreen, 2)
    if(currentname === "Square"){
      if (valueofscreen=="") {
        screen.innerHTML = `<h6>Please Enter A Number First<h6>`
        squareButton.disabled=true
        setTimeout(() => {
          screen.innerHTML = ``
          squareButton.disabled=false
        }, 800);
      }else{
        screen.textContent = `${sq_value}`;
        console.log(typeof sq_value ,"here"); 
        console.log(sq_value);
        }
    }
  });
});

allButtons.forEach((button) => {
  button.addEventListener("click", function () {
    button.style.backgroundColor = "#7fff00";
    setTimeout(() => {
      button.style.backgroundColor = "#FFFFFF";
    }, 100);
  });
});

clear.addEventListener("click", function () {
  screen.textContent = "";
});
