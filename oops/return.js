class P_names{
    P_name;
    p_Details(Name){
     this.P_name=Name
    }
    get_details(){
        return this.P_name
    }

}
let p=new P_names()
p.p_Details("Vivo")
console.log(p)
console.log(p.get_details())
let q=new P_names()
q.p_Details("samsong")
console.log(q)
console.log(q.get_details())
