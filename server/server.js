//////////// UPDATE CHECK
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");



///////////// MONGO DB CONNECTION
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) throw err;
  console.log("DB Connected!");
});
///////////////////////////////////////



//////////// APPLY MIDDLEWARES
app.use(express.json());



////////// API ROUTES
const imageApi = require("./routes/api/imageApi");
app.use("/api/image", imageApi);
///////////////////////////////////////

app.use(express.static('client/build'));

if (process.env.NODE_ENV === 'production') {
  const path = require("path");
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  });
}


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server is running!");
})