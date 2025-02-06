require('dotenv').config();
const assert = require('assert');
const ganache = require('ganache');
const { beforeEach } = require('mocha');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

let accounts;

beforeEach(async() => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts()
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(accounts);
        // assert.ok(inbox.options.address);
    });
});