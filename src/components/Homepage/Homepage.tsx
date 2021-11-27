import React, {FC, useEffect, useState} from 'react';
import styles from "./Homepage.module.css"
import Z from '@site/static/img/zhuye/Z.svg'
import H from '@site/static/img/zhuye/H.svg'
import U from '@site/static/img/zhuye/U.svg'
import Y from '@site/static/img/zhuye/Y.svg'
import E from '@site/static/img/zhuye/E.svg'
import { useSpring, animated } from "react-spring";

interface AnimatedTextProps {
  section: string;
  currentSection: string;
  activeColor: string;
  onClick: () => void;
}

const AnimatedText: FC<AnimatedTextProps> = (props) => {
  const {section, currentSection, activeColor, onClick, children} = props
  const [{ color }, set] = useSpring(() => ({ color: "#BBBBBB" }));
  const isHome = currentSection === ''
  const isActive = section === currentSection
  useEffect(() => {
    if (isActive) {
      set({ color: activeColor })
    } else {
      set({ color: "#BBBBBB", delay: 200 })
    }
  }, [isActive])

  return <animated.div
    style={{ color }}
    className={styles.title}
    onClick={onClick}
    onMouseEnter={() => set({ color: activeColor })}
    onMouseLeave={() => !isActive && set({ color: "#BBBBBB", delay: 200 })}
  >
    {children}
  </animated.div>
}

const Homepage: FC = () => {
  const [currentSection, setCurrentSection] = useState<string>('')
  const [{ color }, set] = useSpring(() => ({ color: "#BBBBBB" }));

  return <div>
    <div
      className={styles.logo}
      onClick={() => setCurrentSection('')}
    >
      <Z /><H /><U /><Y /><E />
    </div>
    <div className={styles.hugeName}>
      <AnimatedText
        activeColor="#F75454"
        section='Z'
        currentSection={currentSection}
        onClick={() => setCurrentSection('Z')}
      >
        <Z />
      </AnimatedText>
      <AnimatedText
        activeColor="#FE9B4A"
        section='H'
        currentSection={currentSection}
        onClick={() => setCurrentSection('H')}
      >
        <H />
      </AnimatedText>
      <AnimatedText
        activeColor="#25C2A0"
        section='U'
        currentSection={currentSection}
        onClick={() => setCurrentSection('U')}
      >
        <U />
      </AnimatedText>
      <AnimatedText
        activeColor="#5493F7"
        section='Y'
        currentSection={currentSection}
        onClick={() => setCurrentSection('Y')}
      >
        <Y />
      </AnimatedText>
      <AnimatedText
        activeColor="#9B4AFF"
        section='E'
        currentSection={currentSection}
        onClick={() => setCurrentSection('E')}
      >
        <E />
      </AnimatedText>
    </div>
  </div>
}

export default Homepage