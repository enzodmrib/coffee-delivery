import homeImage from '../../../../assets/images/home-image.svg'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import {
  HomeImage,
  HomeInfoContainer,
  HomeInfoList,
  HomeInfoTitle,
  IconContainer,
  IntroContainer,
} from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <HomeInfoContainer>
        <HomeInfoTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </HomeInfoTitle>

        <HomeInfoList>
          <li>
            <IconContainer backgroundColor="orange">
              <ShoppingCart size={16} weight="fill" />
            </IconContainer>
            <span>Compra simples e segura</span>
          </li>
          <li>
            <IconContainer backgroundColor="brown">
              <Package size={16} weight="fill" />
            </IconContainer>
            <span>Embalagem mantém o café intacto</span>
          </li>
          <li>
            <IconContainer backgroundColor="yellow">
              <Timer size={16} weight="fill" />
            </IconContainer>
            <span>Entrega rápida e rastreada</span>
          </li>
          <li>
            <IconContainer backgroundColor="purple">
              <Coffee size={16} weight="fill" />
            </IconContainer>
            <span>O café chega fresquinho até você</span>
          </li>
        </HomeInfoList>
      </HomeInfoContainer>
      <HomeImage src={homeImage} alt="" />
    </IntroContainer>
  )
}
