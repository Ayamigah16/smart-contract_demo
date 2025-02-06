require('dotenv').config();
const assert = require('assert');
const ganache = require('ganache');
const { beforeEach } = require('mocha');
const Web3 = require('web3');
const {interface, bytecode} = require('../compile');    // Importing the compiled contract

const web3 = new Web3(ganache.provider());

let accounts;
let inbox;
let INITIAL_MESSAGE = 'Hi there!';

beforeEach(async() => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts()

    // Use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [INITIAL_MESSAGE] })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });

    it('has a default message', async() => {
        const message = await inbox.methods.message().call();
        assert.strictEqual(message, INITIAL_MESSAGE);
    });

    it('can change the message', async() => {
        const newMessage = 'Bye there!';
        await inbox.methods.setMessage(newMessage).send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.strictEqual(message, newMessage);
    });
});