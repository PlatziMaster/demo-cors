FROM node:13
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . ./app
EXPOSE 3001
CMD npm run start