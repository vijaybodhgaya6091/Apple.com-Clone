import React, { useState } from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { NavLink } from 'react-router-dom'
// import {useSelector} from 'react-redux'

const CartBtn = () => {

  const [count, setCount] = useState(0)

  let handleInc = () => {
    setCount(count+1)
  }
  let handleDec = () => {
    if (count <= 0) {
      alert('cart empty')
    } else {
      setCount(count-1)
    }
  }
    return (
      <div>
          <NavLink to="/cart" >
              <ShoppingBagOutlinedIcon sx={{color: "white"}} />
          <span className='cart-nav-count'>0</span>
                </NavLink>
    </div>
  )
}

export default CartBtn