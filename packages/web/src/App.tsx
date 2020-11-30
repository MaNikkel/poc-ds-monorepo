import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@monorepo/common/src/styles'
import Button from './components/Button'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>Teste</Button>
    </ThemeProvider>
  )
}

export default App
