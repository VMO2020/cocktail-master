# cocktail-master-backend (server)

1. Create: server.js`
2. Terminal: `cd server`
3. Terminal(server): `npm init -y`
4. Terminal(server): `npm i express cors nodemon dotenv mongoose`
5. Terminal(server): `npm i body-parser`
6. Create: `.gitignore` => node_modules & .env
7. package.json: `"start": "nodemon server.js"`

## ADD

`const bp = require('body-parser');`
`app.use(bp.json());`

## Security

Add `.env` file

## RUN / STOP

Terminal(server): `npm start`
Terminal(server): `Ctrl "C"`

## ADD book

Terminal(server): `node seed.js`

## MongoDB

Mongodb => Database => Connect => Get URL to connect

MongoCompass => Connect
