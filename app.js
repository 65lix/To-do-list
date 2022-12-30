const express = require("express");
const bodyparser=require("body-parser");
const app= express();

var items=[];


app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static("public"))


app.get("/",function(req,res){
   var today=new Date();     

   var option={
        weekday:"long", 
        day:"numeric",
        month:"long"
   };

   var day=today.toLocaleDateString("en-us",option);

   res.render("list",{
    kindofday:day,newitem:items
   });

   app.post("/",function(req,res){
    var a=req.body.duty;
    items.push(a);
    res.redirect("/");
    console.log("adf");
   })
            
});



 
app.listen(3000,function(){
    console.log("server is running");
});