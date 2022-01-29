const db = require('./models');
const express = require("express");
const app = express();
const todolistRoute = require('./routes/todolist');
const todolist = require('./models/todolist');
const cors = require('cors')

app.use(cors()); //Enable All CORS Requests และ ไม่กำหนด domain

// //Enable All CORS Requests และ ต้องการกำหนดเฉพาะบาง domain 
// var corsOptions = {
//     origin: 'http://localhost:1234',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// app.use(cors(corsOptions));

// // กรณีไม่อยากใช้ cors express สามารถเขียนเองได้
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// })

//middleware
app.use(express.json());

db.sequelize.sync().then(() => {
    console.log('db is synced');
    app.listen(8800, () => {
        console.log('Backend server is running')
    })
});

app.use('/todolist', todolistRoute);


