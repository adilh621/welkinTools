const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const app = express()
const port = 5000
const bodyParser = require("body-parser")

const userRoute = require("./routes/userRoutes")
const allUser = require("./routes/allUserRoutes")
const token = require("./routes/token")

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/user", userRoute)
app.use("/allUser", allUser)
app.use("/token", token)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

mongoose.connect(
    process.env.DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
    
    ()=>{
        console.log("connected to DB!")
    }
)