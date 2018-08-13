# dndtextui

React frontend for [andrew-boutin/dndtextapi](https://github.com/andrew-boutin/dndtextapi).

## Running
1. `npm install`
2. `npm run build`
3. `npm run start`
  * Alternatively, you can use `npm run debug` to debug the server via Chrome dev tools.

Default port: [8000](http://localhost:8000).

## Usage
You will need to log in via [localhost:8000](http://localhost:8000). Upon logging in, you will be redirected to the full app at [/dnd](http://localhost:8000/dnd).

Once logged in, you should be able to hit any `GET` endpoint available from `dndtextapi` by going to `/data/[NAME OF API ENDPOINT]`.

You will see the data presented in a nice, handcrafted table when using the `/data` route.
