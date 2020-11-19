import { useCallback } from 'react'

import useGDAO from './useGDAO'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../gdao/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const gdao = useGDAO()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(gdao),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, gdao],
  )

  return { onStake: handleStake }
}

export default useStake
