const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.MONGO_URI;

const MongoInit = async () => {
  try {
    // await mongoose.connect(URI, {
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    //   useFindAndModify: true,
    //   useCreateIndex: true,
    // });

    await mongoose.connect("mongodb://localhost:27017/cloudversity", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: true,
      useCreateIndex: true,
    });

    // console.log("Connected to MongoDB Atlas...");
    console.log("Connected to MongoDB Local...");
  } catch (error) {
    console.log("DB Connection Error: ", error.message);
  }
};

module.exports = MongoInit;
