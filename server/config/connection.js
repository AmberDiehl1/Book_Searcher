const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://amberdiehl:WebDev.01@cluster0.u2ugabu.mongodb.net/Cluster0?retryWrites=true&w=majority' || 'mongodb://127.0.0.1:27017/googlebooks');

module.exports = mongoose.connection;
