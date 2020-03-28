import React, { useEffect } from 'react'

import core from './synapse'

const a = ({ __uniqueIdentifier }) => {

    return (
        <div>
            <h1 style={{ color: 'red' }}>{__uniqueIdentifier}</h1>
            <button onClick={() => core.data1.i++}>i = {core.data1.i}</button>
            <button onClick={() => core.data1.price += 3}>price = {core.data1.price}</button>
        </div>
    )
}
export default React.memo(core.withSynapse(a))