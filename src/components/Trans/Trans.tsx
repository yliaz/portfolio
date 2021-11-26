import React, {FC, useState} from 'react';
import styles from "./Trans.module.css"

interface TransProps {
  zh: string;
  en: string;
}

const Trans: FC<TransProps> = (props) => {
  const [enVisible, setEnVisible] = useState<boolean>(false)
  const {zh, en} = props

  return <>
    <p className={styles.zhContent} onClick={() => setEnVisible(prev => !prev)}>{zh}</p>
    {enVisible ? <p className={styles.enContent}>{en}</p> : null}
  </>
}

export default Trans