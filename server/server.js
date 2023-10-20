/* eslint-disable no-undef */

/***
- Using vanilla js to avoid unnecessary complexity of configuring ts-transpilers that conflict with vite
  and results in various bugs. 
- This is a test server for testing <Uploader> component (file uploads and server processing)
- This is the Server API
***/

import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); // absolute path points to server folder

app.use(cors()); // using cors middleware to enable CORS on all routes
app.use(express.json({ limit: "5000kb" })); // added middleware to enable JSON parsing, and increasing body-parser limit to 5MB

// app.use(express.static(join(__dirname))); // setting server folder as static folder

const PORT = process.env.PORT || 5000; // process.env.PORT for deployment

app.listen(PORT, () => {
  console.log("Server started on PORT", PORT);
});

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "../public/pen_icon.svg"));
});

app.post("/uploader", (req, res) => {
  console.log(req.body);
  res.send(`POST received with data: ${req.body.imageData.coreData}`);
});
