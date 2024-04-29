const express = require("express");
const sequelize = require("./db/sequeldb");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

const router = require("./routes/route");

app.use("/api/vi", router);

sequelize
  .sync()
  //   .sync({ force: true })
  .then(() => {
    app.listen(port, () => {
      console.log(` app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
