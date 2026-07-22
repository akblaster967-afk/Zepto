import { useState } from 'react'
import Header from './Component/Header'
import Home from './Component/Home'
import Taskbar from './Component/Taskbar'
import Home2 from './Component/Home2'
import Footer from './Component/Footer'


function App() {
  const [cart, setCart] = useState({})

  const addToCart = (product) => {
    setCart((currentCart) => ({
      ...currentCart,
      [product.title]: (currentCart[product.title] || 0) + 1,
    }))
  }

  const removeFromCart = (product) => {
    setCart((currentCart) => {
      const quantity = currentCart[product.title] || 0

      if (quantity <= 1) {
        const remainingCart = { ...currentCart }
        delete remainingCart[product.title]
        return remainingCart
      }

      return { ...currentCart, [product.title]: quantity - 1 }
    })
  }

  const cartItemCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0)

  return (
    <div>
<Header cartItemCount={cartItemCount}/>
<Home/>
<Taskbar/>
<Home2 cart={cart} onAddToCart={addToCart} onRemoveFromCart={removeFromCart}/>
<Footer/>



    </div>
  )
}

export default App
