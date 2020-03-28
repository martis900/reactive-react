import React from 'react'

import Synapse from 'synapse'

export default new Synapse({
    framework: React,
    data: {
        data1: {
            price: 5,
            i: 0,
            visable: true
        },
        data2: {
            text: 'as'
        }
    }
})