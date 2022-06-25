const {Router}=require("express");
const{add,get,removeContact,update}=require("./contactController");
const router =Router();

router.post('/add_contact',add);
router.get('/get_contact',get);
router.delete('/remove_contact',removeContact);
router.get('/get_contacts',removeContact);

// router.post('/auth/login/',updateContact);

module.exports = router;