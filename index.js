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