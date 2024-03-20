require("dotenv").config()
const express= require("express")

const cors=require("cors")

const corsOptions=require("./config/corsOptions")
const connectDB = require("./config/dbConn")
const { default: mongoose } = require("mongoose")
const PORT=process.env.PORT || 7788
const app = express()

connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))

app.use("/api/category",require("./routes/categoryRoute"))
app.use("/api/chef",require("./routes/chefRoute"))
app.use("/api/customer",require("./routes/customerRoute"))
app.use("/api/auth",require("./routes/authRoute"))
app.use("/api/order",require("./routes/orderRoute"))
app.use("/api/product",require("./routes/productRoute"))
app.use("/api/country",require("./routes/countryRoute"))

mongoose.connection.once('open',()=>{
    console.log('connected to MongoDB')
    app.listen(PORT,()=>{
        console.log(`Server runing on port ${PORT}`)
        }) 
})

mongoose.connection.on('error',err=>{
    console.log(err)
})
