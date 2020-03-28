import React, { useEffect } from 'react'

import core from './synapse'

export default core.withSynapse(() => {
    useEffect(() => {
        console.log('MOUNTED')
    }, [])
    return <div>RANDOM COMPONENT = {core.data1.price}</div>
})
