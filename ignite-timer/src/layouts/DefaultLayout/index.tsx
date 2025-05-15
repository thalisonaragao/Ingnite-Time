import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <div>
      <LayoutContainer>
        <Header />
        <Outlet />
        {/* Header vai ser fixo, e Outlet serve para fixa o conteudo */}
      </LayoutContainer>
    </div>
  )
}
