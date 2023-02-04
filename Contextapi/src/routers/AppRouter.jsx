import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import { ProductProvider } from '../context/ProductContext'
import AddProduct from '../pages/AddProduct'
import Products from '../pages/Products'

const AppRouter = () => {
  return (
   <BrowserRouter>
  <ProductProvider>
  <Header />
   <Container className='mt-5'>
   <Routes>
    <Route path='/' element={<Products />}></Route>
    <Route path='/add' element={<AddProduct />}></Route>
   </Routes>
   </Container>
  </ProductProvider>
   </BrowserRouter>
  )
}

export default AppRouter