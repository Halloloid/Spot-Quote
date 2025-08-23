const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const testmonialRoutes = require('./routes/testmonial');
const cors = require('cors');
const app = express();

dotenv.config();

// app.use(cors({
//     origin:'https://spot-quote.vercel.app'
// }));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/testmonials', testmonialRoutes);
app.use("/uploads", express.static("uploads"));



try {
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log("Connected To MongoDB")
        app.listen(process.env.PORT,()=>{
            console.log("Server is Running On Port")
        })
    })
} catch (error) {
    console.log("Unable to Connect");
}



