// ---- all imports ---
const express = require('express')
const app = express()
const cors = require('cors')
const route = require('./route/route')
const { default: mongoose } = require('mongoose')
const port = 8000

// --- middelwares ---
app.use(express.json())
app.use(cors())
app.use(route)

// -- database conect ---
try {
    mongoose.connect('mongodb+srv://rahul123:rahul123@cluster0.wczok1c.mongodb.net/rahul123?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => {
            console.log('database conected')
        })
        .catch((err) => {
            console.log(err);
        })
}
catch (err) {
    console.log(err);
}


// ---- server run ---
app.listen(port, () => {
    console.log(`port is running ${port}`);

})
