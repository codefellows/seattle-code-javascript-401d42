import {useSelector} from 'react-redux';

function SimpleCart() {

  let cartItems = useSelector(state => state.cart);

  return (
    <ul>
      {cartItems.map(item => {
        return <li>{item.name}</li>
      })}
    </ul>
  )
}

export default SimpleCart;
