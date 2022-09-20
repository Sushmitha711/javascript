var input="ZZZ"
var output=""   
for (var i=0; i<input.length;i++){
    output=String.fromCharCode(((input[i].charCodeAt(0)-64)%26)+65)+output
}console.log(output)