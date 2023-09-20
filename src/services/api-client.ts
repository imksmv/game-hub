import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "c5e100fe5f984301badbe37fb290779e",
  },
});
