import axios from "axios";

/*
- This file is short hand for writing axios to avoid writing the full URI everytime one uses axios, which
  helps in refactoring easily
- This file is typescript file else can't import it to vite-ts
*/

export const uploadToServer = axios.create({
  baseURL: "http://localhost:5000/uploader",
});
