import React, {FC} from 'react';
import {ScrollTrigger, Tween} from 'react-gsap';

const Me: FC = () => {
  return <div>
    <div style={{ height: 1000 }}>aaa</div>
    <ScrollTrigger start="-200px center" end="200px center" scrub={0.5}>
      <Tween
        to={{
          x: '300px',
        }}
      >
        <div style={{ width: '100px', height: '100px', background: '#ccc' }} />
      </Tween>
      <Tween
        to={{
          x: '300px',
        }}
      >
        <div style={{ width: '100px', height: '100px', background: '#999' }} />
      </Tween>
    </ScrollTrigger>
    <div style={{ height: 1000 }}>aaa</div>
  </div>
}

export default Me;
