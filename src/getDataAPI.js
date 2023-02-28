const axios = require('axios');
const dotenv = require('dotenv').config();

const apiAdrees = process.env.ENDPOINT_API;

async function getData() {
  try{
    const data = await axios.get(apiAdrees);
    const dataPase = data.data;
    console.log(dataPase);
  } catch (error) {
    console.error("message:", error.message);
  }
}
getData();
