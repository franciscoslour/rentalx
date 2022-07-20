import express from 'express';
import { categoriasRoutes } from './routes/categories.routes';
import { specificationRoutes } from './routes/specifications.routes'

const app = express();

app.use(express.json());

app.use("/categories", categoriasRoutes);
app.use("/specifications", specificationRoutes);

app.listen(3333, () => console.log("Server is running"));