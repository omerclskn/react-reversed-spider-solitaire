import React from 'react'
import useWindowDimensions from '../useWindowDimensions'

const BlankCard = ({complete, index}) => {

    const { height, width:width2 } = useWindowDimensions();

    return (
        <li style={{ ...(width2 < 1150 ? {
                        height: width2 > 910 ? 90 : 50,
                        width: width2 > 910 ? 65 : 36
                    } : "") }}
        >
        <div className = "blank"
        style = {
                {
                    ...(complete > index ? { // if card's show property true, display the card 
                        background: (`var(--as)`),
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    } : ""),
                }
            } >
            </div>
            </li>
    )
}

export default BlankCard
