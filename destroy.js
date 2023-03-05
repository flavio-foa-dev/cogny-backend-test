const massive = require('massive');
const { DATABASE_SCHEMA, DATABASE_URL, SHOW_PG_MONITOR } = require('./config');

async function connection() {
  const db = await massive({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  })


const result = await db[DATABASE_SCHEMA].api_data.destroy(21)
console.log("Destroy", result)

const result2 = await db[DATABASE_SCHEMA].api_data.find();
console.log('result2 >>>', JSON.stringify(result2, null, 2));

}
connection()


