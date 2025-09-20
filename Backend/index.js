const express = require('express');
require('dotenv').config();
const cors = require('cors');
const taksRoutes = require('./routes/taskRoutes')
const { default: mongoose } = require('mongoose');  

const PORT = process.env.PORT;

//create server
const server = express();

//handle cors for different source access
server.use(cors({
  origin: [""], // your frontend domain
  methods: ["GET", "POST", "DELETE"],
  credentials: true
}));

//universal middleware
server.use(express.json());

server.use('/',taksRoutes)

 const dbName = process.env.DB_NAME;
 const dbPort = process.env.DB_PORT;
 const dbHost = process.env.DB_HOST;
mongoose.connect(`${dbHost}:${dbPort}/${dbName}`,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log("thumbs up DB IS CONNECTED")
})

server.listen(PORT, () => {
    console.log("Thumbs up every thing is good port listning is active on expressJS",PORT)
})