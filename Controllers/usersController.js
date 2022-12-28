const {v4:uuid}=require('uuid')

let usersList=[]

const getUsers=(req,res)=>{
    res.send(usersList)
}
const createUser=(req,res)=>{
    const user=req.body
    const userWithID={...user,id:uuid()}
    usersList.push(userWithID)
    res.send(`${user.firstName} ${user.lastName} ADDED`)
}
const foundUser=(req,res)=>{
    const {id}=req.params
    const foundUser=usersList.find((user)=>user.id===id)
    res.send(foundUser)

}
const deleteUser=(req,res)=>{
    const id=req.params.id
    usersList=usersList.filter((user)=>user.id !== id)
    res.send(`USER WITH ID ${id} IS DELETED`)
    
}
const updateUser=(req,res)=>{
    const {id}=req.params
    const {firstName,lastName,age}=req.body
    const foundUer=usersList.find((user)=>user.id===id)
    if(firstName){
        foundUer.firstName=firstName
        res.send(`USER ID ${id} firstName is Updated`)
    }
    if(lastName){
        foundUer.lastName=lastName
        res.send(`USER ID ${id} lastName is Updated`)
    }
    if(age){
        foundUer.age=age
        res.send(`USER ID ${id} age is Updated`)
    }

}
module.exports={getUsers,createUser,foundUser,deleteUser,updateUser}