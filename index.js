const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app=express();
 app.use(express.json()) //middleware 
 app.use(express.urlencoded()) // used to enable parsing of URL-encoded data with extended parsing.
 app.use(cors()) //enables cross-origin resource sharing to all routes

 
 mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});


 mongoose.connect("mongodb+srv://priyanka0705:Priyanka91800@cluster0.rd2r9sr.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
 })


 const userSchema =new mongoose.Schema({ //schema is structure you want 
    name:String,
    email:String ,
    password:String

})
const user=new mongoose.model("User",userSchema)

 //routes
 app.post("/login",async(req,res)=>{
   const {email,password}=req.body
   try {
    const existingUser = await user.findOne({ email: email });
    if (existingUser) {
       if(password===existingUser.password){
        res.send({message:"Login Successful"})
       }
       else{
        res.send({message:"Password didn't match"})
       }
      } 
      else {
       res.send({message:"User not Registered"})
        }

    }

catch (err) {
    res.status(500).send({ error: "Internal Server Error" });
  }
})

 app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const existingUser = await user.findOne({ email: email });
  
      if (existingUser) {
        res.send({ message: "User Already Registered" });
      } else {
        const newUser = new user({
          name,
          email,
          password,
        });
  
        await newUser.save();
        res.send({ message: "Successfully Registered please login now" });
      }
    } catch (err) {
      res.status(500).send({ error: "Internal Server Error" });
    }
  });
   

 app.listen(9002,()=>{
    console.log("be started at port 9002")
 })