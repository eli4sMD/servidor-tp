const router = require("express").Router();

const {
    getuser, 
    postuser, 
    putuser, 
    deleteuser} = require("../controllers/user.controllers")

router.get("/user", getuser);

router.post("/user", postuser);

router.put("/user", putuser);

router.delete("/user", deleteuser);

module.exports = router;