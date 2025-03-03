
import React from 'react';

export default function Background() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-[-1]"
      style={{
        background: 'linear-gradient(to bottom, #F1F1F1, #C8C8C9, #9F9EA1, #8E9196)',
        overflow: 'hidden',
      }}
    >
      {/* Add subtle patterns or grain effect */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
             backgroundSize: '20px 20px'
           }} />
    </div>
  );
}
