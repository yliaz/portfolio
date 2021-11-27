import React, {FC, useState} from 'react';
import styles from "./Trans.module.css"
import useLocalStorage from '@site/src/lib/useLocalStorage';

interface TransProps {
  zh: string;
  en: string;
}

const Trans: FC<TransProps> = (props) => {
  const [storedValue] = useLocalStorage<('zh' | 'en')[]>('translationLanguage', ['zh'])
  const {zh, en} = props

  return <>
    {storedValue.includes('zh') ? <p className={styles.zhContent}>{zh}</p> : null}
    {storedValue.includes('en') ? <p className={styles.enContent}>{en}</p> : null}
  </>
}

export default Trans