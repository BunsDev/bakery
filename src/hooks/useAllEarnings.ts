import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../gdao/utils'
import useGDAO from './useGDAO'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const gdao = useGDAO()
  const farms = getFarms(gdao)
  const masterChefContract = getMasterChefContract(gdao)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, gdao])

  useEffect(() => {
    if (account && masterChefContract && gdao) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, gdao])

  return balances
}

export default useAllEarnings
