import { ThemeProvider } from 'styled-components'
import { BlogsProvider } from './contexts/BlogsContext'
import { Blogs } from './pages/Blog'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <BlogsProvider>
          <Router />
        </BlogsProvider>
      </BrowserRouter>
    </ThemeProvider >
  )
}
