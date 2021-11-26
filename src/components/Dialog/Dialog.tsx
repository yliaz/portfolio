import React, {FC} from 'react';
import styles from './Dialog.module.css';
import BossImage from '../../../static/img/docs/boss.svg';
import StaffImage from '../../../static/img/docs/staff.svg';

interface DialogProps {
  question?: string;
  answer?: string;
  title?: string;
}

const Dialog: FC<DialogProps> = (props) => {

  const { question, answer } = props

  return <div className={styles.wrapper}>
    {
      question
        ? (
          <div className={styles.question}>
            <BossImage style={{ width: 32, height: 32, minWidth: 32 }} />
            <span>{question}</span>
          </div>
        )
        : null
    }
    {
      answer
        ? (
          <div className={styles.answer}>
            <span>
              {answer}
            </span>
            <StaffImage style={{ width: 32, height: 32, minWidth: 32 }}  />
          </div>
        )
        : null
    }


  </div>
}

export default Dialog