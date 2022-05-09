FROM node:17-alpine3.14
WORKDIR /app
COPY package.json /app
RUN npm install --silent &&  mv node_modules ../
COPY . .
EXPOSE 4000
RUN chown -R node /app
USER node
CMD ["npm", "start"]