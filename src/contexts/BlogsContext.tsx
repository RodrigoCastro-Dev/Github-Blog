import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Blog {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateBlogInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface BlogContextType {
  blogs: Blog[]
  fetchBlogs: (query?: string) => Promise<void>
  createBlog: (data: CreateBlogInput) => Promise<void>
}

interface BlogsProviderProps {
  children: ReactNode
}

export const BlogsContext = createContext({} as BlogContextType)

export function BlogsProvider({ children }: BlogsProviderProps) {
  const [blogs, setBlogs] = useState<Blog[]>([])

  const fetchBlogs = useCallback(async (query?: string) => {
    const response = await api.get('blogs', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setBlogs(response.data)
  }, [])

  const createBlog = useCallback(
    async (data: CreateBlogInput) => {
      const { description, price, category, type } = data

      const response = await api.post('blogs', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      })

      setBlogs((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fetchBlogs()
  }, [fetchBlogs])

  return (
    <BlogsContext.Provider
      value={{
        blogs,
        fetchBlogs,
        createBlog,
      }}
    >
      {children}
    </BlogsContext.Provider>
  )
}
