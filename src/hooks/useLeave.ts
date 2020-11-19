import {useCallback} from 'react'

import useGDAO from './useGDAO'
import {useWallet} from 'use-wallet'

import {leave, getXGDAOStakingContract} from '../gdao/utils'

const useLeave = () => {
  const {account} = useWallet()
  const gdao = useGDAO()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await leave(
        getXGDAOStakingContract(gdao),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, gdao],
  )

  return {onLeave: handle}
}

export default useLeave
