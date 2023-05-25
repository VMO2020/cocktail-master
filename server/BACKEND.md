# cocktail-master-backend (server)

## NAV

[cocktail-master](https://github.com/VMO2020/cocktail-master)  
[cocktail-master-client](https://github.com/VMO2020/cocktail-master/blob/main/client/FRONTEND.md)  

## Start

1. Create: server.js`
2. Terminal: `cd server`
3. Terminal(server): `npm init -y`
4. Terminal(server): `npm i express cors nodemon dotenv mongoose axios bcryptjs`
5. Terminal(server): `npm i body-parser`
6. Create: `.gitignore` => node_modules & .env
7. package.json: `"start": "nodemon server.js"`

## ADD

`const bp = require('body-parser');`
`app.use(bp.json());`

## Security

Add `.env` file

## RUN / STOP

RUN: Terminal(server): `npm start`  

STOP: Terminal(server): `Ctrl "C"`

## MongoDB

Mongodb => Database => Connect => Get URL to connect

MongoCompass => Connect

## Render.io

1. Create `New+` Web Service
2. Select from GitHub:  cocktail-master `Connect`
3. Name: `cocktail-master`
4. Region: `Frankfurt(EU Central)`
5. Branch: `main`
6. Root Directory: `server`
7. Runtime: `Node`
8. Build Command: `npm i`
9. Start Command: `npm start`
10. Advanced: Add Environment Variables `.env`
11. Add Access to mongoDB: `0.0.0.0`
12. Create Web Service: `https://cocktail-master.onrender.com/`
