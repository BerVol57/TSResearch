FROM node:20.12.2-slim
RUN mkdir /app
WORKDIR /app
ADD package*.json /app/
RUN npm install

COPY . .

CMD ["npm", "run", "test:debug"]