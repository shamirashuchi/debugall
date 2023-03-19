const products = [
    {name: 'laptop', price:3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price:7000, brand: 'iphone', color: 'Golden'},
    {name: 'watch', price:3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price:300,brand: null , color: 'black'},
    {name: 'camera', price:3200, brand: 'canon', color: 'black'}
];


//  const d = document.getElementById('container');
//  d.innerHTML = `
//  ${products
//     .filter(product => product.brand)
//     .map((product, index) => ({ brand: product.brand, index: index + 1 }))
//     .map(item => `<div>${item.index}. ${item.brand}</div>`)
//     .join('')}
// `;
const brands = products.map(product => product.brand);
//console.log(brands);
const price = products.map(product => product.price);
//console.log(price);
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

//3.filter 
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
console.log(specificName);

//4.find
const special = products.find(p => p.name.includes('n'));
console.log(special);