const express = require("express");
const app = express();

app.use(express.static("dist"));

// use port 3000 unless there exists a preconfigured port
const port = process.env.PORT || 8080;

app.listen(port, () => console.log("Listening on port 8080!"));
