//TODO write code for frontend server
const express=  require('express');
const path= require('path');
const favicon= require('serve-favicon');
const logger= require('morgan');
const cookieParser= require('cookie-parser');
const bodyParser= require('body-parser');
const config= require('/models/config');

const admin= require ('./controllas/admin');
const users= require ('./controllas/users');
const  coupons= require('./controllas/coupon');
const sender= require('./controllas/sender');
const auth= require('./controllas/auth');


var app= express()
var router= express.Router();



