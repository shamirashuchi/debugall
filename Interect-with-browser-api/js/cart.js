const addProduct = () =>{
    const productfield  = document.getElementById('product-name');
    const quantityfield  = document.getElementById('product-quantity');
    const product = productfield.value;
    const quantity = quantityfield.value;
    productfield.value = '';
    quantityfield.value = '';
    displayProduct(product,quantity);
    saveproducttolocalstorage(product,quantity);
}

const displayProduct = (product,quantity) =>{
    const ul = document.getElementById('product-container');
    const li =  document.createElement('li');
    li.innerText = `${product}: ${quantity}`
    ul.appendChild(li);
}

const getstoredshoppingcart = () => {
    let cart = {};
    const storecart = localStorage.getItem('cart');
   
    if(storecart){
        cart = JSON.parse(storecart);
    }
    return cart;
}

const saveproducttolocalstorage = (product,quantity) => {
      const cart = getstoredshoppingcart();
      cart[product] = quantity;
      const cartstringifed = JSON.stringify(cart);
      localStorage.setItem('cart',cartstringifed)
}

const displayproductsfromshoppingcart = () =>{
    const savedcart = getstoredshoppingcart();
    for(const product in savedcart){
        const quantity = savedcart[product];
        displayProduct(product,quantity);
    }
}
displayproductsfromshoppingcart();