import axios from "axios";

const instance = axios.create({
  // The API (Clooud function) URL
  baseURL: "https://us-central1-challenge-9f988.cloudfunctions.net/api",
  // "http://localhost:5001/challenge-9f988/us-central1/api", // API (Cloud Function) URL
});

export default instance;
