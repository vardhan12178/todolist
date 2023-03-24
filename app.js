const express=require("express");
const app=express();
var items=[];
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine',"ejs");

app.get("/",(req,res)=>{
  var date=new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  var newDate=date.toLocaleDateString("Eng-us",options);
  res.render('index',{todayDate:newDate,addItem:items});
})


app.post('/',(req,res)=>{
  var item=req.body.newItem;
items.push(item);
  res.redirect("/");
})











app.listen(3000,()=>{
  console.log("server started at port 3000");
})
