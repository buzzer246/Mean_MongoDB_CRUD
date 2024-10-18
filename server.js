const express = require("express");  // calling express framework
const app = express();              // creating object of express
const cors = require("cors");      // calling cors origin library to allow data communication between 2 server
app.use(cors());                  // creating object of cors library
app.use(express.json());         // enable json data communication


const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mean2")
const db = mongoose.connection;

db.on("error", (error)=>console.log("Error in database connection"));
db.on("open", ()=>console.log("Database is Connected...!"));

const Allusers = require("./allapi");
app.use("/allapi",Allusers); //user

app.listen(8080, () => {
    console.log(`Server started on port:'http://localhost:8080'`);
});