import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useGDAO from '../../hooks/useGDAO'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../gdao/utils'
import { getFarms } from '../../gdao/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const gdao = useGDAO()
  const { account } = useWallet()

  const farms = getFarms(gdao)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
