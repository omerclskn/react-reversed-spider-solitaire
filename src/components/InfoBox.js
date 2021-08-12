import React from 'react'

const InfoBox = ({request, complete}) => {
    return (
        <div className = "infobox">

            <div> Decks in Reserve: { 5 - request } </div> 
            <div> Completed Decks: { complete } </div> 

        </div>
    )
}

export default InfoBox
