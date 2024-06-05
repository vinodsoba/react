import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  const context = useRef(null);

  useEffect(() => {

  }, [])
  
 const beginDraw = () =>{}
 const draw = () => {}
 const stopDraw = () => {}
  
  return (
    <canvas 
    onMouseUp={beginDraw}
    onMouseDown={draw}
    onMouseOut={stopDraw}
    />
  )
}

export default Canvas