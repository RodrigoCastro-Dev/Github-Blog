import { Route, Routes } from 'react-router-dom'
import { Post } from './pages/Post'
import { Blogs } from './pages/Blog'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blogs />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  )
}
