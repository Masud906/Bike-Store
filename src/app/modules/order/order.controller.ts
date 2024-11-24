import { Request, Response } from 'express';
import { orderSchema } from './order.validation';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const validatedData = orderSchema.parse(req.body);

    const newOrder = await OrderServices.createOrderInDB(validatedData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: newOrder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create order',
      error: error instanceof Error ? error.message : 'Validation error',
    });
  }
};

const getRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await OrderServices.calculateRevenueFromDB();

    res.status(200).json({
      success: true,
      message: 'Total revenue calculated successfully',
      data: { totalRevenue },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to calculate revenue',
      error: error instanceof Error ? error.message : 'Server error',
    });
  }
};

export const OrderControllers = {
  createOrder,
  getRevenue,
};
