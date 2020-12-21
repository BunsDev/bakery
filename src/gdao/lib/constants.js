import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  //GDAO: '0xf56fb52086dcf3c2ca0a64b6f49e047b4427639f',
}

// export const contractAddresses = {
//   gdao: {
//     1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
//   },
//   masterChef: {
//     1: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd',
//   },
//   weth: {
//     1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
//   },
//   xGDAO: {
//     1: '0x8798249c2e607446efb7ad49ec89dd1865ff4272'
//   }
// }


/*
SLP Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
*/

// GOVDAO BAKERY SETTINGS

export const CHAIN_ID = 4

export const contractAddresses = {
  gdao: {
    4: '0x060dea069f4a0cf3f359152ec02f048ce9930686',
  },
  masterChef: {
    4: '0xdf2A82d8a34F139f649000e43f60C921F769a947',
  },
  weth: {
    4: '0xc778417e063141139fce010982780140aa0cd5ab',
  },
  xGDAO: {
    4: '0x8798249c2e607446efb7ad49ec89dd1865ff4272' // NOTE: Not in use
  }
}


export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      4: '0xb354b410071a12b5ccB28Bd3275A44C6Dc9DBC61', // GDAO-ETH LP Token Address
    },
    tokenAddresses: {
      4: '0xb354b410071a12b5ccB28Bd3275A44C6Dc9DBC61', // GDAO
    },
    name: 'GovCake',
    symbol: 'GDAO-ETH LP',
    tokenSymbol: 'GDAO',
    icon: '🧁',
  },
  {
    pid: 1,
    lpAddresses: {
      4: '0x03E6c12eF405AC3F642B9184eDed8E1322de1a9e', // DAI-WETH Token Address
    },
    tokenAddresses: {
      4: '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea', // DAI
    },
    name: 'BreadnButter',
    symbol: 'DAI TOKEN',
    tokenSymbol: 'DAI',
    icon: '🍞',
  },
  {
    pid: 2,
    lpAddresses: {
      4: '0xb354b410071a12b5ccB28Bd3275A44C6Dc9DBC61', // GDAO-WETH Token Address
    },
    tokenAddresses: {
      4: '0x060dea069f4a0cf3f359152ec02f048ce9930686', // GDAO
    },
    name: 'Napoleon',
    symbol: 'GDAO TOKEN',
    tokenSymbol: 'GDAO',
    icon: '🍰',
  },
  {
    pid: 3,
    lpAddresses: {
      4: '0xc778417e063141139fce010982780140aa0cd5ab', // WETH Token Address
    },
    tokenAddresses: {
      4: '0xc778417e063141139fce010982780140aa0cd5ab', // WETH
    },
    name: 'WrappedYum',
    symbol: 'WETH TOKEN',
    tokenSymbol: 'WETH',
    icon: '🍬',
  },
  {
    pid: 4,
    lpAddresses: {
      4: '0x0d1e5112B7Bf0595837f6e19A8233e8b918Ef3aA', // LINK-WETH Token Address
    },
    tokenAddresses: {
      4: '0x01be23585060835e02b77ef475b0cc51aa1e0709', // LINK
    },
    name: 'Lemon Marinque',
    symbol: 'LINK TOKEN',
    tokenSymbol: 'LINK',
    icon: '🍋',
  },

  {
    pid: 5,
    lpAddresses: {
      4: '0x4E99615101cCBB83A462dC4DE2bc1362EF1365e5', // UNI-WETH Token Address
    },
    tokenAddresses: {
      4: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', // UNI
    },
    name: 'YummyUni',
    symbol: 'UNI TOKEN',
    tokenSymbol: 'UNI',
    icon: '🍩',
  },
]
