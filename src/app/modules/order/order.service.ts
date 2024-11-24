import { IOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrderInDB = async (orderData: IOrder) => {
  const result = await OrderModel.create(orderData);
  return result;
};

const calculateRevenueFromDB = async () => {
  const result = await OrderModel.aggregate([
    { $match: { isDeleted: false } },
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);

  return result.length ? result[0].totalRevenue : 0;
};

export const OrderServices = {
  createOrderInDB,
  calculateRevenueFromDB,
};
