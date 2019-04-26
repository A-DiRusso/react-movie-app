/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function CuisineList(props) {
  return (
    <ul>
        {
            props.cuisine.map((cuisine, i) => {
                return (<li 
                            key={i}>
                            <a
                                href="#"
                                onClick={() => {
                                    props.handleClick(cuisine);
                                }}
                            >{cuisine}</a>
                        </li>)
            })
        }
  </ul>
  )
}
