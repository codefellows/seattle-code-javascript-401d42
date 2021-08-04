import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addToCart } from '../store/cart.js';
import { fetchItems } from '../store/products';

function ProductsList() {

  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
    console.log(products);
  }, [dispatch]);

  const itemClick = (item) => {

    let dispatchableobject = addToCart(item);

    dispatch(dispatchableobject);
  }

  return (
    <ul>
      {products.map(item => {
        return <li onClick={() => itemClick(item)}>{item.name}</li>
      })}
    </ul>
  )
}

export default ProductsList;
