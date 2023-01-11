import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, PageContent } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <PageContent>
        <Outlet />
      </PageContent>
    </LayoutContainer>
  )
}
