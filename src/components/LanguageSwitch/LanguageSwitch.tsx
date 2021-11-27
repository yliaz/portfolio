import React from 'react';
import useLocalStorage from '@site/src/lib/useLocalStorage';
import styles from './LanguageSwitch.module.css'

const LanguageSwitch = () => {
  const [storedValue, setValue] = useLocalStorage<('zh' | 'en')[]>('translationLanguage', ['zh'])

  const onClick = (value: 'zh' | 'en') => {
    if (storedValue.includes(value)) {
      if (storedValue.length > 1) {
        setValue(storedValue.filter(item => item !== value))
        window.location.reload()
      }
    } else {
      setValue([...storedValue, value])
      window.location.reload()
    }
  }

  return <div className={styles.wrapper}>
    <b>语言选择:&nbsp;&nbsp;</b>
    <button
      onClick={() => onClick('zh')}
      className={`button button--primary ${storedValue.includes('zh') ? '' : 'button--outline'} ${styles.tab}`}
    >
      中文
    </button>
    <button
      onClick={() => onClick('en')}
      className={`button button--primary ${storedValue.includes('en') ? '' : 'button--outline'} ${styles.tab}`}
    >
      英文
    </button>
  </div>
}

export default LanguageSwitch