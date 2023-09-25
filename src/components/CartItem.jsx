import { formatPrice, generateAmountOptions } from '../utils'
import { removeItem, editItem } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch()

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }))
  }
  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }))
  }
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem
  return (
    <article
      className="mb-12 flex flex-col gap-y-4 sm:flex-row felx-wrap
     border-b border-base-300 pb-6 last:border-b-0"
      key={cartID}>
      {/* image */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:w-32 object-cover"
      />
      {/* info */}
      <div className="sm:ml-16 sm:w-48">
        {/* title */}
        <h3 className="capitalize font-medium">{title}</h3>
        {/* company */}
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>
        {/* color */}
        <p className="mt-2 text-sm capitalize flex items-center gap-x-2">
          color:
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}></span>
        </p>
      </div>
      <div className="sm:ml-24">
        {/* amount */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0 ">
            <span className="label-text ">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs"
            value={amount}
            onChange={handleAmount}>
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        {/* remove */}
        <button
          className="mt-2 link link-primary link-hover text-sm"
          onClick={() => removeItemFromTheCart()}>
          remove
        </button>
      </div>

      {/* price */}
    </article>
  )
}

export default CartItem
