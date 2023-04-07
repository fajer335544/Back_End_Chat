const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRouter=require('./routers/authRouters')


const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth',authRouter);

const server =http.createServer(app);




mongoose.connect(process.env.MONGO_API).then(()=>{
    server.listen(PORT,()=>{
        console.log("server run ");
    });
})
.catch(err=>{
    console.log("database connection server failed"); 
    console.error(err);
})