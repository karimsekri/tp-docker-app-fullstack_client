FROM node:18-alpine
WORKDIR /client
COPY . .
RUN npm install
RUN npm install react
RUN npm install react-router-dom
RUN npm run build
ENV PORT=5173
EXPOSE 5173

CMD ["npm", "run", "dev"]