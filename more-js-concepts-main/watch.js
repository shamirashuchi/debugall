let num = 0;
let intervalId;
const start = () =>{
    intervalId = setInterval(()=>{
        const A = document.getElementById("container");
        num += 1;
        A.innerText = num.toString();
    }, 1000)
}

const stop = () =>{
    clearInterval(intervalId);
}
const reset = () =>{
    const A = document.getElementById("container");
    num=0;
    A.innerText = num;
    clearInterval(intervalId);
}
