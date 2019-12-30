import DB from '../DB/db';
import ErrorHandler from '../Helpers/errorHandler';

export default class TodoModel {
  static async create({ title, description }) {
    const query = `
    INSERT INTO 
    todo(title, description)
    VALUES($1, $2)
    RETURNING *`;
    const values = [title, description];
    const todo = await DB.query(query, values).catch((error) => {
      throw new Error(error.message);
    });
    return todo;
  }

  static async getTodo(id) {
    const query = `
    SELECT * FROM todo
    WHERE todoid = $1
    `;
    const value = [id];
    const todo = await DB.query(query, value).catch((error) => {
      throw new Error(error.message);
    });
    if (!todo) {
      throw new ErrorHandler('Todo does not exist', 404);
    }
    return todo;
  }

  static async delete(id) {
    const query = `
    DELETE 
    FROM todo
    WHERE todoid = $1 
    `;
    const value = [id];
    await DB.query(query, value).catch((err) => {
      throw new ErrorHandler(err.message, 400);
    });
  }
  static async edit({ title, description }, id) {
    const query = `
    UPDATE todo
    SET title = $1, description = $2
    WHERE todoid = $3
    RETURNING *`;
    const values = [title, description, id];
    const todo = await DB.query(query, values).catch((err) => {
      throw new ErrorHandler(err.message, 400);
    });
    return todo;
  }

  static async getAll() {
    const query = `
    SELECT * FROM todo
    ORDER BY todoid DESC
    `;
    const todos = await DB.query(query, '', true).catch((error) => {
      throw new ErrorHandler(error.message, 400);
    });
    return todos;
  }
}
