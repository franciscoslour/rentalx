import { Router } from 'express';
import { categoriasRoutes } from './categories.routes';
import { specificationRoutes } from './specifications.routes';

const router = Router();

router.use("/categories", categoriasRoutes);
router.use("/specifications", specificationRoutes);

export { router };


