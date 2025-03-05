import { HeaderContainer, HeaderContent, HeaderImg } from './styles'

import logoImg from '../../assets/effect.svg'
import githubBlog from '../../assets/github-blog.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderImg src={logoImg} width={300} height={170} />
        <HeaderImg src={githubBlog} width={120} height={100} />
        <HeaderImg src={logoImg} width={300} height={170} />
      </HeaderContent>
    </HeaderContainer>
  )
}
