
import React from 'react';

export default function Background() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-[-1]"
      style={{
        background: 'linear-gradient(to bottom, #F6F6F7, #EFEFEF, #E6E6E6, #DADADA)',
        overflow: 'hidden',
      }}
    >
      {/* Premium paper-like grain texture overlay */}
      <div className="absolute inset-0 opacity-30 mix-blend-multiply" 
           style={{
             backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
             backgroundSize: '150px 150px'
           }} />
      
      {/* Subtle texture pattern */}
      <div className="absolute inset-0 opacity-8" 
           style={{
             backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
             backgroundSize: '20px 20px'
           }} />
      
      {/* Paper fiber-like subtle lines */}
      <div className="absolute inset-0 opacity-5" 
           style={{
             backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(22, 22, 22, .3) 25%, rgba(22, 22, 22, .3) 26%, transparent 27%, transparent 74%, rgba(22, 22, 22, .3) 75%, rgba(22, 22, 22, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(22, 22, 22, .3) 25%, rgba(22, 22, 22, .3) 26%, transparent 27%, transparent 74%, rgba(22, 22, 22, .3) 75%, rgba(22, 22, 22, .3) 76%, transparent 77%, transparent)',
             backgroundSize: '50px 50px'
           }} />
    </div>
  );
}
