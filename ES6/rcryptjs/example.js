let user = { name: "Sushmitha", password: 'Sushma@012', cc: '1221 4321 3445' }
const bcrypt = require('bcryptjs')
let salt = bcrypt.genSaltSync(10);
let new_Password = bcrypt.hashSync(user.password, salt)
let new_CC = bcrypt.hashSync(user.cc, salt)
console.log(user)
user = { ...user, password: new_Password, cc: new_CC }
console.log(user)

