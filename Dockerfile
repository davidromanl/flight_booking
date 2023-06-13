# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app/client

COPY client/package*.json client/index.html ./
COPY client/src ./src

RUN npm install
RUN npm run build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port on which your Express app runs
EXPOSE 3000

# Set the environment variables for MySQL connection
ENV POSTGRES_HOST=localhost
ENV POSTGRES_USER=root
ENV POSTGRES_PASSWORD=*
ENV POSTGRES_DB=2019
COPY create_tables.sql /docker-entrypoint-initdb.d/

# Start the application
CMD ["npm", "run","dev"]
