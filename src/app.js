const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

// Auth routes
app.use("/api/auth", require("./routes/auth.routes"));

module.exports = app;
