import React, { useEffect } from 'react'
import Bot from './Bot'
import core from './synapse'

function Memo() {
    useEffect(() => {
        console.log('Memo')
    })
    return (
        <div>
            <Bot iValue={core.data1.i} />

            <Bot iValue={core.data1.i} />

            <label>asdadad</label>
        </div>
    )
}
export default React.memo(core.withSynapse(Memo))