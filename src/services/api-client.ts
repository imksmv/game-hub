import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "01152e6604804e6393cf02e6cd6ed231",
  },
});
