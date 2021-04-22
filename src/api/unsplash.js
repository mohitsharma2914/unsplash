import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID k4ioQ2iB7J4dbcUfLCpuxH1c76hkDfBw2Zx0IW8P4BQ",
  },
});
