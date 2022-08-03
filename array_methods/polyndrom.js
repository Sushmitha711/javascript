
// Polyndrom of string.

let a="madam";
let b=a.split("");
let c=b.reverse();
let d=c.join("");
console.log(d)
if(a===d){
  console.log("yes it is a polyndrom:");
}else{
  console.log("It is not a polyndrom:")
}

//polyndrom of number
let g="101";
let h=g.split("");
let i=h.reverse();
let j=i.join("");
console.log(j)

if(g===j){
  console.log("yes,it is polyndrom")
}else{
  console.log("It is not a polyndrom");
}
