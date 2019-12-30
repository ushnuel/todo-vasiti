import Todo from '../model/todo';
import Feedback from '../Helpers/feedback';

export default class TodoController {
  static async create(req, res, next) {
    try {
      const todo = await Todo.create(req.body);
      const data = { ...todo, message: 'Todo created successfully' };
      Feedback.success(data, res, 201);
    } catch (error) {
      next(error);
    }
  }

  static async edit(req, res, next) {
    try {
      const td = await Todo.getTodo(req.params.id);
      const todo = await Todo.edit(req.body, td.todoid);
      const data = { ...todo, message: 'Todo edited successfully' };
      Feedback.success(data, res, 200);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const td = await Todo.getTodo(req.params.id);
      await Todo.delete(td.todoid);
    } catch (error) {
      next(error);
    }
  }

  static async feeds(req, res, next) {
    try {
      const todos = await Todo.getAll();
      const data = [...todos];
      Feedback.success(data, res, 200);
    } catch (error) {
      next(error);
    }
  }
}
