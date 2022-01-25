const pool = require('../utils/pool');

module.exports = class Cat {
  id;
  breed;
  origin;
  coat;
  pattern;

  constructor(row) {
    this.id = row.id;
    this.breed = row.breed;
    this.origin = row.origin;
  }

  static async insert({ breed, origin }) {
    const { rows } = await pool.query(
      'INSERT INTO cats (breed, origin) VALUES ($1, $2) RETURNING *',
      [breed, origin]
    );
    return new Cat(rows[0]);
  }  

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM cats');
    return rows.map((row) => new Cat(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM cats WHERE id=$1', [id]);
    if (!rows[0]) return null;
    return new Cat(rows[0]);
  }

  static async updateById(id, { breed, origin }) {
    const { rows } = await pool.query('UPDATE cats SET breed=$1, origin=$2 WHERE id=$3 RETURNING *', [breed, origin, id]);
    
    if (!rows[0]) {        
      const error = new Error(`Order ${id} not found`);
      error.status = 404;
      throw error;
    } 
    return new Cat(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      'DELETE FROM orders WHERE id=$1 RETURNING *;',
      [id]
    );
    if (!rows[0]) return null;
    return new Cat(rows[0]);
  }

};
