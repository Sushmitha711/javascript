let a=["Apple","Banana","Orange","Mango"]
let c=a.slice(0,3)  //Here 0 is starting index and 3 is ending of index which is not include in slice last element is not going to display
console.log(c)      //Slice extracts a part of string and returns the extracted part in new part.


//substring() and substr() both are similar but the change is 
//in substring (start,end)
//in substr(start,length)

//Replace()
let text="Hello Sushmitha well come to new website And thank you website"
let message=text.replace(/website/g,"Mypage")  //here /g regular expression is used to change everywhere the string matches 
let msg=text.replace(/WEBSITE/i,"Mypage")  //here /i is used to make programe insensitive ,it means to convert upper case to lower and lower to upper case.
console.log(message)
console.log(msg)

//ToUpperCase()
let txt="Hello every one"; 
let output=txt.toUpperCase();
console.log(output)

//toLowerCase()
let ms="SUSHMITHA N GOWDA"
let s=ms.toLowerCase()
console.log(s)

//Concat()
let z="Mr."
let y="Bean"
console.log(z.concat(y))

//trim()
let d="     My Webpage!    "
let e=d.trim()
console.log(d.length)  // it takes complete length inside the string it shows 20
console.log(e.length)  //it removes spaces return 11 



