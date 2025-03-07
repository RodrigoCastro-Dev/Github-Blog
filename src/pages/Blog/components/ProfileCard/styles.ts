import styled, { css } from 'styled-components'

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
  background: ${(props) => props.theme['blue-500']};
  border-radius: 6px;
  padding: 2rem;
  display: flex;
  box-shadow: 10px 4px 5px rgba(0, 0, 0, 0.1);

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

export const Icons = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`

export const GitImg = styled.img`
  max-width: 148px;
  max-height: 148px;
  border-radius: 6px;
`