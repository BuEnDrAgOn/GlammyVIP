# build stage
FROM node:14.17.1-alpine AS build-stage

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN apk add --no-cache git

RUN npm install

COPY . .

RUN npm run build


# production stage
FROM nginx AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Add nginx config
COPY ./prod.conf /temp/prod.conf
RUN envsubst /app < /temp/prod.conf > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]