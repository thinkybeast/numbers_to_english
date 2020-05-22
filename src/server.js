import express from "express";
import cors from "cors";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send(`Number to English is waiting for your numbers.`);
});

app.use("/v1", router);

export default app;
