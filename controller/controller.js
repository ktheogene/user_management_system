const {users} = require("../database/database")

//CREATE OR ADD NEW USERS
const createUser = (user) => {
    user.id = (users.length) +1;
    users.push(user);
    console.log(users)
}
//DISPLAY ALL USERS
const display = () =>{
    console.log(users);
}

//DISPLAY ONE ONLY USERS DEPEND ON ID

const dispOneUser = (id) =>{
     var foundedUser = []
     foundedUser = users.find(foundedUser =>foundedUser.id =id)
     if(foundedUser){
        console.log(foundedUser)
     }else{
        console.log("user does not exist");
     }
}

const findMany =(gender) =>{
    var userFound = []
    userFound = users.filter(user =>user.gender ===gender)
    if(userFound){
        console.log(userFound)
    }else{
        console.log("user does not exist");
    }   
}

//REMOVE ONE STUDENT 
const remove =(id) =>{
    var ReadToRemove =[]
    ReadToRemove = users.find(ReadToRemove=> ReadToRemove.id === id);
    if(ReadToRemove){
        var remainingUser =[]
        remainingUser = users.filter(remainingUser => remainingUser.id !==id)
        console.log(remainingUser);
    }else{
        console.log("does not exist");
    }
}

//UPDATE USERS BY ID
const updateUser =(id,key,value) =>{
    var readToUpdate =[]
    readToUpdate = users.find(readToUpdate =>readToUpdate.id ===id)
    if(readToUpdate){
        readToUpdate[key] =value
        console.log(readToUpdate)
    }else{
        console.log("does note exist in our database")
    }
}
//UPDATE ALL OR MANY STUDENT
const updatManyUser =(id,userValue) =>{
 var exitUser = {}
 exitUser = users.find(exitUser =>exitUser.id ===id)
 if(!exitUser){
    console.log("user does not exist")
 }else{
    for (key in userValue){
        exitUser[key] = userValue[key]
       
    }
    console.log(exitUser)
 }
}
module.exports ={createUser,
                 display,
                 dispOneUser,
                 findMany,
                 remove,
                 updateUser,
                 updatManyUser
                }