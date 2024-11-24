import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { BikeRoutes } from './app/modules/bike/bike.route';
import { OrderRoutes } from './app/modules/order/order.router';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/products', BikeRoutes);

app.use('/api/orders', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

export default app;
