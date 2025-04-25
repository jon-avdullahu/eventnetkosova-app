# EventNet Kosovo - Event Connectivity Solutions

EventNet Kosovo is a specialized mobile network service provider offering temporary internet and networking solutions for events of all sizes.

## Overview

This website showcases EventNet Kosovo's plug-and-play mesh network rental service for events, construction sites, and temporary venues. The service includes pre-configured mesh routers that auto-connect with a web dashboard for monitoring.

## Features

- Modern, responsive design
- Dark mode support
- Comprehensive sections covering services, pricing, testimonials, and more
- Contact form for inquiries
- Animated UI elements with Framer Motion

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- React Icons
- Deployed on Vercel

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone <repository-url>
cd eventnet-kosovo
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This website is configured for easy deployment on Vercel. Simply push to your GitHub repository and connect it to Vercel for automatic deployments.

## Project Structure

- `/src/components` - UI components for the website
- `/src/app` - Next.js app directory with page components and global styles
- `/public` - Static assets

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For inquiries about the EventNet Kosovo service, please contact:
- Email: contact@eventnet-ks.com
- Phone: +383 44 123 456

## MongoDB Integration

This application now includes MongoDB integration for user authentication. To set it up:

1. Create a MongoDB Atlas account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster and database
3. Get your MongoDB connection string from the Atlas dashboard
4. Create a `.env.local` file in the root of your project with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret_string
```

You can generate a secure secret with `openssl rand -base64 32` or use any random string generator.

## Deploying to Vercel

This application is configured for easy deployment to Vercel. Follow these steps:

1. Push your code to a GitHub repository
2. Sign up for a Vercel account and connect your GitHub account
3. Create a new project in Vercel and import your repository
4. Add the following environment variables in Vercel's dashboard under Settings > Environment Variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `NEXTAUTH_URL`: Your production URL (e.g., https://your-app.vercel.app)
   - `NEXTAUTH_SECRET`: A secure random string for session encryption

Once deployed, your application will handle user authentication and MongoDB integration automatically.

## Authentication Features

The application now includes:

- User registration with secure password hashing
- User login with credentials (email/password)
- Protected routes that require authentication
- User session management
- Responsive login/register forms
