const express = require("express");
const app = express();
const Api_Routes = require("./routes/routes");
const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", Api_Routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
