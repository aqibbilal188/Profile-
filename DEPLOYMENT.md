# Deployment Guide - mohammedbilalai.com

## Step 1: Prepare Your Project

Your project is ready for deployment! All necessary files are in place.

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up or log in with your GitHub account

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Import your repository from GitHub (or upload the folder)
   - Vercel will auto-detect Next.js settings

3. **Configure Build Settings**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (2-3 minutes)

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd C:\PORTFOLIO
   vercel
   ```

4. **Follow the prompts**
   - Link to existing project or create new
   - Deploy to production

## Step 3: Connect Your Domain (mohammedbilalai.com)

### In Vercel Dashboard:

1. **Go to Your Project Settings**
   - Click on your project
   - Go to "Settings" → "Domains"

2. **Add Your Domain**
   - Enter: `mohammedbilalai.com`
   - Click "Add"
   - Also add: `www.mohammedbilalai.com` (optional but recommended)

3. **Get DNS Records from Vercel**
   - Vercel will show you DNS records to add:
     - Type: `A` or `CNAME`
     - Name: `@` or `www`
     - Value: Vercel's IP or CNAME value

### In Namecheap Dashboard:

1. **Log in to Namecheap**
   - Go to [namecheap.com](https://www.namecheap.com)
   - Log in to your account

2. **Go to Domain List**
   - Click "Domain List"
   - Find `mohammedbilalai.com`
   - Click "Manage"

3. **Go to Advanced DNS**
   - Click "Advanced DNS" tab

4. **Add DNS Records**
   - Remove existing A records (if any)
   - Add new records as shown by Vercel:
   
   **For Root Domain (mohammedbilalai.com):**
   - Type: `A Record`
   - Host: `@`
   - Value: Vercel's IP (Vercel will provide this)
   - TTL: Automatic or 300

   **For WWW (www.mohammedbilalai.com):**
   - Type: `CNAME Record`
   - Host: `www`
   - Value: `cname.vercel-dns.com` (or what Vercel provides)
   - TTL: Automatic or 300

5. **Save Changes**
   - Click the checkmark to save
   - DNS propagation can take 24-48 hours (usually much faster)

## Step 4: Verify Deployment

1. **Check Vercel Status**
   - Your site will be live at: `your-project.vercel.app`
   - Check if deployment is successful

2. **Check Domain**
   - After DNS propagates, visit: `mohammedbilalai.com`
   - Should redirect to your Vercel deployment

3. **SSL Certificate**
   - Vercel automatically provides SSL (HTTPS)
   - Your site will be secure automatically

## Important Notes:

- **DNS Propagation**: Can take up to 48 hours, but usually works within 1-2 hours
- **SSL Certificate**: Vercel provides free SSL automatically
- **Automatic Deployments**: Every push to your main branch will auto-deploy
- **Environment Variables**: Add any needed in Vercel dashboard → Settings → Environment Variables

## Troubleshooting:

- **Domain not working?** Wait for DNS propagation (check with `nslookup mohammedbilalai.com`)
- **Build errors?** Check Vercel build logs in the dashboard
- **Images not loading?** Make sure image paths are correct in your code

## Your Site Will Be Live At:
- `mohammedbilalai.com`
- `www.mohammedbilalai.com` (if configured)
- `your-project.vercel.app` (Vercel default URL)

