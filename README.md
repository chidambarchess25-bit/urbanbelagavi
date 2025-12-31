# UrbanBelagavi - On-Demand Home Services Marketplace

🏠 Full-stack marketplace platform connecting service providers with customers in Belagavi, India.

## 🚀 Features

### For Customers
- Browse services by category (Cleaning, Beauty, Plumbing, Electrician, Carpentry, etc.)
- Search and filter services by location, price, and ratings
- Real-time booking with instant confirmation
- Secure payment processing via Razorpay
- Service provider ratings and reviews
- Booking history and management
- Push notifications for bookings and updates

### For Service Providers
- Create and manage service listings
- Real-time booking notifications
- Earnings tracking and analytics
- Customer reviews and ratings
- Profile management and portfolio
- Availability management

### Admin Features
- User and service provider management
- Transaction monitoring
- Dispute resolution
- Analytics dashboard

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Zustand** for state management
- **Axios** for API requests
- **React Query** for data fetching

### Backend
- **Node.js** with Express.js
- **PostgreSQL** for database
- **JWT** for authentication
- **Razorpay** for payments
- **bcrypt** for password hashing
- **Nodemailer** for email notifications

### DevOps
- **Docker** for containerization
- **GitHub Actions** for CI/CD
- **Vercel** for frontend deployment
- **Railway/Render** for backend deployment

## 📋 Prerequisites

- Node.js v18+
- PostgreSQL 13+
- npm or yarn
- Git
- Razorpay account (for payments)

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/chidambarchess25-bit/urbanbelagavi.git
cd urbanbelagavi
```

### 2. Frontend Setup

```bash
cd frontend
npm install

# Create .env.local
echo 'VITE_API_BASE_URL=http://localhost:5000/api' > .env.local
echo 'VITE_RAZORPAY_KEY=your_razorpay_key' >> .env.local

npm run dev
```

Frontend runs on `http://localhost:5173`

### 3. Backend Setup

```bash
cd backend
npm install

# Create .env
cp .env.example .env
# Edit .env with your database credentials

# Run database migrations
npm run migrate

# Start server
npm start
```

Backend runs on `http://localhost:5000`

### 4. Database Setup

```bash
# Create PostgreSQL database
psql -U postgres -c "CREATE DATABASE urbanbelagavi;"

# Run migrations
cd backend
npm run migrate
```

## 📁 Project Structure

```
urbanbelagavi/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   └── App.tsx
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── index.ts
│   ├── migrations/
│   ├── package.json
│   ├── Dockerfile
│   └── docker-compose.yml
└── README.md
```

## 🔐 Environment Variables

### Backend (.env)

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=urbanbelagavi

JWT_SECRET=your_jwt_secret_key
JWT_EXPIRY=7d

RAZORPAY_KEY_ID=rzp_test_xxxxx
RAZORPAY_KEY_SECRET=your_secret_key

EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env.local)

```
VITE_API_BASE_URL=http://localhost:5000/api
VITE_RAZORPAY_KEY=your_razorpay_key
```

## 🧪 Testing

### Razorpay Test Cards

**Successful Payment:**
- Card Number: 4111111111111111
- Expiry: 12/25
- CVV: 123

**Failed Payment:**
- Card Number: 5105105105105100
- Expiry: 12/25
- CVV: 123

## 🚀 Deployment

### Deploy Backend (Railway/Render)

1. Push code to GitHub
2. Connect GitHub repository to Railway/Render
3. Set environment variables
4. Deploy automatically on git push

### Deploy Frontend (Vercel)

1. Connect GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on git push

## 📚 API Documentation

See [API_DOCS.md](./API_DOCS.md) for detailed API endpoints.

### Base URL
- Development: `http://localhost:5000/api`
- Production: `https://api.yourdomain.com/api`

### Authentication
All protected routes require Bearer token in Authorization header:
```
Authorization: Bearer your_jwt_token
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 👨‍💻 Authors

- Chidambar Navalgund - Full-stack development

## 📞 Support

For support, email support@urbanbelagavi.com or open an issue on GitHub.

## 🎯 Roadmap

- [ ] Mobile app (iOS/Android)
- [ ] Real-time chat between users
- [ ] Advanced analytics dashboard
- [ ] AI-powered recommendations
- [ ] Multi-language support
- [ ] Subscription plans
- [ ] Service packages
- [ ] Referral system
