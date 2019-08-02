//  currency.js

// Robert Hieger
// August 1, 2019

const canadianDollar  = 0.91;

function roundTwo(amount)   {

    return Math.round(amount * 100) /  100;

}   // end roundTwo(amount)

exports.canadianToUS = canadian =>roundTwo(canadian * canadianDollar);

exports.USToCanadian = us =>  roundTwo(us / canadianDollar);