import { StyledNavLink } from "../Blog/styles";
import { GithubLink, ProfileCard, ProfileContainer, Title, Icons, BlogContainer, TitleLinks, PostBody } from "./styles";
import { ArrowSquareOut, Buildings, CaretLeft, GithubLogo, Users } from 'phosphor-react'

export function Post() {
  return (
    <>
      <ProfileContainer>
        <ProfileCard>
          <Title>
            <TitleLinks>
              <StyledNavLink to="/">
                <CaretLeft size={14} weight="bold" />
                <span>VOLTAR{'  '}</span>
              </StyledNavLink>
              <GithubLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                <span>GITHUB{'  '}</span>
                <ArrowSquareOut size={16} weight="bold" />
              </GithubLink>
            </TitleLinks>
            <PostBody>JavaScript data types and data structures</PostBody>
            <Icons>
              <GithubLogo size={20} />
              <span>cameronwll</span>
              <Buildings size={20} />Rocketseat
              <Users size={20} />32 Seguidores
            </Icons>
          </Title>
        </ProfileCard>
      </ProfileContainer>

      <BlogContainer>
        <p> Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types: let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean</p>
      </BlogContainer>
    </>
  )
}
