import React from 'react'
import SpeechBubble from './SpeechBubble'
import Noun from './Noun'



function Description() {

  return (
    <>
        <div style={{ position: 'relative', width: '100%'}}>
            <SpeechBubble
            text="Hello, this is a speech bubblex.xxxxx  xxxx  xxxxxxxxxxx"
            imageUrl="/Assets/speechbubble.png" // Replace with your image path
            bubbleStyle={{ width: '400px', height: '300px' }}
            textStyle={{ fontSize: '16px', color: 'black' }}
            />
            <Noun />
        </div>
        
    </>
  )
}

export default Description