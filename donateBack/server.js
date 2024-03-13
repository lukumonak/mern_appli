require('dotenv').config()

const  connectDB  = require('./datab')
var cors= require('cors')

const oldThRoutes= require('./routes/oldTh')
const userRouter= require('./routes/user')
const organizationRoutes= require('./routes/orgroute')
const express= require('express')
const app =express()



app.use(cors())
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

connectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`listin on port ${process.env.PORT} maybe`)
    }) 

}).catch((error)=>{
    console.log(error)
})

app.use('/api/oldThs', oldThRoutes)
app.use('/api/user', userRouter)
app.use('/api/organization', organizationRoutes)

// connectdb





