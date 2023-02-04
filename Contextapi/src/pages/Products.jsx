import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import { ProductContext } from '../context/ProductContext'

const Products = () => {
  const [products,setProduct]=useContext(ProductContext)
  return (
<Row className='g-5'>
{products.map(item=>{
  return  <SingleCard title={item.title} price={item.price}/>
}
  )}
</Row>
  )
}
export default Products