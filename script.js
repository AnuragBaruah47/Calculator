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
  value.addEventListener("mouseover", () => {
    let currentname = value.name;
    current_status.innerText = `${currentname}`;
  });
});
setInterval(() => {
  const clock = new Date();
  let realClock = clock.toLocaleTimeString();
  clockcontainer.innerText = `${realClock}`;
}, 1000);

allButtons.forEach((value)=>{
    value.addEventListener("click",function(){
        screen.innerText +=`${value.value}`
    })
})
allButtons.forEach((button)=>{
    button.addEventListener("click",function(){
            button.style.backgroundColor="#7fff00"
        setTimeout(()=>{
            button.style.backgroundColor="#FFFFFF"
        },100)
    })
})
clear.addEventListener("click",function(){
    screen.innerText=""
})

