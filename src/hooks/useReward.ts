import { useCallback } from 'react'

import useGDAO from './useGDAO'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../gdao/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const gdao = useGDAO()
  const masterChefContract = getMasterChefContract(gdao)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, gdao])

  return { onReward: handleReward }
}

export default useReward
