# Use Node.js Alpine as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy the static files to the container
COPY out /app

# Install serve globally
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Command to serve the static files
CMD ["serve", "-l", "3000"]
