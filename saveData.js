const massive = require('massive');
const { DATABASE_SCHEMA, DATABASE_URL, SHOW_PG_MONITOR } = require('./config');
const { getData } = require('./src/getDataAPI.js')

async function connection() {
  const db = await massive({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  })

  const data = await getData()
  const result1 = await db.api_data.insert(
    { doc_record: {data}}
  )
  console.log("---", result1)
}
connection()