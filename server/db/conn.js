const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log("conneciton succesful");
  })
  .catch((err) => console.log(err));
