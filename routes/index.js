var express = require('express');
var router = express.Router();
var fs=require("fs")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/toTxt", function(reg,res){
  fs.appendFileSync("car.txt", reg.query.autoName+" "+reg.query.year+' '+reg.query.price+',')
  res.render("car.hbs", {})
})

router.get("/listOfCars", function(reg,res){
  let carsList=fs.readFileSync("car.txt", "utf8")
  res.render("carsList.hbs", {
    key1: carsList
  })
})

module.exports = router;
