# electron-create-react-app

Boilerplate linking [electron](http://electron.atom.io/) with [create-react-app](https://github.com/facebookincubator/create-react-app).

This boilerplate adds only one dependency - `react-router-dom` - to the list of dependencies coming with create-react-app. It also removes files related to
create-react-app's progressive-web-app capabilities like `registerServiceWorker.js` and `manifesto.json`. Apart from that it's just create-react-app fused with electron.

## Dependencies

Make sure you have node.js version 7.6.0 or later installed! `main.js` is written with async/await syntax which is only supported from that version of node onwards.

Furthermore, make sure you have [yarn](https://yarnpkg.com/en/) installed globally. __The project currently only works properly with yarn.__
```bash
npm install -g yarn
```

## Usage

Run in dev mode:
```bash
yarn run dev
```

Build:
```bash
yarn run build
```

Start in production mode:
```bash
yarn start
```

## Copyright and license

Copyright 2017, Matthias Munder.  
Licensed under the [MIT license](./LICENSE).

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
