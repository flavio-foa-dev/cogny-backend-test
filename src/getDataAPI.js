const axios = require('axios');
require('dotenv').config();
const apiAdrees = process.env.ENDPOINT_API;

async function getData() {
  try{
    const {data} = await axios.get(apiAdrees);
    return data["data"];
  } catch (error) {
    console.error("message:", error.message);
  }
}
getData()
module.exports = {
  getData,
}

