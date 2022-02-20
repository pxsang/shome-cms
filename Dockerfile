FROM node:14.19

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN NODE_ENV=production npm run build

# Running the app
CMD [ "npm", "start" ]
