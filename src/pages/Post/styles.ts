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
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

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
  color: #3294F8;
`;


export const Title = styled.div`
  font-family: Roboto;
  padding-left: 2rem;
`;

export const TitleLinks = styled.div`
  color: #3294F8;
  font-family: Roboto;
  display: flex;
  justify-content: space-between;
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

export const BlogContainer = styled.main`
  width: 100%;
  max-width: 880px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`
export const PostBody = styled.h1`
  padding-top: 2rem;
`
