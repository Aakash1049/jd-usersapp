const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const conn = require("./seed/seeds");
// const path = require('path');


conn.on("connected ", () => {
 console.log("Connected to MongoDB! ");
});

app.use(express.json());
app.use(cors());



//routes
app.use( "/users", require("./routes/users")) ;
if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('frontend/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build','index.html')));
  // app.use(express.static(path.join(__dirname, 'frontend', 'dist')));
  // app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html')));

  }

app.listen(PORT, () => console.log("Server Is Running On Port: " + PORT));
