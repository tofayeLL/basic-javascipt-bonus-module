const numbers = [10, 12, 13, 154, 67, 89];
for(let num of numbers){
    // console.log(num);
}


const products = [
    {id:1, name: 'walton Phone', price: 19000},
    {id:2, name: 'oppo', price: 20000},
    {id:3, name: 'xioami phone', price: 29000},
    {id:4, name: 'samsung', price: 39000},
    {id:5, name: 'huawei Phone', price: 49000},
    {id:6, name: 'nokia', price: 69000}
]

// for(const product of products){
//     // console.log(product);
// }

function matchProducts(products, search){
    let match = [];
   for(const product of products){
    if(product.name.toLowerCase().includes(search.toLowerCase())){
        match.push(product);
    }
   }
   return match;
}
let result = matchProducts(products, 'Phone');
console.log(result);