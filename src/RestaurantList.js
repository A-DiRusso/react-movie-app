/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

export default function RestaurantList(props) {
  return (
    <ul>
        {
            props.restaurants.map((f, i) => {
                return (
                    <li 
                        key={i}
                        >
                            <a
                                href="#"
                                onClick={() => {
                                    props.handleClick(f)
                                }}
                            >{f}</a>
                        </li>
                )
            })
        }
    </ul>
  )
}
