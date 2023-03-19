//alert('How are you');
const showAlert = () =>{
    alert('Dosto, taka ase dhar dite parbi');
}
const lendMoney = () =>{
   const result = confirm('Will you lend me 500Taka');
   console.log(result);
   if(result === true){
    alert('Tui amar jan er dosto!!!');
   }
   else{
        console.log('dure giya mor');
   }
}
const getInfo = () =>{
    const result = prompt('Tell me your name');
    console.log(result);
    if(result === null){
        alert('nam na dile kam nai');
    }
    else{
        console.log(result,'welcome to this world')
    }
}