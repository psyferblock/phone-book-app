const token = require ('jwtwebtoken');

function testMiddleware(){
    return (req,res,next )=>{
    // console.log(`- - ${req.query.id} - -`);

    // const token = req.header("token");
    // if (!token) return res.status(401).json({ message: "Auth Error" });
  
    // try {
    //   const decoded = jwt.verify(token, "randomString");
    //   req.user = decoded.user;
    //   next();
    // } catch (e) {
    //   console.error(e);
    //   res.status(500).send({ message: "Invalid Token" });
    // }


    // bcrypt you need to check if its valid conn

    // check jwt token if it is valid
    // validate forms
    // not authorized 403
    next(); 
}
}
module.exports = testMiddleware;
