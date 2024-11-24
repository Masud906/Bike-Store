import { z } from 'zod';

export const orderSchema = z.object({
  email: z
    .string()
    .email('Please provide a valid email address')
    .nonempty('Email is required'),
  product: z.string().refine((id) => /^[a-f\d]{24}$/i.test(id), {
    message: 'Invalid ObjectId format for product',
  }),
  quantity: z
    .number()
    .int('Quantity must be an integer')
    .min(1, 'Quantity must be at least 1')
    .nonnegative('Quantity cannot be negative'),
  totalPrice: z
    .number()
    .nonnegative('Total price must be non-negative')
    .min(0, 'Total price must be greater than or equal to 0'),
});

export type IOrderValidation = z.infer<typeof orderSchema>;
