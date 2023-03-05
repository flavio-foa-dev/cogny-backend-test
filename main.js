const massive = require('massive');
const { DATABASE_SCHEMA, DATABASE_URL, SHOW_PG_MONITOR } = require('./config');
const { getData } = require('./src/getDataAPI.js')
filterData()

async function filterData () {
  const data = await getData()
  const filteredData = data.filter((item) => item.Year < "2021" && item.Year > "2017")
  const totalPopulations = filteredData.reduce((acc, item) => acc + item.Population, 0)
  console.log("----- Population anos 2020, 2019, 2018 -----")
  console.log("TOTAL:", totalPopulations)
}


