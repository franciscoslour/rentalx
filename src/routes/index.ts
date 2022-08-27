import { Router } from 'express';
import { categoriasRoutes } from './categories.routes';
import { specificationRoutes } from './specifications.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use("/users", usersRoutes);
router.use("/categories", categoriasRoutes);
router.use("/specifications", specificationRoutes);

export { router };


