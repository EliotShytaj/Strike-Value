require('dotenv').config();

const express = require("express")


//express app
const app = express()

app.get('/', (req, res) => {
    res.json({mssg: "Hello World!"})
  });

app.listen(3000, () => {
    console.log("PORT 3000!!")
})

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        // list for request from the client
        app.listen(process.env.PORT, () => {
            console.log(`Connect to MongoDB and listening on port ${process.env.PORT}`);
        })
    })

    .catch((error) => {
        console.log(error);
    })