FROM node:12-alpine as DEV
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:12-alpine as PROD 
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY --from=DEV /usr/src/app/package*.json ./
COPY --from=DEV /usr/src/app/dist ./dist
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]

