import { Request, Response } from "express";
import { DeliveryEmployee } from "./model/deliveryEmployee";

const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const session = require('express-session');

const app = express();

//Configure nunjucks
const appViews = path.join(__dirname,'/views/');

const nunjucksConfig = {
    autoescape: true,
    noCache: true,
    express: app
}

nunjucks.configure(appViews, nunjucksConfig)

//Configure Express
app.set('view engine','html');

app.use('/public', express.static(path.join(__dirname,'public')));

app.use(express.json())

app.use(express.urlencoded({extended:true}));

app.use(session({secret: 'NOT HARDCODED SECRET', cookie: {maxAge: 600000}}));

declare module "express-session"{
    interface SessionData{
        deliveryEmployee: DeliveryEmployee;
        token: string;
   }
}

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
});

require('./controller/deliveryEmployeeController')(app);
require('./controller/authController')(app);

