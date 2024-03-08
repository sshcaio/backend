require('dotenv').config();
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  connectionString: process.env.POSTGRES_URL,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
});

export default pool;
