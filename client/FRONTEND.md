# cocktail-master-frontend (client)

## NAV

[cocktail-master](https://github.com/VMO2020/cocktail-master)  
[cocktail-master-server](https://github.com/VMO2020/cocktail-master/blob/main/server/BACKEND.md)  

## Start

1. Terminal: `cd client`
2. Terminal(client): `npx create-react-app .`
3. Terminal(client): `rm -rf .git`
4. Terminal(client): `npm i axios dotenv`
5. Terminal(client): `npm i react-router-dom`
6. Terminal(client): `npm install @auth0/auth0-react`

## Prepare for GIT

1. Move `.gitignore` from client/REACT to the ROOT and add: `node_modules, .env.local & .env`
2. Create `.env.local`

## RUN / STOP

Terminal(client): `npm start`
Terminal(client): `Ctrl "C"`

## REACT

Deleting all files is not necessary (src)
Add: `reset.css`

## Auth0

1. [Login-Auth0](https://auth0.com/)
2. Applications => Create New Application => name `App name` => Single Page App => **react**
3. App name => Settings
4. Allowed Callback URLs: `http://localhost:3000, http://localhost:5173`
5. Allowed Logout URLs: `http://localhost:3000, http://localhost:5173` => URL after Login
6. Allowed Web Origins: `http://localhost:3000, http://localhost:5173`
7. Save Changes  
8. Connections add: GitHub ......
9. React Project Terminal(client): `npm install @auth0/auth0-react`
10. [Config REACT](https://auth0.com/docs/quickstart/spa/react/interactive)
11. Modify: `index.js`, `App.js`, `page/Home.js` & `header,js`
12. Create: `components/auth`: `Login.js, Logout.js & Profile.js`

## SEO

1. Create a meta title:  

`"Cocktail Hub: Explore, Create, and Savor Delicious Cocktails | Cocktails Lovers, Bartenders, Parties, Bars, and Restaurants"`

2. Create a meta description:

`"Discover an enticing world of cocktails at Cocktail Hub. Explore a vast collection of handcrafted cocktail recipes, unleash your creativity to craft your own signature drinks, and elevate your mixology skills. Perfect for cocktail lovers, bartenders, party enthusiasts, bars, and restaurants seeking inspiration and innovation. Cheers to unforgettable libations!"`

3. User target:

`Our website caters to a diverse range of cocktail enthusiasts, including cocktail lovers, bartenders, party organizers, bars, and restaurants. For the cocktail lovers, we provide a treasure trove of cocktail recipes, allowing them to explore and indulge in a wide variety of delightful concoctions.`  

`Bartenders can find inspiration, refine their skills, and discover new techniques to elevate their craft. Party organizers can rely on our website to plan memorable events, with access to crowd-pleasing cocktail recipes and mixology tips.`  

`Bars and restaurants can leverage our platform to showcase their unique cocktail menus, attract patrons, and stay ahead in the competitive industry. Our website is a one-stop destination for all things cocktails, catering to the diverse needs of cocktail enthusiasts, professionals, and businesses alike.`
