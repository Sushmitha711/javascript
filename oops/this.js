class product{
    p_Name;
    get_Name(Name){
        this.p_Name=Name
    }
}
let a1= new product()
a1.get_Name("Sushmitha")
console.log(a1)
console.log(a1.p_Name)
let a2=new product()
a2.get_Name("Sushma")
console.log(a2)
console.log(a2.p_Name)
let a3=new product()
console.log(a3)