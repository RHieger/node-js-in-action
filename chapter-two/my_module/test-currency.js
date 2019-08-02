// test-currency.js

// This module is thecalling modulefor currency.js.This
// module allows the user  to cooperate.

// Robert Hieger
// August 2,  2019

// Import currency module:

const currency = require('./currency');

// Run calculations using currency  module:

// CANADIAN TO US DOLLARS:

console.log('\n50 Canadian dollars equals this amount of US dollars:');

console.log( currency.canadianToUS(50)  + '\n' ); 

// US TO CANADIAN DOLLARS:

console.log('\n30 US dollars equals this amount of Canadian dollars:');

console.log( currency.USToCanadian(30) + '\n' );
