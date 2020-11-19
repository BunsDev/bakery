import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://rinkeby.etherscan.io/address/0xf56fb52086dcf3c2ca0a64b6f49e047b4427639f#code"
      >
        GDAO Token Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://app.uniswap.org/#/swap"
      >
        UniSwap
      </StyledLink>
      <StyledLink target="_blank" href="https://discord.gg/HtBxjTZDy6">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/cryptoUnico/">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/governor_dao">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="https://medium.com/@dunk">
        Medium
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
