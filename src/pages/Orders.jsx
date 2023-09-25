import { redirect, useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'
import { customFetch } from '../utils'
import {
  OrdersList,
  ComplexPaginationContainer,
  SectionTitle,
} from '../components'

const ordersQuery = (params, user) => {
  return {
    queryKey: [
      'orders',
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () => {
      return customFetch.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
    },
  }
}

export const loader =
  // 为啥要写成这个样子


    (store, queryClient) =>
    async ({ request }) => {
      const user = store.getState().userState.user

      if (!user) {
        toast.warn('you must logged in to view orders')
        return redirect('/login')
      }
      const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
      ])
      try {
        // console.log(params.page ? parseInt(params.page) : 1)
        // console.log(user.token)
        const response = await queryClient.ensureQueryData(
          ordersQuery(params, user)
        )

        return { orders: response.data.data, meta: response.data.meta }
      } catch (error) {
        const errorMessage =
          error?.response?.data?.error?.message ||
          'please double check your credentials'
        toast.error(errorMessage)
        if (error.response.status === 401 || 403) return redirect('/login')
        return null
      }
    }

const Orders = () => {
  const { meta } = useLoaderData()
  if (meta.pagination.total < 1) {
    return <SectionTitle text="please make an order" />
  }
  return (
    <>
      <SectionTitle text="My Orders" />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  )
}

export default Orders
