import React from 'react'
import useWindowDimensions from '../useWindowDimensions'

const responsive = (width) => {

    if (width > 1000) return 150
    if (width > 850) return 130
    if (width > 700) return 110
    if (width > 600) return 95
    if (width > 500) return 80
    if (width > 400) return 50

    return 30
}

const BlankCard = ({complete, index}) => {

    const { height, width } = useWindowDimensions();

    let resp = responsive(width)

    return (
        <div className = "blank"
        style = {
                {
                    marginLeft: index * resp,
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
