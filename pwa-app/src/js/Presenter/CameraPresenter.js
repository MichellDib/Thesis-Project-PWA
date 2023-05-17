import React, { useRef } from 'react';

function Camera() {
    const videoRef = useRef(null);

  function startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
    });
  }

  return (
    <div>
      <button onClick={startCamera}>Open camera</button>
      <video ref={videoRef} />
    </div>
  );
}

export default Camera;