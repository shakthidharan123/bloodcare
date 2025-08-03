const express= require('express');
const router = express.Router();
const db = require('../config/database');
const {format} = require('date-fns');

router.route('/add_donar').post((req,res)=>{
    const{name,gender,btype,quantity,cid,date} = req.body;
   let bbid = req.session.user[0];
    console.log(req.session.user[0]);
    let q1 = "select Campaign_id from campaign  where Organizer_id = ?";
    db.query(q1,[req.session.user[0]],(err,data)=>{
        if(err){
            console.log(err);
            return res.send(err);
        }
        else{
            console.log(data);
            console.log(cid);
            let status = data.some(element => element.Campaign_id === cid);

            
            if(!status){
                return res.send("Campaign mismatch");
            }
            else{

                let sql = `insert into donor (Donor_name,Blood_type,Quantity,Last_donated,campaign_id,bb_id,gender) values(?,?,?,?,?,?,?)`;
    let sql2 = "update bb_inventory set Amount_available = Amount_available + ? where BB_id=? and Blood_type = ?";
    db.query(sql,[name,btype,quantity,date,cid,bbid,gender],(err,data)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        
    })

    db.query(sql2,[quantity,bbid,btype],(err,data)=>{
        if(err){
            console.log(err);
            res.send("Data updated in not stock")
        }
        else{
            console.log(data);
            res.send("Data updated successfully")
        }
    })

            }

        }
    })
    
    // console.log(req.body);
    // console.log(req.session.user);
    // res.send("Success");
})

router.route('/donorlist').get((req,res)=>{
    console.log(req.session.user);
    let sql = "select * from donor where bb_id = ?";
    db.query(sql,req.session.user[0],(err,data)=>{
        if(err){
            console.log(err);
            res.send("error");
        }
        else{
            const updateData = data.map((e)=>{
                console.log(e.Last_donated);
                e.Last_donated = format(new Date(e.Last_donated),'yyyy-MM-dd');
                return e;
            })

            console.log("success",updateData);
            res.send(updateData);
        }
    })
})

router.route('/stock').get((req,res)=>{
    console.log('stock',req.session.user);
    let sql = "Select * from bb_inventory where BB_id = ?";
    db.query(sql,req.session.user[0],(err,data)=>{
        if(err){
            console.log(err);
            res.send(err);

        }
        else{
            console.log(data);
            res.send(data);

        }
        
    })
})

router.route('/add_camp').post((req,res)=>{
    console.log(req.session.user,req.body);
    const{id,name,location,date} = req.body;
    let newDate = new Date();
    let status = newDate < date ? 'true' : 'false'
    sql = "insert into campaign (Campaign_id,Organizer_id,Campaign_Date,Campaign_status,campaign_name,location) values (?,?,?,?,?,?)";
    db.query(sql,[id,req.session.user[0],date,status,name,location],(err,data)=>{
        if(err) throw err;
        else{
            res.send("Data inserted");
        }
    })
})

router.route('/get_camp').get((req,res)=>{
    console.log(req.session.user);
    let sql = "Select * from campaign where Organizer_id = ? ";
    db.query(sql,[req.session.user[0]],(err,data)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            const updateData = data.map((e)=>{
                console.log(e.Last_donated);
                e.Campaign_Date= format(new Date(e.Campaign_Date),'yyyy-MM-dd');
                return e;
            })

            console.log("success",updateData);
            res.send(updateData);
        }
    })

})

router.route('/approve_request/:id').patch((req,res)=>{
    const {body , params:{id}} = req;
    console.log(body,id);
    
    const query = 'UPDATE hp_request SET quantity = ? WHERE id = ?';
    let sql1 = 'Select Amount_available from bb_inventory where BB_id = ? and Blood_type = ?';
    db.query(sql1,[req.session.user[0],body.btype],(err,data)=>{
        if(err) return res.send(err);
        else{
            console.log(data);
            const available = data[0].Amount_available;
            const required = body.quantity;
            if(available >= required){
                let sql2 = "Update bb_inventory SET Amount_available = ? where BB_id = ? and Blood_type = ?";
                let sql3 = "Update hp_request Set quantity = 0 where req_id = ?";
                db.query(sql2,[available-required,req.session.user[0],body.btype],(err,data1)=>{
                    if(err){
                        console.log(err);
                        return res.send(err);
                    } 
                    if(data1.affectedRows === 0){
                        return res.send("Error : Failed to update request");
                    }
                    console.log("Amount deductedd from stock");
                    db.query(sql3,[id],(err,data3)=>{
                        if(err){
                            console.log(err);
                            return res.send(err);
                        }    
                        else{
                            
                            console.log("Result set to zero");
                            return res.send("success");
                        }
                    })
                });

                
               
                

            }
            else if(available === 0){
                return res.send("No sufficient stock");
            }
            else{
                sql2 = "update bb_inventory set Amount_available = 0 where BB_id = ? and Blood_type = ?";
                sql3 = "Update hp_request SET quantity = ? where req_id = ? ";
                db.query(sql2,[req.session.user[0],body.btype],(err,data1)=>{
                    if(err){
                        console.log(err);
                        return res.send(err);
                    } 
                    if(data1.affectedRows === 0){
                        return res.send("Error : No request found");
                    }
                    console.log("Amount deductedd from stock");
                    db.query(sql3,[required - available,id],(err,data2)=>{
                        if(err){
                            console.log(err);
                            return res.send(err);
                        } 
                        if(data2.affectedRows === 0){
                            return  res.send("Error : No request found");
                        }
                        
                        console.log("Req quantity decreased");
                        return res.send("success");
    
                    });

                });
                
               

            }
            
        }
    })
//     db.query(query,[body.quantity - 1,id],(err, results) => {
//         if (err) {
//             console.error('Error updating request:', err);
//             return res.status(500).json({ error: 'Failed to update request' });
//         }

//         if (results.affectedRows === 0) {
//             return res.status(404).json({ error: 'Request not found' });
//         }

//         res.json({ message: 'Request updated successfully' });
    
// })
});

module.exports = router;