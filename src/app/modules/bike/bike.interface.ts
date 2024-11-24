// import { Model } from 'mongoose';

export type TBike = {
  id: string;
  name: string;
  brand?: string;
  price: number;
  category: 'Mountain' | 'Road' | 'Hybrid' | 'Electric';
  description: string;
  quantity: number;
  inStock: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

//for creating static

// export interface bikeModel extends Model<TBike> {
//   isUserExist(id: string): Promise<TBike | null>;
// }
