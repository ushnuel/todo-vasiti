import { Router } from 'express';
import TodoController from './controller/todo';

const router = Router();

router.get('todo/feeds', TodoController.feeds);
router.post('todo/create', TodoController.create);
router.patch('todo/:id/edit', TodoController.edit);
router.delete('todo/:id/delete', TodoController.delete);

export default router;
