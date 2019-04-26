import React from 'react'

function MenuList(props) {
    
  return (
    <ul>
        {
            props.food.map((f, i) => <li key={i}>{f}</li>)
        }
    </ul>
  )
}

export default MenuList;