import { z } from 'zod';

const bikeValidationSchema = z.object({
  id: z.string(),
  name: z.string().nonempty('Name is required'),
  brand: z.string().optional(),
  price: z
    .number()
    .nonnegative()
    .refine((price) => price > 0, {
      message: 'Price is required and must be greater than 0',
    }),
  category: z.enum(['Mountain', 'Road', 'Hybrid', 'Electric'], {
    errorMap: (issue) => ({ message: `${issue} is not a valid bike category` }),
  }),
  description: z.string().nonempty('Description is required'),
  quantity: z
    .number()
    .nonnegative()
    .refine((quantity) => quantity >= 0, {
      message: 'Quantity is required and must be non-negative',
    }),
  inStock: z.boolean().refine((value) => value !== undefined, {
    message: 'InStock is required',
  }),
  isDeleted: z.boolean().optional().default(false),
});

export default bikeValidationSchema;
