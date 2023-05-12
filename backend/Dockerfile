FROM node:18

WORKDIR ./

COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 8080
CMD ["npm","run","start"]