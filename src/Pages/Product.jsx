import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breakcrum from '../Components/Breakcrums/Breakcrum';
import ProductDisplay from '../Components/ProductDisplay.jsx/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product =all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breakcrum product={product}/>
      <ProductDisplay product={product}/>
      <Description />
      <RelatedProducts/>
    </div>
  )
}
 
export default Product