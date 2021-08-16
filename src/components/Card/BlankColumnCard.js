import React from 'react'
import useWindowDimensions from '../useWindowDimensions'

const BlankColumnCard = ({clickCard, card, index}) => {

    const { height, width:width2 } = useWindowDimensions();


    return (
        <div
                id = {0}
                className="blank"
                onClick = { clickCard(card, index) }
                style={{
                    ...(width2 < 950 ? {
                        height: width2 > 700 ? 90 : 50,
                        width: width2 > 700 ? 65 : 36
                    } : "")
                }} >
                    </div>
    )
}

export default BlankColumnCard
