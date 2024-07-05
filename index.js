import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('view engine','ejs');


app.get('/',(req,res)=>{
  const d = new Date();
 const day = d.getDay();
 
let type = 'A weekday'
let adv = "It's time to work hard";

if(day ===0 || day ===6){
  type ="It's weekend"
  adv = 'Its time to have fun'
}

  res.render("index.ejs",
  { dayType :type , advice:adv})
})

app.get('/getData',(req,res)=>{
  const data ={
    title:"EJS tags",
    items:["apple " ,"banana","cherry","Mango","guava"]
  }
  res.render("index2.ejs",data);
})

app.get('/info',(req,res)=>{
  res.render('form.ejs');
})

app.post('/submit',(req,res)=>{
  const fullname = req.body['fname'] + " " + req.body['lname'];
  console.log(fullname);
  res.render('form.ejs',{
    name : fullname
  })
})




app.listen(3000,()=>{
  console.log("Listening on port 3000")
})