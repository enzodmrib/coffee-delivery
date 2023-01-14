import espressoTraditionalImg from '@/assets/coffeeImages/espresso-traditional.svg'
import espressoAmericanImg from '@/assets/coffeeImages/espresso-american.svg'
import espressoCreamyImg from '@/assets/coffeeImages/espresso-creamy.svg'
import espressoColdImg from '@/assets/coffeeImages/espresso-cold.svg'
import coffeeWithMilkImg from '@/assets/coffeeImages/coffee-with-milk.svg'
import latteCoffeeImg from '@/assets/coffeeImages/latte-coffee.svg'
import capuccinoImg from '@/assets/coffeeImages/capuccino.svg'
import macchiatoImg from '@/assets/coffeeImages/macchiato.svg'
import mocaccinoImg from '@/assets/coffeeImages/mocaccino.svg'
import hotChocolateImg from '@/assets/coffeeImages/hot-chocolate.svg'
import cubanCoffeeImg from '@/assets/coffeeImages/cuban-coffee.svg'
import havaianCoffeeImg from '@/assets/coffeeImages/havaian-coffee.svg'
import arabicCoffeeImg from '@/assets/coffeeImages/arabic-coffee.svg'
import irishCoffeeImg from '@/assets/coffeeImages/irish-coffee.svg'

export interface Product {
  id: number
  name: string
  description: string
  tags: string[]
  price: number
  imgPath: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
    price: 9.9,
    imgPath: espressoTraditionalImg,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    price: 9.9,
    imgPath: espressoAmericanImg,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    price: 9.9,
    imgPath: espressoCreamyImg,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'gelado'],
    price: 9.9,
    imgPath: espressoColdImg,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    imgPath: coffeeWithMilkImg,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    imgPath: latteCoffeeImg,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    imgPath: capuccinoImg,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    imgPath: macchiatoImg,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    imgPath: mocaccinoImg,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'com leite'],
    price: 9.9,
    imgPath: hotChocolateImg,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoólico', 'gelado'],
    price: 9.9,
    imgPath: cubanCoffeeImg,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    price: 9.9,
    imgPath: havaianCoffeeImg,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    price: 9.9,
    imgPath: arabicCoffeeImg,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'alcoólico'],
    price: 9.9,
    imgPath: irishCoffeeImg,
  },
]
