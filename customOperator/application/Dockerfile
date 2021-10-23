FROM node:17-bullseye-slim
WORKDIR /app
COPY ["package.json", "package-lock.json*", "server.js" ,"./"]
RUN npm install
CMD [ "node", "server.js" ]

