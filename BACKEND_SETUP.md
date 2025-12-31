# UrbanBelagavi Backend Setup Guide

This document provides a comprehensive guide for setting up and extending the UrbanBelagavi backend.

## Project Structure

```
backend/
├── src/
│   ├── index.ts              # Main Express server
│   ├── config/
│   │   └── database.ts       # PostgreSQL/Sequelize configuration
│   ├── models/
│   │   ├── User.ts           # User model (customers and sellers)
│   │   ├── Product.ts        # Product/Service model
│   │   ├── Order.ts          # Order model
│   │   └── Payment.ts        # Payment model (for Razorpay)
│   ├── routes/
│   │   ├── auth.ts           # Authentication routes (login, register, JWT)
│   │   ├── products.ts       # Product/Service routes (CRUD operations)
│   │   ├── orders.ts         # Order management routes
│   │   └── payments.ts       # Razorpay payment integration routes
│   ├── middleware/
│   │   ├── auth.ts           # JWT authentication middleware
│   │   └── validation.ts     # Request validation middleware
│   └── controllers/
│       ├── authController.ts # Auth business logic
│       ├── productController.ts # Product business logic
│       ├── orderController.ts # Order business logic
│       └── paymentController.ts # Payment business logic
├── migrations/
│   └── init.sql              # Database schema and migrations
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript configuration
└── .env.example              # Environment variables template
```

## Installation & Setup

### Prerequisites
- Node.js (v16+)
- PostgreSQL (v12+)
- npm or yarn

### Steps

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Configure Environment Variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with:
   ```
   DB_NAME=urbanbelagavi
   DB_USER=postgres
   DB_PASSWORD=your_password
   DB_HOST=localhost
   DB_PORT=5432
   PORT=5000
   NODE_ENV=development
   JWT_SECRET=your_jwt_secret_key
   RAZORPAY_KEY_ID=your_razorpay_key
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   ```

3. **Create Database**
   ```bash
   createdb urbanbelagavi
   psql urbanbelagavi < migrations/init.sql
   ```

4. **Start Server**
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user (requires JWT)

### Products/Services
- `GET /api/products` - List all products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create product (seller only)
- `PUT /api/products/:id` - Update product (seller only)
- `DELETE /api/products/:id` - Delete product (seller only)
- `GET /api/products/search?q=keyword` - Search products

### Orders
- `GET /api/orders` - Get user's orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order status
- `DELETE /api/orders/:id` - Cancel order

### Payments (Razorpay)
- `POST /api/payments/create-order` - Create Razorpay order
- `POST /api/payments/verify` - Verify payment
- `GET /api/payments/:orderId` - Get payment status

## Database Models

### User
- UUID primary key
- Email (unique)
- Password (bcrypt hashed)
- Name, phone, address
- Role: 'user' | 'seller' | 'admin'
- Email verification status
- Timestamps

### Product
- UUID primary key
- Name, description, price
- Category, image URL
- Seller ID (foreign key to User)
- In-stock status, quantity
- Rating (0-5)
- Timestamps

### Order
- UUID primary key
- User ID, Product ID (foreign keys)
- Quantity, total price
- Status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
- Payment ID
- Delivery address
- Timestamps

### Payment
- UUID primary key
- Order ID (foreign key)
- Razorpay payment ID
- Amount, currency
- Status: 'pending' | 'completed' | 'failed'
- Method: 'card' | 'upi' | 'wallet' | 'netbanking'
- Timestamps

## Next Steps for Full Implementation

1. **Complete Model: src/models/Payment.ts**
   - Implement Razorpay payment tracking
   - Add transaction logging
   - Implement payment status updates

2. **Create Routes**
   - src/routes/auth.ts - JWT-based authentication
   - src/routes/products.ts - CRUD operations for products
   - src/routes/orders.ts - Order management
   - src/routes/payments.ts - Razorpay integration

3. **Create Middleware**
   - JWT authentication verification
   - Request validation using joi/zod
   - Error handling middleware
   - CORS configuration

4. **Create Controllers**
   - Business logic for each route
   - Database operations
   - Error handling

5. **Razorpay Integration**
   - Install razorpay package: `npm install razorpay`
   - Implement payment creation and verification
   - Webhook handling for payment status updates

6. **Testing**
   - Unit tests using Jest
   - Integration tests
   - API testing using Postman

7. **Deployment**
   - Deploy to Heroku, AWS, or DigitalOcean
   - Configure production environment variables
   - Set up CI/CD pipeline

## Security Best Practices

1. **Password Security**
   - Hash passwords using bcryptjs
   - Implement password strength requirements
   - Add rate limiting for login attempts

2. **JWT Tokens**
   - Set short expiration times (15 minutes)
   - Implement refresh tokens
   - Store tokens securely on client

3. **Data Protection**
   - Validate all input data
   - Implement SQL injection protection (Sequelize handles this)
   - Use HTTPS in production

4. **API Security**
   - Implement CORS properly
   - Add rate limiting
   - Validate API keys for sensitive endpoints

## Troubleshooting

### Database Connection Issues
- Ensure PostgreSQL is running
- Verify connection string in .env
- Check database user permissions

### JWT Token Issues
- Verify JWT_SECRET is set
- Check token expiration
- Ensure Authorization header format: `Bearer <token>`

### Razorpay Integration Issues
- Verify API keys in .env
- Check webhook configuration
- Test in sandbox mode first

## Useful Commands

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Testing
npm test

# Linting
npm run lint

# Database migrations
npm run migrate
```

## Contributing

When adding new features:
1. Create feature branch
2. Implement feature with tests
3. Submit pull request
4. Ensure all tests pass

## Support & Documentation

- [Express.js Docs](https://expressjs.com/)
- [Sequelize Docs](https://sequelize.org/)
- [Razorpay Docs](https://razorpay.com/docs/)
- [TypeScript Docs](https://www.typescriptlang.org/)
