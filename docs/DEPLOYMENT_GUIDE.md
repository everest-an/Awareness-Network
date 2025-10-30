# Awareness Network - Deployment Guide

## Overview

This guide covers deploying the Awareness Network web application to Vercel and configuring custom domain with Aliyun (阿里云) DNS.

## Prerequisites

- Vercel account (free tier available)
- Vercel CLI installed: `npm i -g vercel`
- Aliyun account with domain registered
- Vercel token: `o6ZTKMbam099zpwWNe9umquY`

## Part 1: Deploy to Vercel

### Step 1: Prepare Project

```bash
# Navigate to web app directory
cd /home/ubuntu/awareness-network-web

# Ensure dependencies are installed
pnpm install

# Test build locally
pnpm build
```

### Step 2: Login to Vercel

```bash
# Set Vercel token as environment variable
export VERCEL_TOKEN=o6ZTKMbam099zpwWNe9umquY

# Login using token
vercel login --token $VERCEL_TOKEN

# Or login interactively
vercel login
```

### Step 3: Deploy to Vercel

```bash
# Deploy to production
vercel --prod

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No (first time) / Yes (subsequent)
# - Project name? awareness-network-web
# - Directory? ./ (current directory)
# - Override settings? No
```

### Step 4: Configure Environment Variables

After deployment, add environment variables in Vercel dashboard:

1. Go to https://vercel.com/dashboard
2. Select your project: `awareness-network-web`
3. Go to Settings → Environment Variables
4. Add the following variables:

```
DATABASE_URL=your_tidb_connection_string
JWT_SECRET=your_jwt_secret
VITE_APP_ID=your_manus_app_id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://oauth.manus.im
OWNER_OPEN_ID=your_open_id
OWNER_NAME=your_name
VITE_APP_TITLE=Awareness Network
VITE_APP_LOGO=your_logo_url
BUILT_IN_FORGE_API_URL=your_forge_api_url
BUILT_IN_FORGE_API_KEY=your_forge_api_key
```

5. Click "Save"
6. Redeploy: `vercel --prod`

### Step 5: Verify Deployment

Your app will be available at:
- Production: `https://awareness-network-web.vercel.app`
- Or custom Vercel domain: `https://your-project-name-xxx.vercel.app`

Test the deployment:
```bash
curl https://awareness-network-web.vercel.app
```

## Part 2: Aliyun DNS Configuration

### Option A: Use Vercel Domain (Recommended)

**Advantages:**
- Automatic HTTPS with SSL certificate
- Global CDN
- No DNS configuration needed

**Steps:**
1. Use the Vercel-provided URL: `https://awareness-network-web.vercel.app`
2. Share this URL with users
3. No additional configuration required

### Option B: Custom Domain with Aliyun DNS

**Prerequisites:**
- Domain registered with Aliyun (e.g., `example.com`)
- Access to Aliyun DNS console

#### Step 1: Add Domain to Vercel

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Click "Add Domain"
3. Enter your domain:
   - For root domain: `example.com`
   - For subdomain: `app.example.com` (recommended)
4. Click "Add"

#### Step 2: Get Vercel DNS Records

Vercel will show you the required DNS records. Typically:

**For Root Domain (example.com):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 600
```

**For Subdomain (app.example.com):**
```
Type: CNAME
Name: app
Value: cname.vercel-dns.com
TTL: 600
```

#### Step 3: Configure Aliyun DNS

1. **Login to Aliyun Console**
   - Go to https://dns.console.aliyun.com
   - Login with your Aliyun account

2. **Select Your Domain**
   - Find your domain in the list (e.g., `example.com`)
   - Click "解析设置" (DNS Settings)

3. **Add DNS Records**

   **For Root Domain:**
   - Click "添加记录" (Add Record)
   - Record Type: `A`
   - Host Record: `@`
   - ISP Line: `默认` (Default)
   - Record Value: `76.76.21.21`
   - TTL: `10分钟` (10 minutes)
   - Click "确认" (Confirm)

   **For Subdomain (Recommended):**
   - Click "添加记录" (Add Record)
   - Record Type: `CNAME`
   - Host Record: `app` (or your preferred subdomain)
   - ISP Line: `默认` (Default)
   - Record Value: `cname.vercel-dns.com`
   - TTL: `10分钟` (10 minutes)
   - Click "确认" (Confirm)

4. **Add WWW Redirect (Optional)**
   - Click "添加记录" (Add Record)
   - Record Type: `CNAME`
   - Host Record: `www`
   - Record Value: `cname.vercel-dns.com`
   - TTL: `10分钟`
   - Click "确认"

#### Step 4: Verify DNS Configuration

Wait 5-10 minutes for DNS propagation, then verify:

```bash
# Check A record (root domain)
dig example.com +short
# Should return: 76.76.21.21

# Check CNAME record (subdomain)
dig app.example.com +short
# Should return: cname.vercel-dns.com

# Or use nslookup
nslookup app.example.com
```

#### Step 5: Verify in Vercel

1. Go back to Vercel Dashboard → Domains
2. Wait for "Valid Configuration" status
3. Vercel will automatically provision SSL certificate (may take 1-2 minutes)
4. Once ready, your site will be accessible at `https://app.example.com`

### Option C: Multiple Domains

You can add multiple domains pointing to the same Vercel deployment:

1. Primary: `app.example.com` (for users)
2. Staging: `staging.example.com` (for testing)
3. API: `api.example.com` (for backend)

Repeat Step 2-4 for each subdomain.

## Part 3: SSL Certificate

### Automatic SSL (Vercel)

Vercel automatically provisions SSL certificates via Let's Encrypt:
- Free
- Auto-renewal
- Supports wildcard domains
- No configuration needed

### Verify SSL

```bash
# Check SSL certificate
openssl s_client -connect app.example.com:443 -servername app.example.com

# Or visit in browser
https://app.example.com
```

## Part 4: Aliyun DNS Best Practices

### 1. Use Subdomain for App

**Recommended:**
```
app.example.com → Vercel (Web App)
api.example.com → Vercel (Backend API)
www.example.com → Redirect to app.example.com
example.com → Landing page or redirect
```

**Why:**
- Easier to manage
- Better for CDN
- Allows separate services

### 2. TTL Configuration

**Development:** 600 seconds (10 minutes)
- Fast DNS updates
- Quick testing

**Production:** 3600 seconds (1 hour)
- Better caching
- Reduced DNS queries

### 3. Enable DNSSEC (Optional)

In Aliyun DNS console:
1. Go to domain settings
2. Enable "DNSSEC"
3. Improves security against DNS spoofing

### 4. Monitor DNS

Use Aliyun Cloud Monitor:
1. Go to https://cloudmonitor.console.aliyun.com
2. Add DNS monitoring
3. Set alerts for DNS failures

## Part 5: Deployment Workflow

### Continuous Deployment

Vercel automatically deploys on git push:

```bash
# Make changes
git add .
git commit -m "Update feature"

# Push to main branch (triggers production deploy)
git push origin main

# Push to dev branch (triggers preview deploy)
git push origin dev
```

### Manual Deployment

```bash
# Deploy to production
vercel --prod

# Deploy to preview
vercel

# Deploy specific branch
vercel --prod --branch=main
```

### Rollback

```bash
# List deployments
vercel ls

# Promote previous deployment
vercel promote <deployment-url>
```

## Part 6: Performance Optimization

### 1. Enable Vercel Edge Network

Vercel automatically uses global CDN. Optimize further:

**vercel.json:**
```json
{
  "regions": ["hkg1", "sin1", "sfo1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600, s-maxage=86400"
        }
      ]
    }
  ]
}
```

### 2. Optimize Assets

```bash
# Compress images
pnpm add -D imagemin imagemin-webp

# Enable Brotli compression (automatic on Vercel)
```

### 3. Monitor Performance

Use Vercel Analytics:
1. Go to Project → Analytics
2. View Core Web Vitals
3. Monitor real user data

## Part 7: Troubleshooting

### Issue: DNS Not Resolving

**Solution:**
1. Wait 10-30 minutes for DNS propagation
2. Clear local DNS cache:
   ```bash
   # macOS
   sudo dscacheutil -flushcache
   
   # Windows
   ipconfig /flushdns
   
   # Linux
   sudo systemd-resolve --flush-caches
   ```
3. Use different DNS server (e.g., 8.8.8.8)

### Issue: SSL Certificate Error

**Solution:**
1. Verify DNS is correctly configured
2. Wait for Vercel to provision certificate (up to 24 hours)
3. Check domain ownership in Vercel dashboard
4. Try removing and re-adding domain

### Issue: 404 Not Found

**Solution:**
1. Check Vercel build logs
2. Verify `vercel.json` configuration
3. Ensure routes are correctly defined
4. Check if files are in correct directory

### Issue: Environment Variables Not Working

**Solution:**
1. Verify variables are set in Vercel dashboard
2. Redeploy after adding variables
3. Check variable names (case-sensitive)
4. For client-side variables, use `VITE_` prefix

### Issue: Build Failed

**Solution:**
1. Check build logs in Vercel dashboard
2. Test build locally: `pnpm build`
3. Verify all dependencies in package.json
4. Check Node.js version compatibility

## Part 8: Monitoring and Maintenance

### 1. Setup Uptime Monitoring

Use Aliyun Cloud Monitor or third-party services:
- UptimeRobot (free)
- Pingdom
- StatusCake

### 2. Error Tracking

Integrate error tracking:
```bash
pnpm add @sentry/react @sentry/trpc
```

### 3. Analytics

Add analytics:
```bash
pnpm add @vercel/analytics
```

### 4. Logs

View logs in Vercel:
1. Go to Project → Logs
2. Filter by type (Build, Runtime, Edge)
3. Export logs if needed

## Quick Reference

### Aliyun DNS Records

| Type  | Host | Value                 | Purpose           |
|-------|------|-----------------------|-------------------|
| A     | @    | 76.76.21.21          | Root domain       |
| CNAME | app  | cname.vercel-dns.com | App subdomain     |
| CNAME | www  | cname.vercel-dns.com | WWW redirect      |
| CNAME | api  | cname.vercel-dns.com | API subdomain     |

### Vercel CLI Commands

```bash
# Deploy to production
vercel --prod

# Deploy to preview
vercel

# List deployments
vercel ls

# View logs
vercel logs

# Remove deployment
vercel rm <deployment-id>

# Link local project
vercel link

# Pull environment variables
vercel env pull
```

### DNS Propagation Check

```bash
# Check DNS globally
https://dnschecker.org

# Check specific DNS server
dig @8.8.8.8 app.example.com

# Check with nslookup
nslookup app.example.com 8.8.8.8
```

## Support

- **Vercel Documentation**: https://vercel.com/docs
- **Aliyun DNS Help**: https://help.aliyun.com/product/29697.html
- **DNS Checker**: https://dnschecker.org
- **SSL Checker**: https://www.ssllabs.com/ssltest/

---

Last Updated: October 31, 2025
