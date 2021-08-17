FROM node

WORKDIR /app

COPY ["package.json", "package-lock.json"] /app

RUN npm install --production

COPY . .

CMD ["npm run build"]