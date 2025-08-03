const express = require('express');
const router = express.Router();
const db=require('../config/database');

router.route('/').get((req,res)=>{
    console.log("hello",req.session.user);
    const id = req.session.user[0];
   console.log(id);
    let sql = "select * from hp_request where quantity != 0";
    
    db.query(sql,req.session.user[0],(err,data)=>{
        if(err){
            console.log(err);
            res.send("error");
        }
        else{
           console.log(data);
           res.send(data);
        }
    })
})

module.exports = router;