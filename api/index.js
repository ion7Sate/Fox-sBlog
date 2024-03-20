import express from 'express'
import mongoose from "mongoose";
import {configDotenv} from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

configDotenv();
mongoose
    .connect(process.env.MONGO)
    .then(()=> {
        console.log('MongoDB is connected');
    })
    .catch((err) => {
            console.log(err);
        });


const app = express();
app.use(express.json());
app.listen(3000,()=>{
    console.log('Server is runing on port 3000')
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoute)