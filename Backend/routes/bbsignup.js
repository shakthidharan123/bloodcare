const express= require('express');
const router = express.Router();
const db = require('../config/database');
const bcrypt = require('bcrypt')
const saltRouns = 10;
router.route('/').post((req,res)=>{
    const {name,bname,email,password,location} = req.body;
    console.log(req.body);
    bcrypt.hash(password,saltRouns,(err,hash)=>{
        if(err) console.log(err);
        else{
            let sql = `INSERT INTO bloodbank.bb_user_reg (user_id, password,email_id,location,name) VALUES (?,?,?,?,?)`;
        db.query(sql,[name,hash,email,location,bname],(err,data)=>{
        if(err) throw err;
        else return res.json("REGISTER SUCCESS");
    })
        }
    })
    
   
})

module.exports = router;