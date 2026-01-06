var count = document.getElementById("value");
var countValue =count.innerText; 
function countFunction(event){
    switch (event) {
        case 'inc':
            countValue++;
            break;
        case 'dec':
            countValue--;
            break;
        case 'res':
            countValue = 0
            break;
        default:
            console.log("error");
    }

    count.innerText = countValue;
}
// completed
// Second
function checkPassword(){
    var pass = document.getElementById("pass")
 
    switch (pass.type) {
        case "password":
            pass.type="text"
            break;
    
        default:
            pass.type="password"
            break;
    }

}
// second also completed
function checkNum(){
var number = parseInt(document.getElementById("num").value)
var message = document.getElementById("para").innerHTML
// console.log("num=>",number)
if (number<2) {
    alert("please enter a valid number")
    return
}
if (number == 2) {
        document.getElementById("para").innerHTML = "It is a prime number";
        return
    }
for (let i = 2; i < number; i++) {
    if (number%i==0) {
document.getElementById("para").innerHTML = "It is not a prime number"
        break
    }
}

document.getElementById("para").innerHTML = "It is a prime number"



// message.innerText=message

}