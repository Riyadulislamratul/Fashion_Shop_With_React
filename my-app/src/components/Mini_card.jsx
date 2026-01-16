import React from 'react'

const Mini_card = (props) => {
  return (
    <div className="mini_card">
            <div className="mini_content">
                <div className="mini_image">
                  <img src={props.img} alt="" />
                </div>
                <h4>{props.heading}</h4>
                <p>{props.para}</p>
            </div>
        </div>
  )
}

export default Mini_card