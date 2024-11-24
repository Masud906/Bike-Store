# Bike Store
This project is a Bike Store API built with Express and TypeScript, using MongoDB for data storage and Mongoose for schema definition and data management. The application allows users to perform CRUD operations on bikes and manage orders, ensuring data integrity and smooth inventory management.

##Features

### Product (Bike) Management
Create a Bike: Add new bikes to the inventory with comprehensive details such as name, brand, price, category, description, quantity, and stock status.
Retrieve All Bikes: Fetch a list of all bikes, filterable by search term (e.g., category, name, or brand).
Retrieve a Specific Bike: Get detailed information about a specific bike by its unique ID.
Update a Bike: Modify bike details like price, quantity, and other attributes.
Delete a Bike: Remove a bike from the inventory.

### Order Management
Place an Order: Customers can place orders by providing their email, bike ID, quantity, and total price. Inventory is automatically updated to reflect the order.
Inventory Management: Automatically reduces the bike quantity in stock after an order and sets the stock status to false when the quantity reaches zero. Prevents orders if stock is insufficient.
Revenue Calculation: Calculate the total revenue from all orders using a MongoDB aggregation pipeline.

### Error Handling
Comprehensive error responses for validation issues, resource not found, and other unexpected errors. Includes error messages, validation details, and stack traces in development.

## Technologies Used
Backend Framework: Express.js
Programming Language: TypeScript
Database: MongoDB
ODM Library: Mongoose

## API Endpoints

### Product (Bike) Endpoints

Create a Bike
POST /api/products
Retrieve All Bikes
GET /api/products
Retrieve a Specific Bike
GET /api/products/:productId
Update a Bike
PUT /api/products/:productId
Delete a Bike
DELETE /api/products/:productId

### Order Endpoints
Place an Order
POST /api/orders
Calculate Revenue
GET /api/orders/revenue

