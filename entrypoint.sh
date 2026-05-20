#!/bin/sh
set -e

echo "==> Building frontend..."
cd /app
npm run build

echo "==> Copying build output to nginx html directory..."
mkdir -p /usr/share/nginx/html
rm -rf /usr/share/nginx/html/*
cp -r /app/dist/* /usr/share/nginx/html/

echo "==> Starting nginx..."
exec nginx -g 'daemon off;'
