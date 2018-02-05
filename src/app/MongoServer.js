var express = require('express');
var app = express();

var mongodb = require('mongodb');
var mongoClinet = mongodb.MongoClient;
const url = "mongodb://localhost:27017";

var bodyP = require('body-parser');
var Enc = bodyP.json();



app.use(express.static(__dirname));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type, Accept");
    next();
});

app.get('/orderPizza',function(req,res){

    //console.log(req.query.name);
    //console.log(req.query.age);

    var data;

    mongoClinet.connect(url,function(err,client){
        if(err){
            console.log("database connection failed");
        }
        else{
            console.log("databse connected");
            const db = client.db('Pizza');

            db.collection("pizzas").find({}).toArray(function(err,result){
                if(err){
                    console.log(err);
                }
                else{
                    console.log(result);
                    //data = result;

                    res.json(result);
                }
            });

            client.close();
        }
    });


});

app.get('/buildPizza',function(req,res){
    console.log(req.query.name);
    //res.send("sdf");
    mongoClinet.connect(url,function(err,client){
        if(err){
            console.log("database connection");
        }
        else{
            console.log("databse connected");
            const db = client.db('Pizza');

            db.collection("ingredients").find({name:req.query.name}).sort().toArray(function(err,result){
                if(err){
                    console.log(err);
                }
                else{
                    console.log(result);
                    //data = result;
                    res.json(result);
                }
            });

            client.close();
        }
    });
});


app.post('/',Enc,(req,res)=>{

});

app.listen(3000);
