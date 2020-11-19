import {useCallback} from 'react'

import useGDAO from './useGDAO'
import {useWallet} from 'use-wallet'

import {enter, getXGDAOStakingContract} from '../gdao/utils'

const useEnter = () => {
  const {account} = useWallet()
  const gdao = useGDAO()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await enter(
        getXGDAOStakingContract(gdao),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, gdao],
  )

  return {onEnter: handle}
}

export default useEnter
