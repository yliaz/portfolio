import React, {FC, useRef} from 'react';
import {ScrollTrigger, Tween, Timeline} from 'react-gsap';
import NameCube from '@site/src/components/NameCube';

const Me: FC = () => {

  const cubeRef = useRef(null)

  return <div style={{ position: 'relative' }}>
    <div style={{ height: 10000 }}>aaa</div>
    <div style={{ position: 'absolute', right: '200px', top: '200px' }}>
      <ScrollTrigger
        trigger="trigger"
        start="200px center"
        end="4000px center"
        scrub={0.5}
        markers={true}
        pin={true}
      >
        <Timeline target={<NameCube />}>
          <Tween
            to={{
              rotationY: 90,
            }}
            target="cubeRef"
          />
          <Tween
            to={{
              rotationY: 180,
            }}
            target="cubeRef"
          />
          <Tween
            to={{
              rotationY: 270,
            }}
            target="cubeRef"
          />
          <Tween
            to={{
              rotationY: 360,
            }}
            target="cubeRef"
          />
        </Timeline>
      </ScrollTrigger>
    </div>
  </div>
}

export default Me;
