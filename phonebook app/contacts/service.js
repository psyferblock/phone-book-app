const Contact = require("../model/Contact");

async function addContact(body){
    const{
        name,
        email,
        number,
        relationship_status ,
        location,
    }=body;
    const contact=new Contact({
        name,
        email,
        number,
        relationship_status ,
        location,
    });
    return await user.save();
}
async function getContacts(){
    return Contact.find().populate('relationship')
}
// async function getContact(){
//     return contact.findOne()
// }

module.exports={
    addContact,
    getContacts,
    // getContact,
}