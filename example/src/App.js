import React, { useEffect } from 'react';

import './App.css';

import A from './a'
import Random from './random'

import core from './synapse'
import Bot from './Bot';
import Memo from './Memo'
class App extends React.Component {

  render() {
    return (
      <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ color: 'red' }}>{34534534}</h1>
        {core.data1.price}
        <Random />
        <h1> {core.data1.i} + {core.data1.price} = {core.data1.i + core.data1.price}</h1>


        <A />

        <Memo />
      </div>
    );
  }
}



export default React.memo(core.withSynapse(App))