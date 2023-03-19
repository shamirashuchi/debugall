localStorage.setItem('userId', 87952214);
const addtolacalstorage = () => {
    const idInput = document.getElementById("storage-id");
    const id = idInput.value;
    const valueInput = document.getElementById("storage-value");
    const value = valueInput.value;

    //
    if(id && value){
        //setitem in localstorage
    //localStorage.setItem('friends',JSON.stringify([45,78,98]));
    //localStorage.setItem('pen',JSON.stringify({price:10,color:'black'}));
    //get item from localstorage
    // const penobj = localStorage.getItem('pen');
    // const pen = JSON.parse(penobj);
    // console.log(pen);
    //set id and value
    //localStorage.setItem(id,value);
    //update item in localstorage
    // Retrieve the object from the localStorage
        const penObj = JSON.parse(localStorage.getItem('pen'));

        // Update the price property of the object
        penObj.price = 50;

        // Store the updated object back in the localStorage
        localStorage.setItem('pen', JSON.stringify(penObj));
    }
    idInput.value = "";
    valueInput.value = "";
}