import React from 'react'

const BlankCard = ({complete, index}) => {
    return (
        <div className = "blank"
        style = {
                {
                    ...(complete > index ? { // if card's show property true, display the card 
                        background: (`var(--as)`),
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    } : "")
                }
            } >
            </div>
    )
}

export default BlankCard
