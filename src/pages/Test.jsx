import React from 'react'
import Canvas from '../components/canvas/Canvas';


function Test() {
  return (
    <div>
      {process.env.REACT_APP_SECRET}
        <Canvas/>
    </div>
  )
}

export default Test