const{addContact,getContacts} = require("./service");
const Contact = require("../model/Contact");

async function add(req,res){
    try{
        console.log(req.body)
        if (req.body){
            const newContact = await addContact(req.body)
            console.log("new contact=> ",newContact);
        }
    }catch (error){
        return error
    }

}