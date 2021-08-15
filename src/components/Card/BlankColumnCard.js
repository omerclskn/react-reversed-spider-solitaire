import React from 'react'

const BlankColumnCard = ({clickCard, card, index}) => {
    return (
        <div
                id = {0}
                className="blank"
                onClick = { clickCard(card, index) } >
                    </div>
    )
}

export default BlankColumnCard
