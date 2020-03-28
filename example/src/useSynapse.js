import React, { useState, useEffect } from 'react'
import core from './synapse'

export default function useSynapse(props) {
    const [Core, setCore] = useState(core)

    useEffect(() => {
        console.log('HOOK')
        console.log(React.createContext(useSynapse))
    }, []);

    return Core
}
