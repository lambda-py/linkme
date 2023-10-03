FROM node:16 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Start from a clean image again
FROM node:16

WORKDIR /app

# Copy only the built app and package.json
COPY --from=builder /app/build ./build
COPY package*.json ./

# Install serve to serve our built React app
RUN npm install -g serve

# Start command
CMD ["serve", "-s", "build", "-l", "3000"]