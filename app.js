const express = require('express');
const app =  express();
const path = require('path');
const bodyParser = require('body-parser');

const helmet = require('helmet');
app.use(express.static('./public'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const User = require('./models/User.js');

// const userPreferences = require('./models/UserPreferences.js');
app.get('/',(req,res)=>{
    
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))

})



app.get('/sing-up',(req,res)=>{
    console.log("sing-up");
    res.status(200).send("created");
})

app.all("/api/sing-up/:id/:name/:email/:passwordHash", async (req, res) => {
        
      console.log(req.params);
      const newUser = await User.create({ id:req.params.id,
        name:req.params.name,
        email:req.params.email,
        passwordHash:req.params.passwordHash });
     
      res.json({status: "ok"});
      console.log(newUser);
   
  });


app.all('*',(req,res)=>{

res.status(404).send('<h1>Not Found</h1>');
 
})
 app.listen(5000,()=>{
     console.log('Port 5000')
 })

const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:Assist123!@192.168.148.194:54320')

db.one('SELECT $1 AS value', 1234)
  .then((data) => {
    console.log('DATA:', data.value)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })

