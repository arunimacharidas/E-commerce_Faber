var express = require('express');
var router = express.Router();
const {getUserHomePage,getlogin,getcart,getCheckout,getConfirmation,getcontact,getabout,getmain,getproductdetails,getshop}= require('../controllers/usercontroller')



// /* GET home page. */
router.get('/', getUserHomePage)
router.get('/login',getlogin)
router.get('/cart',getcart)
router.get('/checkout', getCheckout);
router.get('/confirmation',getConfirmation);
router.get('/contact',getcontact)
router.get('/about',getabout)
router.get('/main',getmain)
router.get('/productdetails',getproductdetails)
router.get('/shop',getshop)



module.exports = router;

// mongodb+srv://arunimaaru:<password>@cluster0.p6tzagk.mongodb.net/?retryWrites=true&w=majority