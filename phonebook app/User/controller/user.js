const { getUsers, getById, addUser, getByEmail}= require('../service');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
console.log(bcrypt);

const TOKEN_SECRET = process.env.TOKEN_SECRET || "NOT SECRET";

async function get(req,res){
    try{
        // console.log(req.query);

        if (req.query.id){
            const id = req.query.id;
            const result = await getById(id);
            console.log('result of specific user => ', result);
            return res.send(result);
        }
        const result = await getUsers();
        // console.log('result=>',result);
        return res.send(result);
    } catch (error) 
    {
        console.log(error);
    }
}

async function register(req,res){
    try{
        // console.log(req.body);
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password,salt);

        const addUserResult = await addUser(req.body,hashPassword);
        // console.log('addUserResult =>',addUserResult);
        return res.send({user:addUserResult._id});
    } catch(error) {
        console.log(error);
    }
}

async function login(req,res){
    try{
        const user = await getByEmail(req.body.email);
        if (!user)return res.status(400).send('to hell with you invalid');
        // console.log(user)
        const token = jwt.sign({
            _id:user._id, name:user.name, email:user.email
        },TOKEN_SECRET);
        console.log("surprise")
        return res.header("auth-token",token).send(token);
    } catch (error) {
        console.log(error)
            res.status(500).send(error);
        }
    }

  
    
    module.exports ={
        login,
        register,
        get,
    }