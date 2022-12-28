const express= require('express')
const app=express()
const bodyParser=require('body-parser')
const usersRoute=require('./routes/users')

const PORT=5000

app.use(bodyParser.json())

app.use('/users',usersRoute)

app.get('/',(res,req)=>{
    req.send('hello homepage')
})

app.listen(PORT,()=>console.log(`server running on PORT ${PORT}`))