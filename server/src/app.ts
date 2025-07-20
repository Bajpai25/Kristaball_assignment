import express from "express";
import routes from "../modules/index"

const app = express();

app.use(express.json());
app.use("/api", routes);

export default app;
