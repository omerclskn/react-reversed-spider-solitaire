import React from 'react'
import '../assets/css/card.css'

const CardCol = ({item, index_val}) => {
    return (
        <div className="card-col" style={{ marginTop:((6-index_val)*20), zIndex:6-index_val}}> 
        {item} 
        </div>
    )
}

export default CardCol
