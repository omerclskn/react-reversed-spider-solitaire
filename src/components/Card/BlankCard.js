import React from 'react'
import useWindowDimensions from '../useWindowDimensions'

const BlankCard = ({complete, index}) => {

    const { height, width:width2 } = useWindowDimensions();

    return (
        <div className = "blank"
        style = {
                {
                    marginLeft: index * (width2 < 810 ? 80 : 100),
                    ...(complete > index ? { // if card's show property true, display the card 
                        background: (`var(--as)`),
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    } : ""),
                    ...(width2 < 950 ? {
                        height: width2 > 700 ? 90 : 50,
                        width: width2 > 700 ? 65 : 36
                    } : "")
                }
            } >
            </div>
    )
}

export default BlankCard
