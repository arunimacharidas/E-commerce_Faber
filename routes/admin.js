var express = require('express');
var router = express.Router();
const {getsignin,getsignup,gettable,getindex,getwidget,gettypography,getform,getelement,getchart,getbutton,getblank,get404}=require('../controllers/admincontroller');

router.get('/signin',getsignin)
router.get('/signup',getsignup)
router.get('/table',gettable)
router.get('/index',getindex)
router.get('/widget',getwidget)
router.get('/typography',gettypography)
router.get('/form',getform)
router.get('/element',getelement)
router.get('/chart',getchart)
router.get('/button',getbutton)
router.get('/blank',getblank)
router.get('/404',get404)



module.exports = router;
