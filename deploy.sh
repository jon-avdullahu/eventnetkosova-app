#!/bin/bash

echo "Building and deploying EventNet Kosovo website to Vercel..."

# Install dependencies if needed
npm install

# Build the project
npm run build

# Deploy to Vercel
echo "Now run the following command to deploy:"
echo "npx vercel"

# Alternatively, uncomment the following line for automatic deployment
# npx vercel --prod

echo "Deployment steps completed!" 