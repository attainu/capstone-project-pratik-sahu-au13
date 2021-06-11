const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 9000;
const cors = require("cors");
const MongoInit = require("./Config/Mongo");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const studentRoutes = require("./Routes/student");
const tutorRoutes = require("./Routes/tutor");
const courseRoutes = require("./Routes/course");

const app = express();

MongoInit();

app.use(cookieParser());
app.use(
  session({
    secret: "My_Secret_Key",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.static("public"));
app.use(express.json({ limit: "150mb" }));
app.use(express.urlencoded({ limit: "150mb", extended: true }));
app.use(cors());

app.use("/stu", studentRoutes);
app.use("/tut", tutorRoutes);
app.use("/tut", courseRoutes);

app.get("/", (req, res) => {
  res.send("Server is healthy, Health Check Passed!");
});

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});
