'use strict';

const app = require('./app');

console.log(process.env.NODE_ENV);

let PORT = 9000;
if(process.env.NODE_ENV == 'production'){
  PORT = 80;
}

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
