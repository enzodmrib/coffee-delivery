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
    imgPath: 'src/assets/coffeeImages/espresso-traditional.svg',
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    price: 9.9,
    imgPath: 'src/assets/coffeeImages/espresso-american.svg',
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    price: 9.9,
    imgPath: 'src/assets/coffeeImages/espresso-creamy.svg',
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'gelado'],
    price: 9.9,
    imgPath: 'src/assets/coffeeImages/espresso-cold.svg',
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    imgPath: 'src/assets/coffeeImages/coffee-with-milk.svg',
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    imgPath: 'src/assets/coffeeImages/latte-coffee.svg',
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    imgPath: 'src/assets/coffeeImages/capuccino.svg',
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    imgPath: 'src/assets/coffeeImages/macchiato.svg',
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    imgPath: 'src/assets/coffeeImages/mocaccino.svg',
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'com leite'],
    price: 9.9,
    imgPath: 'src/assets/coffeeImages/hot-chocolate.svg',
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoólico', 'gelado'],
    price: 9.9,
    imgPath: 'src/assets/coffeeImages/cuban-coffee.svg',
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    price: 9.9,
    imgPath: 'src/assets/coffeeImages/havaian-coffee.svg',
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    price: 9.9,
    imgPath: 'src/assets/coffeeImages/arabic-coffee.svg',
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'alcoólico'],
    price: 9.9,
    imgPath: 'src/assets/coffeeImages/irish-coffee.svg',
  },
]
