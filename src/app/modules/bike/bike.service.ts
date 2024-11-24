import { TBike } from './bike.interface';
import { Bike } from './bike.model';

const createBikeIntoDB = async (bikeData: TBike) => {
  const result = await Bike.create(bikeData);

  //static method

  return result;
};

const getAllBikeFromDB = async () => {
  const result = await Bike.find();
  return result;
};

const getSingleBikeFromDB = async (id: string) => {
  const result = await Bike.findOne({ id });
  return result;
};

const updateBikeIntoDB = async (id: string, payload: Partial<TBike>) => {
  const result = await Bike.findOneAndUpdate({ id }, payload);
  return result;
};

const deleteBikeFromDB = async (id: string) => {
  const result = await Bike.updateOne({ id }, { isDeleted: true });
  return result;
};

export const BikeServices = {
  createBikeIntoDB,
  getAllBikeFromDB,
  getSingleBikeFromDB,
  updateBikeIntoDB,
  deleteBikeFromDB,
};
