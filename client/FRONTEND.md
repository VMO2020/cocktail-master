# cocktail-master-frontend (client)

1. Terminal: `cd client`
2. Terminal(client): `npx create-react-app .`
3. Terminal(client): `rm -rf .git`
4. Terminal(client): `npm i axios dotenv`
5. Terminal(client): `npm i react-router-dom`
6. Terminal(server): `npm install @auth0/auth0-react`

## Prepare for GIT

1. Move `.gitignore` from client/REACT to the ROOT and add: `node_modules, .env.local & .env`
2. Create `.env.local`

## RUN / STOP

Terminal(client): `npm start`
Terminal(client): `Ctrl "C"`

## REACT

Deleting all files is not necessary (src)
Add: `Reset.css`

## Auth0

1. [Login-Auth0](https://auth0.com/)
2. Applications => Create New Application => name `App name` => Single Page App => **react**
3. App name => Settings
4. Allowed Callback URLs: `http://localhost:3000/`
5. Allowed Logout URLs: `http://localhost:3000/` => URL after Login
6. Allowed Web Origins: `http://localhost:3000/`
7. Save Changes  
8. Connections add: GitHub ......
9. React Project Terminal(client): `npm install @auth0/auth0-react`
10. [Config REACT](https://auth0.com/docs/quickstart/spa/react/interactive)
11. Modify: `index.js`, `App.js`, `page/Home.js` & `header,js`
12. Create: `components/auth`: `Login.js, Logout.js & Profile.js`
