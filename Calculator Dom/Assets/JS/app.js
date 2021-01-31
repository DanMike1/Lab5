const clear = document.querySelector("#srtr");
const ClearAll = document.querySelector("#CE");
const powerr = document.querySelector("#power");
const equali = document.querySelector("#equali");
const answer = document.querySelector('#tinput');

equali.addEventListener("click", ()=>{
    answer.innerHTML = eval(answer.innerText)

})
ClearAll.addEventListener("click",ClearEn())

function ClearEn(){
answer.innerHTML = ''
}
function srtr(){
    answer.innerHTML=Math.sqrt( eval(answer.innerText))
}
function powerrs(){
    answer.innerHTML=( eval(answer.innerText)*eval(answer.innerText))
}
function powerrs3(){
    answer.innerHTML=( eval(answer.innerText)*eval(answer.innerText)*eval(answer.innerText))
}