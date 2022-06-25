const {Router} = require('express');
const  {get,register,login} = require('./controller/user');
const  router =Router();
const testMiddleware =require('../middleware/test');

router.get('/', testMiddleware(),(req,res)=>get(req,res));
router.post('/auth/register',register);
router.post("/auth/login",login);






module.exports=router;
console.log("yo")