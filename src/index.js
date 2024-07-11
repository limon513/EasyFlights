const express = require('express');
const {serverConf,Logger} = require('./config');
const apiroute = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',apiroute);

app.listen(serverConf.PORT, ()=>{
    console.log("Server Up at port = ",serverConf.PORT);
    Logger.log({
       level:"info",
       message:"Started Server!",
       label:__filename,
       errors:{
        success:true,
        error:{}
       }
    });
});