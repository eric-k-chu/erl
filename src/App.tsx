import type { ReactElement } from 'react'
import { AppSidebar } from './components/app-sidebar'
import { SidebarProvider } from './components/ui/sidebar'

function App(): ReactElement {
  return (
    <SidebarProvider>
      <AppSidebar />
    </SidebarProvider>
  )
}

export default App
