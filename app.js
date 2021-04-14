const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));

const PORT = 5000;


app.get('/', (req, res) =>{
    
    res.send("Hello, this is my first nodejs-app-docker. Cầu trời phật :'<");
})

app.use('/api/v1/student', require('./route/route'));



app.listen(PORT, (req, res) =>{
     console.log(`Server is running at http://localhost:${PORT}`);
})
