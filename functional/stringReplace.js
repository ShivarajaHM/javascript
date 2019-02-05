
var read=require('readline-sync')
replace();
function replace() {
    var flag = true
    while (flag) {
        var input = read.question("Enter the name?");
        if (input.length > 2) {
            console.log("Hello " + input + ", How are you?")
            flag = false
        }
        else
            console.log("User name should be greater than two letters.")
    }
}