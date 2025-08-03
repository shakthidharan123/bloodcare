const express = require('express');

const router=express.Router();

router.route('/').post((req,res)=>{
    console.log(req.session.user);
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
            res.send("Logut Failed")
        }
        else{
            res.clearCookie('user');
            res.send("Logut successfull");
        }
    })
})

module.exports = router;