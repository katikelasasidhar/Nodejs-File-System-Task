const express =require('express');

const fs=require("fs")

const app=express();
if (!fs.existsSync(`${__dirname}/TimeFiles`,err=>{
    if(err){
        return err
    }
})){
    fs.mkdir(`${__dirname}/TimeFiles`,err=>{
        if(err){
            return err
        }
    }); 

}   

   

app.get('/createfile',(req,res)=>{
    let date = new Date();
    let filename = `${date.toISOString()}.txt`;
    let data="current date and time is "+date.toISOString();
    fs.writeFile(`${__dirname}/TimeFiles/${filename}`,data,(err)=>{
        console.log(err);
    });
    res.send("Timefiles are successfully created")
})
app.get("/getfile", (req, res) => {
    let files = fs.readdirSync("./TimeFiles");
    console.log(files);
    res.send(files);
  });
  

app.listen(5000,()=>
    console.log("server is runninng")
)


