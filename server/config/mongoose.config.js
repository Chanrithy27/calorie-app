const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/products", {
    useNewURlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Establised a conenction to the database"))
    .catch((err => console.log("Unable to establish a connection to the database"), err));