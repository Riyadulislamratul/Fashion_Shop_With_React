import React from 'react'

const Sale_card = (props) => {
  return (
        <div className="sale_card">
            <div className="sale_content">
                <p>{props.para}</p>
                <h3>{props.heading}</h3>
                <button className='banner_btn'>SHOP NOW</button>
            </div>
        </div>
  )
}

export default Sale_card