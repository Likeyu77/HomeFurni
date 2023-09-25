import { FeaturedProducts, Hero } from '../components'
import { customFetch } from '../utils'

const url = '/products?featured=true'

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
}

export const loader = (queryClient) => async () => {
  // 。对于 Axios 实例来说，customFetch(url) 会默认使用 GET 请求方法，并且可以传递参数，这是 Axios 的一种便捷方式。
  const response = await queryClient.ensureQueryData(featuredProductsQuery)
  const products = response.data.data
  return { products }
}

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Landing
