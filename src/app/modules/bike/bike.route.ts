import express from 'express';
import { bikeControllers } from './bike.controller';

const router = express.Router();

router.post('/create-bike', bikeControllers.createbike);

router.get('/', bikeControllers.getAllBikes);

router.get('/:bikeId', bikeControllers.getSingleBike);

router.patch('/:bikeId', bikeControllers.UpdateBike);

router.delete('/:bikeId', bikeControllers.deleteBike);

export const BikeRoutes = router;
