const allInController = require("./controller/controller")
const {createUser,display,dispOneUser,findMany,remove,updateUser,updatManyUser} =allInController
const user ={
     name:"keza",
     gender:"female"
}
const otherUser ={
    name:"ms beuaty",
    gender:"female"
}

console.log("+++++++++++++++++++++++++++++++++++++++++++++__add first new user__++++++++++++++++++++++++++++++++++")
createUser(user)
console.log("+++++++++++++++++++++++++++++++++++++++++++++__add second  new user__++++++++++++++++++++++++++++++++++")
createUser(otherUser)

console.log("++++++++++++++++++++++++++++++++++++++++++++__display all users__+++++++++++++++++++++++++++++++")
display()
console.log("++++++++++++++++++++++++++++++++++++++++++++__display users depend on id__+++++++++++++++++++++++++++++++")
dispOneUser(1);
console.log("++++++++++++++++++++++++++++++++++++++++++++__find Many Users__+++++++++++++++++++++++++++++++")
findMany("female")
console.log("++++++++++++++++++++++++++++++++++++++++++++__REMOVE USERS BY ID__+++++++++++++++++++++++++++++++")
remove(1);
console.log("++++++++++++++++++++++++++++++++++++++++++++__UPDATE USERS BY ID__+++++++++++++++++++++++++++++++")
updateUser(4,"name","theo")
console.log("++++++++++++++++++++++++++++++++++++++++++++__UPDATE MANY __+++++++++++++++++++++++++++++++")
const update ={
    name:"carlos",
    gender:"male"
}
const update1 ={
    name:"joyce",
    gender:"female"
}
updatManyUser(2,update);
updatManyUser(1,update1)

