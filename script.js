const allButtons=document.querySelectorAll("button")
const current_status=document.querySelector(".current_status")
const clockcontainer=document.querySelector(".t_and_d")
const squareButton=document.querySelector(".square")
const body=document.querySelector("body")
const screen=document.querySelector(".screeninfo")
const one=document.querySelector(".one")
const two=document.querySelector(".two")
const three=document.querySelector(".three")
const four=document.querySelector(".four")
const five=document.querySelector(".five")
const six=document.querySelector(".six")
const seven=document.querySelector(".seven")
const eight=document.querySelector(".eight")
const nine=document.querySelector(".nine")
const zero=document.querySelector(".zero")
const clear=document.querySelector(".clear")
const doublezero=document.querySelector(".double_zero")
const point=document.querySelector(".point")
const cross=document.querySelector(".cross")
const number=document.querySelectorAll(".number")
allButtons.forEach((value)=>{
    value.addEventListener("mouseover",()=>{
     let currentname=value.name
     current_status.innerHTML=`${currentname}`
    })
})

setInterval(() => {
    const clock=new Date()
   let realClock=clock.toLocaleTimeString()
   clockcontainer.innerHTML=`${realClock}`
}, 1000);
