FROM node:20.11.1-slim

# Set the working directory
WORKDIR /magical-programmer-server-docker

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy all project files
COPY . .

# Expose the port your app runs on
EXPOSE 2333

# Run the application
CMD ["node", "index.js"]