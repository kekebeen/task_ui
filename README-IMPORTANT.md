## Prerequisites

[Node.js](http://nodejs.org/) >= v4 must be installed.

## LIVE DEMO
- You can find the latest hosted dist folder from this repo on the following link: http://quickest-ghost.surge.sh/

## Installation

- Running `npm install` in the app's root directory will install everything you need for development.
``` 
cd Documents
git clone https://github.com/kekebeen/task_ui.git
cd task_ui
npm install
npm start
localhost:3000 in browser and off you go
```
- or If you want to serve build folder (you can build it again or you can serve this one included in the repo)
- You need static server of any kind('')
-You are in task_ui folder
```
sudo npm install -g static-server
cd dist
static-server -i index.html and visit the page
```
- You can always point xampp,wamp,mamp to this folder as well

- Or simply visit the page at link stated above and see it live

## Development Server

- `npm start` will run the app's development server at [http://localhost:3000](http://localhost:3000) with hot module reloading.

## Building

- `npm run build` creates a production build by default.

   To create a development build, set the `NODE_ENV` environment variable to `development` while running this command.

- `npm run clean` will delete built resources.
