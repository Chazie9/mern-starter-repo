const packages = [
    {
        "name": "mern-starter-repo",
        "version": "1.0.0",
        "description": "A scaffolding repo based on the MERN stack (Mongo, Express, ReactJS &amp; NodeJS) with appropriate dependencies",
        "main": "index.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "dev": "webpack -d -w",
          "build": "webpack -p",
          "server": "nodemon server/index.js",
          "start": "nodemon server/index.js"
        },
        "repository": {
          "type": "git",
          "url": "git+https://github.com/zaidhusseini/mern-starter-repo.git"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "bugs": {
          "url": "https://github.com/zaidhusseini/mern-starter-repo/issues"
        },
        "homepage": "https://github.com/zaidhusseini/mern-starter-repo#readme",
        "dependencies": {
          "axios": "^0.18.0",
          "babel-loader": "^7.1.4",
          "babel-preset-es2015": "^6.24.1",
          "babel-preset-react": "^6.24.1",
          "body-parser": "^1.18.3",
          "bootstrap": "^4.1.1",
          "cors": "^2.8.4",
          "dotenv": "^5.0.1",
          "express": "^4.16.3",
          "jquery": "^3.3.1",
          "morgan": "^1.9.0",
          "node-fetch": "^2.1.2",
          "npm-registry-client": "^8.5.1",
          "react": "^16.3.1",
          "react-dom": "^16.3.1",
          "react-router-dom": "^4.2.2",
          "reactstrap": "^6.0.1",
          "webpack": "^4.5.0",
          "webpack-cli": "^2.0.14"
        },
        "devDependencies": {
          "css-loader": "^0.28.11",
          "style-loader": "^0.20.3"
        }
      }
      
]