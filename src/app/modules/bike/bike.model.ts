import { model, Schema } from 'mongoose';
import { TBike } from './bike.interface';

const bikeSchema = new Schema<TBike>(
  {
    id: { type: String, required: [true, 'ID is required'], unique: true },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    brand: { type: String },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    category: {
      type: String,
      enum: {
        values: ['Mountain', 'Road', 'Hybrid', 'Electric'],
        message: '{VALUE} is not a valid bike category',
      },
    },
    description: {
      type: String,
      required: [true, 'description is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'quantity is required'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'inStock  is required'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);
//creation couston statioc mathod
// bikeSchema.statics.isUserExist = async function (id: string) {
//   const existingUser = await Bike.findOne({ id });

//   return existingUser;
// };

export const Bike = model<TBike>('bike', bikeSchema);
