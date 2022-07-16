function validation(){
    let m=document.getElementById("1").value
    let n=document.getElementById("2").value
    let o=document.getElementById("3").value
    let p=document.getElementById("4").value
    if(m=="" || m.length<5){
        document.getElementById("a").innerHTML="*Please enter valid User Name"
    }
    if(n ==""){
        document.getElementById("b").innerHTML="*Please enter email"

    }
    if(o !=p){
        document.getElementById("d").innerHTML="*Password and confirm password should be same"

    }
   
return false
}