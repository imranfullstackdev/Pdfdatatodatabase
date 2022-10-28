const express = require("express");
const app = express();
const port = 8000;
const cors=require('cors')
app.use(express.json())
app.use(cors())
require("./Router/router");

app.use("/", require("./Router/router"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
