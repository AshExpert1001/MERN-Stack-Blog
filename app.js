const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ALAS_URI;

mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("MongoDB Connected Successfully!")
});

const articleRouter = require('./routes/routes');
app.use('/articles', articleRouter);

// production react
app.use(express.static('client/build')) 
const path = require('path');
app.get('*',(req, res)=>{
	res.senFile(path.resolve(__dirname,'client','build','index.html'))
})


app.listen(port, ()=>{
    console.log(`Server is running on port : ${port}`);
});