const clear = document.querySelector("#srtr");
const ClearAll = document.querySelector("#CE");
const powerr = document.querySelector("#power");
const equali = document.querySelector("#equali");
const answer = document.querySelector('#tinput');

function eq(){
equali.addEventListener("click", ()=>{
    if (answer.innerText.includes('/0')){
        answer.innerText = "Error"
    }
    else{
    answer.innerHTML = eval(answer.innerText)
    }

})
}
ClearAll.addEventListener("click",ClearEn())

function ClearEn(){
answer.innerHTML = ''
}
function srtr(){
    if (answer.innerText.includes('/0')){
        answer.innerText = "Error"
    }
    else{
    answer.innerHTML=Math.sqrt( eval(answer.innerText))
    }
}
function powerrs(){
    if (answer.innerText.includes('/0')){
        answer.innerText = "Error"
    }
    else{
    answer.innerHTML=( eval(answer.innerText)*eval(answer.innerText))
    }
}
function powerrs3(){
    if (answer.innerText.includes('/0')){
        answer.innerText = "Error"
    }
    else{
    answer.innerHTML=( eval(answer.innerText)*eval(answer.innerText)*eval(answer.innerText))
    }
}
