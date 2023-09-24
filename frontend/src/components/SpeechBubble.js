import React from 'react';

const SpeechBubble = ({ text, imageUrl, bubbleStyle, textStyle }) => {
  return (
    <div style={{ top: '100px', left:'90px', position: 'relative', ...bubbleStyle }}>
      {/* Speech Bubble Image */}
      <img src={imageUrl} alt="Speech Bubble" style={{ width: '100%', height: '100%' }} />

      {/* Textbox Overlay */}
      <div style={{ position: 'absolute', top: '90px', left: '20px', width: '100%', maxWidth: '350px', background: 'transparent', padding: '10px', borderRadius: '10px', ...textStyle }}>
        <p style={{ wordWrap: 'break-word' }}>{text}</p>
      </div>
    </div>
  );
};

export default SpeechBubble;

