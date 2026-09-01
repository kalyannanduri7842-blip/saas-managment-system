# Multi-stage production Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Production runtime stage
FROM node:18-alpine AS runner

WORKDIR /app

# Install lightweight static server
RUN npm install -g serve

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

EXPOSE 5176

CMD ["serve", "-s", "dist", "-l", "5176"]
