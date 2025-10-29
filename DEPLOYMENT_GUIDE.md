# Deployment Guide for Awareness Network

This guide will walk you through deploying the complete Awareness Network project to GitHub and production environments.

## Step 1: Create GitHub Repository

Since the automated repository creation encountered permission issues, please follow these manual steps:

### 1.1 Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `Awareness-Network`
3. Description: "AI-Powered Memory Companion - Your personal knowledge and memory management platform"
4. Visibility: **Public** (or Private if preferred)
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### 1.2 Push Local Code to GitHub

```bash
cd /home/ubuntu/Awareness-Network

# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/Awareness-Network.git

# Push the code
git push -u origin main
```

## Step 2: Deploy Backend to Vercel

The NestJS backend can be deployed to Vercel for serverless hosting.

### 2.1 Install Vercel CLI

```bash
npm install -g vercel
```

### 2.2 Login to Vercel

Use the provided Vercel token:

```bash
vercel login
# Or use the token directly:
export VERCEL_TOKEN=o6ZTKMbam099zpwWNe9umquY
```

### 2.3 Create vercel.json Configuration

Create `/home/ubuntu/Awareness-Network/backend/vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "src/main.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/main.ts",
      "methods": ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"]
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### 2.4 Deploy Backend

```bash
cd /home/ubuntu/Awareness-Network/backend
vercel --prod
```

Follow the prompts and note the deployment URL (e.g., `https://awareness-network-backend.vercel.app`)

### 2.5 Configure Environment Variables on Vercel

Go to your Vercel project settings and add these environment variables:

- `DB_HOST`: Your PostgreSQL host
- `DB_PORT`: `5432`
- `DB_USERNAME`: Your database username
- `DB_PASSWORD`: Your database password
- `DB_DATABASE`: `awareness_network`
- `JWT_SECRET`: A secure random string
- `NODE_ENV`: `production`

## Step 3: Deploy AI Services

The Python AI services can be deployed to various platforms. Here are two options:

### Option A: Deploy to Railway

1. Go to https://railway.app
2. Create a new project
3. Connect your GitHub repository
4. Select the `ai-services` directory
5. Add environment variables:
   - `OPENAI_API_KEY`
   - `SHOTSTACK_API_KEY`
   - `PORT`: `5000`
6. Deploy

### Option B: Deploy to Render

1. Go to https://render.com
2. Create a new Web Service
3. Connect your GitHub repository
4. Build Command: `pip install -r requirements.txt`
5. Start Command: `python src/ocr/api.py`
6. Add environment variables (same as above)
7. Deploy

## Step 4: Setup PostgreSQL Database

You have several options for hosting PostgreSQL:

### Option A: Vercel Postgres

```bash
# Install Vercel Postgres
vercel postgres create awareness-network-db

# Get connection string
vercel postgres connection-string
```

### Option B: Supabase (Free Tier Available)

1. Go to https://supabase.com
2. Create a new project
3. Get the connection string from Project Settings > Database
4. Use this in your backend environment variables

### Option C: Railway

1. Go to https://railway.app
2. Create a new PostgreSQL database
3. Copy the connection details
4. Add to Vercel environment variables

## Step 5: Update Mobile App Configuration

Once your backend is deployed, update the mobile app configuration:

### 5.1 Update API URL

Edit `/home/ubuntu/Awareness-Network/mobile-app/app.json`:

```json
{
  "expo": {
    "extra": {
      "apiUrl": "https://your-backend-url.vercel.app"
    }
  }
}
```

### 5.2 Update API Service

Edit `/home/ubuntu/Awareness-Network/mobile-app/src/services/api.ts`:

```typescript
const API_URL = process.env.EXPO_PUBLIC_API_URL || 'https://your-backend-url.vercel.app';
```

## Step 6: Build and Submit Mobile App

### 6.1 Install EAS CLI

```bash
npm install -g eas-cli
```

### 6.2 Login to Expo

```bash
eas login
```

### 6.3 Configure EAS Build

```bash
cd /home/ubuntu/Awareness-Network/mobile-app
eas build:configure
```

### 6.4 Build for iOS

```bash
eas build --platform ios
```

### 6.5 Submit to App Store

```bash
eas submit --platform ios
```

You'll need:
- Apple Developer account ($99/year)
- App Store Connect API key
- App-specific password

## Step 7: Verify Deployment

### 7.1 Test Backend API

```bash
curl https://your-backend-url.vercel.app/api/health
```

Expected response:
```json
{
  "status": "ok"
}
```

### 7.2 Test AI Services

```bash
curl https://your-ai-services-url.railway.app/health
```

Expected response:
```json
{
  "status": "healthy",
  "service": "OCR Service",
  "version": "1.0.0"
}
```

### 7.3 Test Mobile App

1. Download Expo Go app on your phone
2. Scan the QR code from `pnpm start`
3. Test registration and login
4. Test business card scanning
5. Test memory creation

## Deployment Checklist

- [ ] GitHub repository created and code pushed
- [ ] Backend deployed to Vercel
- [ ] Database created and connected
- [ ] Environment variables configured
- [ ] AI services deployed
- [ ] Mobile app API URL updated
- [ ] Mobile app built for iOS
- [ ] App Store submission prepared
- [ ] All services tested and working

## Troubleshooting

### Backend won't start
- Check environment variables are set correctly
- Verify database connection string
- Check Vercel logs: `vercel logs`

### AI Services failing
- Verify OPENAI_API_KEY is valid
- Check API rate limits
- Review service logs

### Mobile app can't connect
- Verify API URL is correct
- Check CORS settings on backend
- Ensure backend is running

## Support

For deployment issues, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Railway Documentation](https://docs.railway.app)
- [Expo EAS Documentation](https://docs.expo.dev/eas/)

---

**Note**: All deployment URLs and credentials should be kept secure. Never commit API keys or passwords to the repository.
