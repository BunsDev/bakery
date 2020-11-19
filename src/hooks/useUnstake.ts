import { useCallback } from 'react'

import useGDAO from './useGDAO'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../gdao/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const gdao = useGDAO()
  const masterChefContract = getMasterChefContract(gdao)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, gdao],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
