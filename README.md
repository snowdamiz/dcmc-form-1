# DCMotor Pop-Up V0.1

React application intended to be embedded inside of an existing webpage

## How to Test App

Step by step of how to set up testing environment

### Installing

First clone the repository into a folder outside of the website project folder.
Once its cloned CD into the project directory run npm install

```
npm install
```

### Testing App

CD into the app directory and run these two commands

```
yarn build
```
```
yarn start
```

Once the server is up test the deployment localy using this url. If you see a bunch of minified javascript that means the test server is set up.

```
http://localhost:8080/dist/bundle.js
```

If everything is working proceed by embedding the react app into the website.
To embedd the app simply add this empty div to the bottom of the body of the dynamically loaded vehicle description pages. [Example Dealer Socker Page](https://www.dcmotorcompany.com/vehicle-details/2018-audi-q5-2-0t-premium-quattro-backup-camera-portland-or-id-32966059)

```
<div id="root"></div>
```

Then at the bottom of the page, after the body tag, add these scripts

```
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="http://localhost:8080/dist/bundle.js"></script>
```

If everything is done correctly the popup should come up in about 30 seconds after page load.