const app = require('./app')
const connectDB = require('./db/db')
process.on('uncaughtException',()=>{
    console.log(`server shutting down ${error.message}`);
    process.exit(0)
})

if(process.env.NODE_ENV !== 'PRODUCTION')
    require('dotenv').config({path:'backend/config/.env'})
    
connectDB()

app.listen(process.env.PORT,()=>[
    console.log(`Server Successfully listen at port http://localhost:${process.env.PORT}`)
])


process.on('unhandledRejection',()=>{process.exit(1)})