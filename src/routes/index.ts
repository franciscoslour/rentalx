import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { categoriasRoutes } from './categories.routes';
import { specificationRoutes } from './specifications.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use("/users", usersRoutes);
router.use("/categories", categoriasRoutes);
router.use("/specifications", specificationRoutes);
router.use(authenticateRoutes);

export { router };


