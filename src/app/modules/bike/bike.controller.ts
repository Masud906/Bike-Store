import { Request, Response } from 'express';
import { BikeServices } from './bike.service';
import bikeValidationSchema from './bike.validation';

const createbike = async (req: Request, res: Response) => {
  try {
    const { bike: bikeData } = req.body;

    //data Validation using zod

    const zodparsedData = bikeValidationSchema.parse(bikeData);

    const result = await BikeServices.createBikeIntoDB(zodparsedData);

    res.status(200).json({
      success: true,
      message: 'Bike is created successfullly',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const getAllBikes = async (req: Request, res: Response) => {
  try {
    const result = await BikeServices.getAllBikeFromDB();

    res.status(200).json({
      success: true,
      message: 'Bikes retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const getSingleBike = async (req: Request, res: Response) => {
  try {
    const { bikeId } = req.params;

    const result = await BikeServices.getSingleBikeFromDB(bikeId);

    res.status(200).json({
      success: true,
      message: 'Bikes retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const UpdateBike = async (req: Request, res: Response) => {
  try {
    const { bikeId } = req.params;
    const { bike } = req.body;
    const result = await BikeServices.updateBikeIntoDB(bikeId, bike);

    res.status(200).json({
      success: true,
      message: 'Bikes is updated successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const deleteBike = async (req: Request, res: Response) => {
  try {
    const { bikeId } = req.params;

    const result = await BikeServices.deleteBikeFromDB(bikeId);

    res.status(200).json({
      success: true,
      message: 'Bikes deleted successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

export const bikeControllers = {
  createbike,
  getAllBikes,
  getSingleBike,
  UpdateBike,
  deleteBike,
};
