# Use Node.js LTS (Long Term Support) version
FROM node:20-slim

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose the port specified in .env (default 3000)
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 