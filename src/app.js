const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())

app.get('/', function (req, res) {
  res.send("hello,i'm ready")
})

require("./routes/getUsers")(app);
require("./routes/addCrianca")(app);

app.listen(3000, () => {
  console.log('Servidor Online')
})
