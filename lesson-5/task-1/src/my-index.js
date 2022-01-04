// file path: src/index.js

import fetchUser from './profile/gateway.js';
import { printProfile } from './profile/index.js';

fetchUser('facebook').then((userData) =>
  printProfile({
    name: userData.name,
    company: userData.location,
  })
);
// "scripts": {
//     "build:scripts": "webpack -p",
//     "watch:scripts": "webpack -d --devtool eval-source-maps -w"
