import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { GDAO } from '../../gdao'

export interface GDAOContext {
  gdao?: typeof GDAO
}

export const Context = createContext<GDAOContext>({
  gdao: undefined,
})

declare global {
  interface Window {
    gdaosauce: any
  }
}

const GDAOProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [gdao, setGDAO] = useState<any>()

  // @ts-ignore
  window.gdao = gdao
  // @ts-ignore


  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const gdaoLib = new GDAO(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setGDAO(gdaoLib)
      window.gdaosauce = gdaoLib
    }
  }, [ethereum])

  return <Context.Provider value={{ gdao }}>{children}</Context.Provider>
}

export default GDAOProvider
