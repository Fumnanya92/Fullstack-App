FROM node:14
WORKDIR /app
COPY ./webapp/package.json ./    
RUN npm install
COPY ./webapp/. .                
CMD ["node", "index.js"]         
