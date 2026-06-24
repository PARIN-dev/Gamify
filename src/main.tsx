import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import './index.css'
import App from './App.tsx'
import { Provider } from './componentsChakraUI/ui/provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App/>
    </Provider>
  </StrictMode>,
)
