import {Component} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

class CartSummary extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value

          const totalvalueofproducts = () => {
            let total = 0
            cartList.forEach(eachitem => {
              total += eachitem.price * eachitem.quantity
            })
            return total
          }

          return (
            <div className="wholediv">
              <h1 className="heading">
                Order total:
                <span className="amount">${totalvalueofproducts()}</span>
              </h1>
              <p className="para">{cartList.length} Items in cart</p>
              <button className="checkoutbutton" type="button">
                CheckOut
              </button>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default CartSummary
