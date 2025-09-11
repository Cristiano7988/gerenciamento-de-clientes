FROM node:22

WORKDIR /var/www/html

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5173
EXPOSE 80

CMD ["npm", "run", "dev"]
