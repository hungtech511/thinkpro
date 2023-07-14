const axios = require("axios");

export const instance = axios.create({
  baseURL: "https://thinkpro.vn/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});