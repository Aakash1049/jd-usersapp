const mongoose = require('mongoose');
if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

const mongoUri = process.env.MY_MONGO_URI;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
});

module.exports = mongoose.connection;

// "mongodb+srv://jaydeep:cf7oXlVlFhxQmb9@cluster0.0z436rp.mongodb.net/?retryWrites=true&w=majority"
