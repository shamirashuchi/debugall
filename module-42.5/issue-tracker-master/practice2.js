let num = 0;
let intervalId;
const start = () =>{
    intervalId = setInterval(()=>{
        const A = document.getElementById("container");
        num += 1;
        A.innerText = num.toString();
        localStorage.setItem('number',A.innerText)
    }, 1000)
}
const reset = () =>{
    const A = document.getElementById("container");
    num=0;
    A.innerText = num;
    localStorage.setItem('number',A.innerText)
    clearInterval(intervalId);
}