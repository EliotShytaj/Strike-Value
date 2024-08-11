const express = require("express")


//express app
const app = express()

app.get('/', (req, res) => {
    res.json({mssg: "Hello World!"})
  });

app.listen(3000, () => {
    console.log("PORT 3000!!")
})