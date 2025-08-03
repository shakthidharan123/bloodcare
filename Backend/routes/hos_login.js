const express = require('express');
const router = express.Router();
const db=require('../config/database');
const bcrypt=require('bcrypt')


router.route('/').post((req,res)=>{
    const {name,password} = req.body;
    let sql= "Select * from hospital_user_reg where hid = (?)";
    db.query(sql,[name],(err,data)=>{
        console.log(data[0].password,password);

        const plainPassword = Array.isArray(password) ? password[0] : password;
        console.log(data[0].password,password);
        
        if(err) {
            console.error('Database query error:', err);
            return res.json("error");
        }
         if(data.length > 0){
            bcrypt.compare(plainPassword,data[0].password,(error,response)=>{
                if(error){
                    console.log(error);
                    return res.send("error");
                }
                if(response){
                    req.session.user = req.body.name;
                    console.log(req.session);
                    console.log('login success');
                    return res.send("success");
                }
                else{
                    console.log("password mismatch");
                    return res.send('error');
                }
            })
         }
        
        else{
            console.log("No user found");
            return res.json("error");
        }
        
    })

})

router.route('/').get((req,res)=>{
    console.log(req.session.user);
    if(req.session.user){
        res.send({isLoggedIn : true ,user: req.session.user})
    }else{
        res.send({isLoggedIn : false})
    }
})

module.exports = router