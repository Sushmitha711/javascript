class bank{
    balance=1500;


    open_Account(){
        console.log("need to open our Account in perticular banks");
    }
    Deposit(){
        console.log("Add your amount in your Account");
    }
    Withdrawal(){
        console.log("Depit our amount when you want it");
    }
    Statement(){
        console.log("Get your transaction statement");
    }
    close(){
        console.log("If you dont want account means close it");
    }
}
let B= new bank();
console.log(B);
B.open_Account();
B.Deposit();
B.Withdrawal();
B.Statement();
B.close();
B.balance;