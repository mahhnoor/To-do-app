# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./ 

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
