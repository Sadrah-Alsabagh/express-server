// 'use strict';

// require('dotenv').config();

// const server =require('./server');

// server.start(process.env.PORT || 3001)




'use strict';

require( 'dotenv' ).config();

const server = require( './server' );
server.start(process.env.PORT || 4000);