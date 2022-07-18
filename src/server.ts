import express from 'express';
import { categoriasRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());

app.use("/categories",categoriasRoutes);

app.listen(3333, () => console.log("Server is running"));