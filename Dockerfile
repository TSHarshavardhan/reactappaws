FROM node:18-slim

# Set working directory
WORKDIR /app

# Install OpenSSL if needed (optional, often already present)
RUN apt-get update && apt-get install -y openssl

# Copy package files first for cache optimization
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the source
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Start Vite with external access enabled
CMD ["npm", "run", "dev", "--", "--host"]
