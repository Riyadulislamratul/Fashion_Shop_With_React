import React from 'react'

const Mini_card = (props) => {
  return (
    <div className="mini_card">
            <div className="mini_content">
                <h4>{props.heading}</h4>
                <p>{props.para}</p>
            </div>
        </div>
  )
}

export default Mini_card