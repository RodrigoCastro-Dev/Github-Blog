import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: linear-gradient(${(props) => props.theme['blue-200']}, ${(props) => props.theme['blue-900']});
  padding: 2rem 0 3rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderImg = styled.img<{ width?: number, height?: number }>`
  max-width: ${(props) => `${props.width}`}px;
  max-height: ${(props) => `${props.height}`}px;
`
