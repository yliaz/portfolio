import React, {useRef, forwardRef, useImperativeHandle} from 'react';
import styles from './styles.module.css'

const NameCube = forwardRef((props, ref: any) => {

  const cubeRef = useRef(null)
  const trigger = useRef(null);
  useImperativeHandle(ref, () => ({
    cubeRef,
    trigger,
  }));

  return <div className={styles.wrapper} ref={trigger}>
    <div className={styles.cube} ref={cubeRef}>
      <div className={styles.front}>front</div>
      <div className={styles.back}>back</div>
      <div className={styles.top}>top</div>
      <div className={styles.bottom}>bottom</div>
      <div className={styles.left}>left</div>
      <div className={styles.right}>right</div>
    </div>
  </div>
})

export default NameCube
