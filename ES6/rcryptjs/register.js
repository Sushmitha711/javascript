

let user = {name:"Sushmitha" , password:'Sushma@012' , card:'1324332143'}
let bcrypt=require('bcryptjs')
let salt = bcrypt.genSaltSync(10)
let new_Password=bcrypt.hashSync(user.password,salt)
let new_CC=bcrypt.hashSync(user.card,salt)
console.log(user)
user = {...user , password:new_Password , card:new_CC}
console.log(user)
let flag=bcrypt.compareSync('Susha@012',user.password)
flag ? console.log("login success"):console.log("Login failure")
console.log(flag)