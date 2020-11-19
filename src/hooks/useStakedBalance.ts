import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../gdao/utils'
import useGDAO from './useGDAO'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const gdao = useGDAO()
  const masterChefContract = getMasterChefContract(gdao)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, gdao])

  useEffect(() => {
    if (account && gdao) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, gdao])

  return balance
}

export default useStakedBalance
