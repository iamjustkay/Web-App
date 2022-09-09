const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express();

app.use(express.json());

app.use(cors());

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'tapp'
})

conn.connect()


app.post("/",(req,res)=>{
    conn.query('SELECT * FROM `users`', (err, rows, fields) => {
        if (err){
            throw err;
        } 
      
        console.log('The solution is: ', rows)
        
      })
})

//user login
app.post("/", (req, res)=>{
    const email = req.body.email
    const password = req.body.password
    conn.query('SELECT * FROM `users` WHERE email= ? AND password = ?', [email, password], (err, result) =>{
        if (err) {
            res.send({err:err})
        }
        if (result.length > 0){
            res.send("/dashboard");
        }else{
            res.send("Wrong Credentials");
        }
    })
    
})

//create new user

app.post("/register", (req, res)=>{
    const fullname = req.body.fullname;
    const company = req.body.company;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    
    conn.query('INSERT INTO `users` (fullname, company, address, phone, email, password) VALUES (?,?,?,?,?,?)',[fullname, company, address, phone, email, password], (err, result)=>{
       if(result) {
        res.send("/");
       } else {
         res.send(err);
       }
    })
})

//ticket reservation
app.post("/book-ticket", (req, res)=>{
    const fullname = req.body.fullname;
    const contact = req.body.contact;
    const location = req.body.location;
    const bus = req.body.bus;
    const ticket = req.body.ticket;
    const email = req.body.email;

    conn.query('INSERT INTO `tickets` (fullname, contact, location, bus, ticket, email) VALUES (?,?,?,?,?,?)',[fullname, contact, location, bus, ticket, email], (err, result)=>{
        if(result) {
         res.send("/dashboard");
        } else {
          res.send(err);
        }
     })
})

app.listen(5000,()=>{console.log('Api is already running...')});