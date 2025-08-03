const express = require('express');
const cors = require('cors');
const db = require('./config/database')
const session = require('express-session')
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')

const app = express();
app.use(express.json());
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST","PUT","DELETE" , "PATCH"],
    credentials:true
}));
app.use(cookieparser());
app.use(bodyparser.urlencoded({extended:true}))
app.use(session({
    name:"user",
    key:"userid",
    secret:"bloodDonation",
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false, // Set to true if using HTTPS
        httpOnly: true, // Helps prevent client-side script from accessing the cookie
        maxAge: 1000 * 60 * 60 * 24 
     }

}))
app.use('/bloodbank/signup',require('./routes/bbsignup'));
app.use('/hospital/signup',require('./routes/hpsignup'));
app.use('/hospital/login',require('./routes/hos_login'));
app.use('/bloodbank/login' ,require('./routes/login'));
app.use('/logout',require('./routes/logout'));
app.use('/bloodbank/request',require('./routes/hp_request'));
app.use('/hospital',require('./routes/hospital'));
app.use('/bloodbank',require('./routes/add_donar'))


const port = 8081;



db.connect(err => {
    if (err) {
        console.error('Error connecting to database:', err);
      //  setTimeout(handleDisconnect, 2000); // Retry after 2 seconds
    } else {
        console.log('Connected to database');
    }
});


// app.get('/',(req,res)=>{
//     let sql = "Select * from blood";
//     db.query(sql,(err,data)=>{
//         if(err) return res.json(err);
//         return res.json(data);
//     })
// })

// app.post('/bloodbank/signup',(req,res)=>{
    
//     console.log(req.body);
//     const {body} = req;
//     console.log(body.name);
//     let sql = `INSERT INTO bloodbank.blood_banks (Blood_banks_id, Blood_bank_name, Address) VALUES (001,'${body.name}', '${body.address}');`;
//     db.query(sql,(err,data)=>{
//         if(err) throw err;

//     })
//     return res.send("Success");
// })

app.listen(port,()=>{
    console.log("Listening");
})