# Use a Node image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY ./frontend-webapp/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./frontend-webapp ./

# Build the React app
RUN npm run build

# Install a lightweight server to serve the built files
RUN npm install -g serve

# Expose the application on port 5173
EXPOSE 5173

# Start the app on port 5173
CMD ["serve", "-s", "dist", "-l", "5173"]
