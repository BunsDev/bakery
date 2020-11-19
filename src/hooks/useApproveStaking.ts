import {useCallback} from 'react'

import useGDAO from './useGDAO'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import {
  approve,
  getGDAOContract,
  getXGDAOStakingContract
} from '../gdao/utils'

const useApproveStaking = () => {
  const {account}: { account: string; ethereum: provider } = useWallet()
  const gdao = useGDAO()
  const lpContract = getGDAOContract(gdao)
  const contract = getXGDAOStakingContract(gdao)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, contract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, contract])

  return {onApprove: handleApprove}
}

export default useApproveStaking
