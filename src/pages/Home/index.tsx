import { Catalogue } from './components/Catalogue'
import { Intro } from './components/Intro'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <Catalogue />
    </HomeContainer>
  )
}
