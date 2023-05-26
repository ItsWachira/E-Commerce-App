const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://user1:1234@nodejs-jwt-db.h2adpmh.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((result) => {
      console.log(`MongoDB connected to server: ${result.connection.host}`);
    })
    .catch((err) => {
      console.log("error connecting to database");
      console.log(err);
    });
};

module.exports = connectDatabase;
