# UrbanBelagavi - Deployment Guide

## Production Deployment Checklist

### ✅ Phase 1: Pre-Deployment (Week 1)

- [x] Create GitHub repository with full documentation
- [x] Design database schema (PostgreSQL)
- [x] Set up JWT authentication system
- [x] Integrate Razorpay payment gateway
- [x] Create comprehensive deployment documentation
- [ ] Set up CI/CD pipeline (GitHub Actions)
- [ ] Configure Docker images for backend
- [ ] Create environment configuration files

### ✅ Phase 2: Local Testing (Week 2)

- [ ] Run frontend on localhost:5173
- [ ] Run backend on localhost:5000
- [ ] Test all API endpoints with Postman
- [ ] Test payment flow with Razorpay test cards
- [ ] Test authentication (registration, login, JWT)
- [ ] Test database operations
- [ ] Run integration tests
- [ ] Performance testing and optimization

### 🚀 Phase 3: Staging Deployment (Week 3)

- [ ] Deploy backend to Railway/Render (staging)
- [ ] Deploy frontend to Vercel (staging)
- [ ] Configure staging database
- [ ] Set up staging environment variables
- [ ] Run end-to-end tests on staging
- [ ] Load testing on staging
- [ ] Security audit and penetration testing
- [ ] Set up monitoring and logging (Sentry, LogRocket)

### 🎉 Phase 4: Production Deployment (Week 4)

- [ ] Backup production database
- [ ] Deploy backend to production (Railway/Render)
- [ ] Deploy frontend to production (Vercel)
- [ ] Configure custom domain
- [ ] Set up SSL/TLS certificates
- [ ] Configure CORS for production domain
- [ ] Update API endpoints in frontend
- [ ] Set up production monitoring
- [ ] Create incident response plan
- [ ] Go-live announcement

## Infrastructure Setup

### Backend Deployment (Railway/Render)

```bash
# Environment Variables
DB_HOST=your_postgres_host
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_strong_password
DB_NAME=urbanbelagavi

JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRY=7d

RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

NODE_ENV=production
PORT=5000
FRONTEND_URL=https://your-domain.com
```

### Frontend Deployment (Vercel)

```bash
# Environment Variables
VITE_API_BASE_URL=https://api.your-domain.com/api
VITE_RAZORPAY_KEY=your_razorpay_public_key
```

## Database Setup

### PostgreSQL Hosting Options:
1. **Railway** - Integrated with backend
2. **Render** - PostgreSQL addon
3. **AWS RDS** - Managed database service
4. **DigitalOcean** - Managed PostgreSQL

### Database Initialization

```bash
# Create database
creatdb urbanbelagavi

# Run migrations
npm run migrate

# Seed initial data
npm run seed
```

## Monitoring & Logging

### Recommended Services:
- **Error Tracking**: Sentry
- **Performance**: LogRocket
- **Analytics**: Google Analytics
- **Uptime Monitoring**: UptimeRobot
- **Log Aggregation**: ELK Stack or Papertrail

## Backup & Recovery

### Database Backups
```bash
# Daily automated backups
# Retention: 30 days
# Test recovery: Weekly
```

### Disaster Recovery Plan
- [ ] Backup storage (AWS S3, Google Cloud Storage)
- [ ] Recovery time objective (RTO): 4 hours
- [ ] Recovery point objective (RPO): 1 hour
- [ ] Document recovery procedures
- [ ] Test recovery quarterly

## Security Checklist

- [ ] SSL/TLS certificates (Let's Encrypt)
- [ ] Security headers configured
- [ ] CORS properly configured
- [ ] Rate limiting enabled (100 requests/minute)
- [ ] Input validation on all endpoints
- [ ] SQL injection prevention
- [ ] XSS protection
- [ ] CSRF tokens implemented
- [ ] API authentication required
- [ ] Regular security audits
- [ ] Dependency vulnerability scanning
- [ ] Secrets management (GitHub Secrets)

## Performance Optimization

- [ ] Database indexes created
- [ ] Query optimization complete
- [ ] Caching strategy implemented (Redis)
- [ ] CDN configured for static assets
- [ ] Image optimization
- [ ] Code splitting and lazy loading
- [ ] Compression enabled (gzip)

## CI/CD Pipeline

### GitHub Actions Workflow
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: npm test
      - name: Build
        run: npm run build
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to production
        run: npm run deploy
```

## Post-Deployment Tasks

- [ ] Monitor error logs
- [ ] Check performance metrics
- [ ] Test all critical user flows
- [ ] Verify payment processing
- [ ] Monitor database performance
- [ ] Check uptime monitoring
- [ ] Document known issues
- [ ] Create runbooks for common issues

## Scaling Considerations

### For 1000+ concurrent users:
- [ ] Load balancing
- [ ] Database replication
- [ ] Caching layer (Redis)
- [ ] CDN for static content
- [ ] Horizontal scaling (auto-scaling)
- [ ] Microservices architecture (future)

## Support & Maintenance

- **On-Call Schedule**: 24/7 rotation
- **SLA**: 99.9% uptime
- **Response Time**: Critical issues < 1 hour
- **Maintenance Window**: Sunday 2-4 AM IST
- **Update Cycle**: Monthly security patches, Quarterly major updates

## Useful Links

- [Railway Docs](https://railway.app/docs)
- [Render Docs](https://render.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [Razorpay Docs](https://razorpay.com/docs/)

## Contact

For deployment questions or issues, reach out to the development team.

Last Updated: December 31, 2025
