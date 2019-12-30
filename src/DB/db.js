import { Pool } from 'pg';
import config from '../config';

const pool = new Pool({
  connectionString: config.DB,
});

export default class DB {
  static async query(query, values, isArray = false) {
    const response = await pool.query(query, values);
    return isArray ? response.rows : response.rows[0];
  }
}
