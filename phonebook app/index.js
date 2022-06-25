const express = require("express");
require("dotenv").config();
const cors = require('cors');
const mongoose = require('mongoose');

const userRouter = require("./user/index");
const contactRouter = require("./contacts/index");

const DB_CONNECT=process.env.DB_CONNECT ||"OOPS DIDNT WORK OUT AS PLANNED";
mongoose.connect(
    DB_CONNECT,()=>console.log('connected to the universal cloud')

);

const phoneBookApp = express();
phoneBookApp.use(cors());
phoneBookApp.use(express.json());


phoneBookApp.use("/api/user",userRouter)
phoneBookApp.use("/api/contactr",contactRouter)


phoneBookApp.listen(3010, () => {console.log('Server running')});
