[http://www.jacktilly.com] (This is old site)

# This is the repo of my personal website

I am building this website in React as a learning lesson for myself and to prove ability for others.


To run the app locally, here are the commands.

### First install node packages:

```
npm i
```
If `/node_modules` already exists in your file directory, you must remove it before you install


### On one terminal tab, compile SCSS to CSS:

```
npm run build-css
```

That will compile all SCSS files into CSS files. This might already be done, but just in case

### Then build the static server to serve the image files:

```
npm run server
```

This will serve the static files in `/images` for the site to display

### While the server is running, open a new terminal tab and run React app:
```
npm start
```

After a few seconds this should open your browser to http://localhost:3000 where you will see my application.


This project was created by [create-react-app](https://github.com/facebook/create-react-app)
