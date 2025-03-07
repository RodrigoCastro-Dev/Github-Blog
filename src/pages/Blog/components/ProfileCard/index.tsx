import { ProfileContext } from '../../../../contexts/ProfileContext'
import { GithubLink, ProfileCard, ProfileContainer, Title, Icons, GitImg } from './styles'
import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { useContext } from 'react';

export function Profile() {
  const { profile } = useContext(ProfileContext);
  
  return (
    <ProfileContainer>
      <ProfileCard>
        <GitImg src={profile?.avatar_url} alt="" />
        <Title>
          <h1>{profile?.name}</h1>
          <p>{profile?.bio || "No bio available"}</p>
          <Icons>
            <GithubLogo size={20} />
            <span>{profile?.login || "N/A"}</span>
            <Buildings size={20} />Rocketseat
            <Users size={20} />{profile?.followers || 0} Seguidores
          </Icons>
        </Title>
      </ProfileCard>
      <GithubLink href={profile?.html_url} target="_blank" rel="noopener noreferrer">
        <span>GITHUB{"  "}</span>
        <ArrowSquareOut size={16} weight="bold" />
      </GithubLink>
    </ProfileContainer>
  );
}