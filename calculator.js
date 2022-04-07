function calculator(){
    console.log("Calculating... ");
    let num1 = Number(prompt("Enter the number"));
    document.getElementById("Calculating...").innerHTML=`
    <p>${num1} * 10 = ${num1*10}</p>`;
}