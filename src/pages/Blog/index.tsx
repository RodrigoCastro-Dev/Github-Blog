import { useContextSelector } from 'use-context-selector'
import { BlogsContext } from '../../contexts/BlogsContext'
import { SearchForm } from './components/SearchForm'
import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import gitImg from '../../assets/avatar.png'

import {
  BlogContainer,
  BlogGrid,
  GridItem,
  GridItemSmall,
  StyledNavLink,
  GithubLink, ProfileCard, ProfileContainer, Title, Icons
} from './styles'

export function Blogs() {
  const blogs = useContextSelector(BlogsContext, (context) => {
    return context.blogs
  })

  const TruncatedText = ({ text, maxLength = 100 }: { text: string; maxLength?: number }) => {
    const truncated = text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

    return <p>{truncated}</p>;
  };

  return (
    <div>
      <ProfileContainer>
        <ProfileCard>
          <img src={gitImg} alt="" />
          <Title>
            <h1>Cameron Williamson</h1>
            <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
            <Icons>
              <GithubLogo size={20} />
              <span>cameronwll</span>
              <Buildings size={20} />Rocketseat
              <Users size={20} />32 Seguidores
            </Icons>
          </Title>
        </ProfileCard>
        <GithubLink href="https://example.com" target="_blank" rel="noopener noreferrer">
          <span>GITHUB{'  '}</span>
          <ArrowSquareOut size={16} weight="bold" />
        </GithubLink>
      </ProfileContainer>

      <BlogContainer>
        <SearchForm />

        <BlogGrid>
          {blogs.map((blog) => {
            return (
              <GridItem key={blog.id}>
                <StyledNavLink to="/post">
                  <h3>{blog.description}JavaScript data types and data structures</h3>
                  <GridItemSmall>Há 1 dia</GridItemSmall>
                  <TruncatedText
                    text="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types: let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean"
                    maxLength={250}
                  />
                </StyledNavLink>
              </GridItem>
            )
          })}
        </BlogGrid>
      </BlogContainer>
    </div>
  )
}
