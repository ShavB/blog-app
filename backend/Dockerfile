# Use the official Node.js image
FROM node:18

# Create and change to the app directory
WORKDIR /usr/src/app/backend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy the .env file
COPY .env .env ./

# Build the NestJS application
RUN npm run build

# Expose the port the app runs on
EXPOSE 8000

# Command to run the application
CMD ["npm", "run", "start:prod"]
