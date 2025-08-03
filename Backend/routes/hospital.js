const express = require('express');
const router = express.Router();
const db=require('../config/database');

router.route('/request').post((req,res)=>{
    console.log(req.body);
    const{id,name,gender,quantity,btype,date} = req.body;
    let sql = "insert into patient(Patient_id,Patient_name,Blood_type,hospital_id,Amount_of_blood,gender,date) values(?,?,?,?,?,?,?)";
    db.query(sql,[id,name,btype,req.session.user,quantity,gender,date],(err,data)=>{
        if(err){
            console.log(err);
            res.send("error")
        }
        else{
            console.log("Data inserted");
            res.send("Request sent");
        }
    })
   
})

module.exports = router