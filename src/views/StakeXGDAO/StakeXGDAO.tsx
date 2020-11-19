import React, {useEffect, useMemo, useState} from 'react'
import styled from 'styled-components'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import Spacer from '../../components/Spacer'
import useGDAO from '../../hooks/useGDAO'
import {getContract} from '../../utils/erc20'
import UnstakeXGDAO from './components/UnstakeXGDAO'
import StakeGDAO from "./components/StakeGDAO";

import {contractAddresses} from '../../gdao/lib/constants'
import {getXGDAOSupply} from "../../gdao/utils";
import BigNumber from "bignumber.js";
import {getBalanceNumber} from "../../utils/formatBalance";
import { CHAIN_ID } from '../../gdao/lib/constants'

const StakeXGDAO: React.FC = () => {
  const {
    tokenAddress,
  } = {
    tokenAddress: contractAddresses.xGDAO[CHAIN_ID],
  }

  const [totalSupply, setTotalSupply] = useState<BigNumber>()

  const gdao = useGDAO()
  const {ethereum} = useWallet()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getXGDAOSupply(gdao)
      setTotalSupply(supply)
    }
    if (gdao) {
      fetchTotalSupply()
    }
  }, [gdao, setTotalSupply])



  const lpContract = useMemo(() => {
    debugger
    return getContract(ethereum as provider, tokenAddress)
  }, [ethereum, tokenAddress])

  return (
    <>
      <StyledFarm>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <UnstakeXGDAO
              lpContract={lpContract}
            />
          </StyledCardWrapper>
          <Spacer/>
          <StyledCardWrapper>
            <StakeGDAO
            />
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg"/>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <StyledInfo>
              ℹ️️ You will earn a portion of the swaps fees based on the amount
              of xGDAO held relative the weight of the staking. xGDAO can be minted
              by staking GDAO. To redeem GDAO staked plus swap fees convert xGDAO
              back to GDAO. {totalSupply ? `There are currently ${getBalanceNumber(totalSupply)} xGDAO in the whole pool.` : '' }
            </StyledInfo>
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg"/>
      </StyledFarm>
    </>
  )
}

const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[400]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default StakeXGDAO
