import express from "express";
import registerRoute from "./routes/registerRoute";
import mongoose from "mongoose";
import cors from 'cors'
const port = 3000;


const app = express();
app.use(express.json())
app.use(cors());


app.use('/register',registerRoute)

mongoose.connect('mongodb://localhost:27017/Mytms')
.then(()=> console.log('Connected successfully'))
.catch((err)=> console.log(err))

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`)
})