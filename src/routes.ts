import { Router } from 'express';
import CardsController from './controllers/CardsController';
import ThemesController from './controllers/ThemesController';
import UsersController from './controllers/UsersController';
import authMiddleware from './middlewares/authMiddleware';

const router = Router();

router.post('/cards', authMiddleware, CardsController.store);

router.get('/themes', authMiddleware, ThemesController.listAll);
router.post('/themes', authMiddleware, ThemesController.store);

router.post('/create', UsersController.store);
router.post('/authenticate', UsersController.login);

export default router;
