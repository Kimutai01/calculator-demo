document.getElementById("btn1").addEventListener("click", Add)

function Add() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let sum = num1 + num2 ;
    
    document.getElementById("para").innerHTML = sum

}
document.getElementById("btn2").addEventListener("click", Sub)
function Sub(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let  sub  = num1 - num2 ;

    document.getElementById("para").innerHTML = sub;
}