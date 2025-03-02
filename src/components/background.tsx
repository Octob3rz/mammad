
import React from 'react';

export default function Background() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-[-1]"
      style={{
        background: 'linear-gradient(to bottom, #8E9196, #403E43, #221F26, #000000)',
        overflow: 'hidden',
      }}
    />
  );
}
