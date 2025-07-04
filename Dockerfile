FROM node:18

WORKDIR /app

# Copy only package.json and lock file first
COPY package*.json ./

RUN npm install

# Copy the rest of the app
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Start the Vite dev server and make it accessible externally
CMD ["npm", "run", "dev", "--", "--host"]
