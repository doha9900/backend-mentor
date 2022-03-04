const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connection = require("./config/connection");
//const cors = require("cors");

// Create the server
const app = express();

// Connect the bd

var corsOptions = {
  origin: "http://localhost:8100",
};

app.use(cors(corsOptions));

connection();

app.set("port", 3000);
app.set("json spaces", 2);

//app.use(cors())
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/mentors", require("./routes/mentor"));
app.use("/api/v1/mentorizeds", require("./routes/mentorized"));
app.use("/api/v1/meetings", require("./routes/meeting"));

app.listen(app.get("port"), () => {
  console.log(`App listening port: ${app.get("port")}`);
});
