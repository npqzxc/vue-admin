# Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

# Set registry for speed
RUN npm config set registry https://registry.npmmirror.com

COPY package.json package-lock.json ./

# Install dependencies with npm ci
RUN npm ci

COPY . .

# Build
RUN npm run build

# Serve Stage
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
