import React, { useEffect } from 'react'
import core from './synapse'

const Bot = ({ iValue }) => {
    useEffect(() => {
        console.log('ONLY RERENDER THEN THE PROPS CHANGES')
    })
    return (
        <h1 onClick={() => core.data1.i = 0}>Bot {iValue}</h1>
    )
}

export default React.memo(Bot)