import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x060dea069f4a0cf3f359152ec02f048ce9930686"
      >
        UniSwap
      </StyledLink>
      <StyledLink target="_blank" href="https://discord.gg/HtBxjTZDy6">
        Discord
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
