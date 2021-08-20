import React from 'react'
import useWindowDimensions from '../../useWindowDimensions'

const BlankColumnCard = ({clickCard, card, index}) => {

    const { width:width2 } = useWindowDimensions();


    return (
        <div
                id = {0}
                className="blank"
                onClick = { clickCard(card, index) }
                style={{
                    ...(width2 < 1150 ? {
                        height: width2 > 910 ? 90 : 50,
                        width: width2 > 910 ? 65 : 36
                    } : "")
                }} >
                    </div>
    )
}

export default BlankColumnCard
