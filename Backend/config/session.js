const express = require('express');
const app = express();
const session = require('express-session')
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')
app.use(cookieparser());
app.use(bodyparser.urlencoded({extended:true}))

app.use(session({
    key:"userid",
    secret:"bloodDonation",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }

}))

module.exports = session;