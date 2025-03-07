import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

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
  background: ${(props) => props.theme['blue-500']};
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

export const Subtitle = styled.div`
  font-family: Roboto;
  font-weight: 400;
`;
