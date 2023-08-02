const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const formRouter = require("./routes/formRoutes")
const connectDB = require("./db/connect");



const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(
    cors({
      origin: "*",
    })
);

app.use("/", formRouter);

app.get("/", async (req,res) => {
    res.status(200).json("hey")

})





const PORT = 8000;
const start = async () => {
    try {
      await connectDB("mongodb+srv://Boltzmann:Prashant23@mytestdb.qc365yt.mongodb.net/practice ");
      app.listen(PORT, (err) => {
        if (err) throw err;
        console.log("PLEASE CHECK things to do when in prod.txt after importing of PROD DB")
        console.log(`DB Connected ${"mongodb+srv://Boltzmann:Prashant23@mytestdb.qc365yt.mongodb.net/practice "}`);
        console.log(`Server is up and running on ${PORT}`);
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  start();

