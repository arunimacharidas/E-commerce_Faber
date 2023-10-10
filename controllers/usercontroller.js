var express = require('express')
var router =express.Router();





module.exports ={
    getUserHomePage:async(req,res)=>{
        try{
            res.render('user/index');
        }catch(error){
            console.log(error);
        }
    },
    getlogin:async(req,res)=>{
        try{
            res.render('user/login');
        }catch(error){
            console.log(error);
        }
    },
    getcart:async(req,res)=>{
        try{
            res.render('user/cart');
        }catch(error){
            console.log(error)
        }
    },
    getCheckout :async (req, res) => {
        try {
          res.render('user/checkout');
        } catch (error) {
          console.log(error);
         
        }
      },
      getConfirmation:async (req,res)=>{
        try{
            res.render('user/confirmation');
        }catch(error){
            console.log(error);
        }
      },
      getcontact:async(req,res)=>{
        try{
            res.render('user/contact')
        }catch(error){
            console.log(error);
        }
      },
      getabout:async(req,res)=>{
        try{
            res.render('user/about')
        }catch(error){
            console.log(error);
        }
      },
      getmain:async(req,res)=>{
        try{
            res.render('user/main')
        }catch(error){
            console.log(error);
        }
      },
      getproductdetails:async(req,res)=>{
        try{
            res.render('user/productdetails')
        }catch(error){
            console.log(error);
        }
      },
      getshop:async(req,res)=>{
        try{
            res.render('user/shop')
        }catch(error){
            console.log(error);
        }
      }
    }