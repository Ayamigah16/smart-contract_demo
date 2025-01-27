const path =  require('path');
const fs = require('fs');
const solc = require('solc');

// get contract source
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf-8');


// export compile info
module.exports = solc.compile(source, 1).contracts[':Inbox']

// display compile info
// console.log(solc.compile(source,1));