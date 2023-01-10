import { CatalogueContainer, CatalogueTitle, ProductList } from './styles'
import { products } from '../../../../constants/Products'
import { ProductCard } from '../../../../components/ProductCard'

export function Catalogue() {
  // table would need to split array into smaller arrays and then map them by rows and cells
  // const columnAmount = 4

  // const formattedProductArray = chunk(products, columnAmount)

  // const sortedItems = () => {
  //   const result: Array<Array<Product>> = []
  //   let row: Array<Product> = []

  //   for (let i = 0; i < products.length; i++) {
  //     if (i % columnAmount === 0 && i !== 0) {
  //       result.push(row)
  //       row = []
  //     }

  //     if (i + 1 === products.length) {
  //       row.push(products[i])
  //       result.push(row)
  //       continue
  //     }

  //     row.push(products[i])
  //   }

  //   return result
  // }

  // OR

  // function chunk(items: any, size: number) {
  //   let result = items

  //   const chunks = []
  //   result = [].concat(...result)

  //   while (result.length) {
  //     chunks.push(result.splice(0, size))
  //   }

  //   return chunks
  // }

  return (
    <CatalogueContainer>
      <CatalogueTitle>Nossos cafés</CatalogueTitle>
      {/* <table>
        <tbody>
          {formattedProductArray.map((row, index) => {
            return (
              <tr key={index}>
                {row.map((item: Product) => (
                  <td key={item.id}>
                    <ProductCard item={item} />
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table> */}
      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </ProductList>
    </CatalogueContainer>
  )
}
