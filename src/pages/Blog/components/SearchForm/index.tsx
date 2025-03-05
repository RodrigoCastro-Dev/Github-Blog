import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { PublicationsContainer, SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { BlogsContext } from '../../../../contexts/BlogsContext'
import { useContextSelector } from 'use-context-selector'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchBlogs = useContextSelector(
    BlogsContext,
    (context) => {
      return context.fetchBlogs
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchBlogs(data: SearchFormInputs) {
    await fetchBlogs(data.query)
  }

  return (
    <>
      <PublicationsContainer>
        <h3>Publicações</h3>
        <p>6 Publicações</p>
      </PublicationsContainer>
      <SearchFormContainer onSubmit={handleSubmit(handleSearchBlogs)}>
        <input
          type="text"
          placeholder="Busque por issues"
          {...register('query')}
        />

        <button type="submit" disabled={isSubmitting}>
          <MagnifyingGlass size={20} />
          Buscar
        </button>
      </SearchFormContainer>
    </>
  )
}
