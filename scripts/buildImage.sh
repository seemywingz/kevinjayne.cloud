#!/bin/bash

npm install

npm run dist

appName=$(node -p "require('./package.json').name")
appVersion=$(node -p "require('./package.json').version")

docker buildx build \
  --push \
  --platform linux/arm/v7 \
  --tag virtualkev/${appName}:${appVersion} .

# cd ./helm
# helm upgrade sugar ./. --values ./values.yaml --install --dry-run
