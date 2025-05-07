import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url";
import httplogger from "./middleware/httplogger";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(httplogger);

dotenv.config({ path: path.join(__dirname, "../.env") });

app.get("/", (req, res) => {
  console.log(req.method);
  res.json({ Hello: "Hello world!" });
});

app.listen(PORT, () => {
  console.log("Giygas is listening on port 3000...");
});
