import React, {useEffect, useState} from 'react';
import styles from './styles.module.css'
import BrowserOnly from '@docusaurus/BrowserOnly';

const LanguageSwitch = () => {

  return <BrowserOnly>
    {
      () => {
        const [currentLanguage, setCurrentLanguage] = useState<('zh' | 'en')[]>(['zh'])
        const chineseParagraphs = window?.document.querySelectorAll<HTMLElement>('.chinese-paragraph') || []
        const englishParagraphs = window?.document.querySelectorAll<HTMLElement>('.english-paragraph') || []

        const onClick = (value: 'zh' | 'en') => {
          if (currentLanguage.includes(value)) {
            if (currentLanguage.length > 1) {
              setCurrentLanguage(prev => prev.filter(item => item !== value))
            }
          } else {
            setCurrentLanguage(prev => [...prev, value])
          }
        }

        useEffect(() => {
          if (currentLanguage.includes('zh')) {
            chineseParagraphs.forEach(item => item.style.display = 'block')
          } else {
            chineseParagraphs.forEach(item => item.style.display = 'none')
          }
          if (currentLanguage.includes('en')) {
            englishParagraphs.forEach(item => item.style.display = 'block')
          } else {
            englishParagraphs.forEach(item => item.style.display = 'none')
          }
        }, [JSON.stringify(currentLanguage)])

        return <div className={styles.wrapper}>
          <b>语言选择:&nbsp;&nbsp;</b>
          <button
            onClick={() => onClick('zh')}
            className={`button button--primary ${currentLanguage.includes('zh') ? '' : 'button--outline'} ${styles.tab}`}
          >
            中文
          </button>
          <button
            onClick={() => onClick('en')}
            className={`button button--primary ${currentLanguage.includes('en') ? '' : 'button--outline'} ${styles.tab}`}
          >
            英文
          </button>
        </div>
      }
    }
  </BrowserOnly>
}

export default LanguageSwitch