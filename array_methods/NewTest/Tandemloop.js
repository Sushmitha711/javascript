let x=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let m=["x","t","d","z"];
var result=""
 
for(let i=0;i<=25;i++){
    str=[""]
    for(let j=0;j<=i;j++){
    if(x[i]==m[j]){

     str=str+(x[i+1])  
     result+=str     
      }

  }
 
}
console.log(result)
output=result.split("").reverse().join("")
console.log(output)
