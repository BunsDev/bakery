import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../gdao/utils'
import useGDAO from './useGDAO'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const gdao = useGDAO()
  const masterChefContract = getMasterChefContract(gdao)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, gdao])

  useEffect(() => {
    if (account && masterChefContract && gdao) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, gdao])

  return balance
}

export default useEarnings
