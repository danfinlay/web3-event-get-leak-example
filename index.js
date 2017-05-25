const abi = require('./registrar-abi.json')
const registrarAddress = '0x6090A6e47849629b7245Dfa1Ca21D94cd15878Ef'

const HttpProvider = require('ethjs-provider-http')
let registrar

const Eth = require('ethjs-query')
const EthContract = require('ethjs-contract')


window.addEventListener('load', setupEns)

function setupEns() {
  if (typeof web3 === 'undefined') {
    throw new Error('must use web3 browser like metamask')
  }

  const provider = web3.currentProvider

  const Registrar = web3.eth.contract(abi)
  registrar = Registrar.at(registrarAddress)

  window.reg = registrar

  var auctionStarted = reg.AuctionStarted({}, {
    fromBlock: 3767372,
    toBlock: 3767373,
  })

  auctionStarted.get(function(error, logs) {
    console.log('auctionstarted get returned', error, logs)
  })
}

