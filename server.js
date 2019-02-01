const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const email = require('./controllers/email');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res)=> {res.send('this is working')});
app.post('/contact', (req, res) => {email.handleEmail(req, res, nodemailer)});

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
	console.log(`server is listening on port ${PORT}`);
});


