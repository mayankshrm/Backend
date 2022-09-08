const express=require("express");
const cors =require("cors");
const app= express();
const path=require("path")

const APIdata=require("./data.json");

app.use(cors());

app.use(express.static(path.join(__dirname+"/public")))

const port =process.env.PORT || 1234;

app.get("/cars",(req,res)=>{
    res.send(APIdata);
})

app.get("/cars/:id",(req,res)=>{
    const APIid=APIdata.cars.find(c=>c.id===parseInt(req.params.id));
    if(!APIid)res.status(404).send("error");
    res.send(APIid);
})

if(process.env.NODE_ENV=="production"){
    app.use(express.static("/build"));
}
app.listen(port,()=>console.log("listening to port 1234"));

