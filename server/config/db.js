const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect("mongodb+srv://solvitwbjee:mDD8Mh91XSenCatS@soivit.nqnpubn.mongodb.net/Sandipan_WEb?retryWrites=true&w=majority&appName=soivit", {
   
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;