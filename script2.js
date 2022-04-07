console.log(result);
sum(3,3);
sum(6,2);

let subtotal =0;

function addCart(price){
    return total += price;
}

function taxesCalculation(subtotal){
    return 1.11*subtotal;
}

subtotal = addCart(200);
subtotal = addCart(400);
subtotal = addCart(600);

console.log(total);

const total = taxesCalculation(subtotal);
console.log(`The total is: ${total}`);