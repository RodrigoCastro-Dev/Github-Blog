import { createContext, ReactNode, useCallback, useEffect, useState } from "react"
import { api } from '../lib/axios'

interface Profile {
  id: number
  name: string
  bio: string
  login: string
  followers: number
  html_url: string
  avatar_url: string
  created_at: string
}

interface ProfileContextType {
  profile: Profile | null;
  fetchProfile: () => Promise<void>
}

interface ProviderProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextType)

export function ProfileProvider({ children }: ProviderProps) {
  const [profile, setProfile] = useState<Profile | null>(null);

  const fetchProfile = useCallback(async () => {
    const response = await api.get('user')

    setProfile(response.data)
  }, [])


  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])

  return (
    <ProfileContext.Provider value={{ profile, fetchProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}
