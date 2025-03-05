import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components'

export const BlogContainer = styled.main`
  width: 100%;
  max-width: 880px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const BlogGrid = styled.div`
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: auto auto;
  gap: 2rem;
`
export const GridItem = styled.div`
  padding: 1.25rem 2rem;
  background: ${(props) => props.theme['gray-700']};
  border-radius: 10px;
  display: flex;
`
export const GridItemSmall = styled.small`
  height: fit-content;
  width: 22%;
`;

export const StyledNavLink = styled(NavLink)`
  all: unset; 
  display: inline-block;
  cursor: pointer;
`;

export const ProfileContainer = styled.section`
  width: 100%;
  max-width: 880px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  margin-top: -3rem;
`

interface ProfileCardProps {
  variant?: 'green'
}

export const ProfileCard = styled.div<ProfileCardProps>`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;
  display: flex;

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${props.theme['green-700']};
    `}
`

export const GithubLink = styled.a`
  margin-left: auto;
  color: #3294F8;
  max-height: 35px;
  margin-top: -12rem;
  margin-right: 10px;
`;


export const Title = styled.div`
  font-family: Roboto;
  padding-left: 2rem;
`;

export const Subtitle = styled.div`
  font-family: Roboto;
  font-weight: 400;
`;

export const Icons = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`