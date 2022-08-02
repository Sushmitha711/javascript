class Account{
   constructor(id,name,email){
    this.Acc_Id=id;
    this.Acc_name=name;
    this.Acc_email=email;
   }
   get_Account_Details(){
    return this.Acc_Id+":"+ this.Acc_name;
   }
   get_Address(){
   return "original Address";
   }
}
class Savings_Account extends Account {
    constructor(id, name, email, amount, total) {
        super(id, name, email )
        this.acc_Amount=amount;
        this.acc_Total=total;
    }
    get_Account_Bal() {
        return this.acc_Amount
    }
    get_Account_Total(){
        return this.acc_Total
    }
}

let s1=new Savings_Account (121423,"Sushmitha","sushma@gmail.com", 20000,1345678);
console.log(s1.get_Account_Details());
console.log(s1.get_Address());
console.log(s1.get_Account_Bal());
console.log(s1.get_Account_Total());