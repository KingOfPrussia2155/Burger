var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();
router.get('/', function(req,res){
    burger.all(function(burger_data){
    console.log(burger_data);
        res.render('index', {burger_data});
    })
})

router.put('/burgers/update',function(res,req){
    burger.update(req.body.burger_id, function(result){
        console.lot(result);
        res.redirect('/')
    });
})
module.exports = router;