import React, {ReactNode} from 'react';
import styles from './BrowserWindow.module.css';

interface Props {
  children: ReactNode;
  minHeight?: number;
  url?: string;
}

function BrowserWindow({children, minHeight, url}: Props): JSX.Element {
  return (
    <div className={styles.browserWindow} style={{minHeight}}>
      <div className={styles.browserWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{background: '#f25f58'}} />
          <span className={styles.dot} style={{background: '#fbbe3c'}} />
          <span className={styles.dot} style={{background: '#58cb42'}} />
        </div>
        <div className={styles.browserWindowAddressBar}><a href={url} target='_blank'>{url}</a></div>
        <div className={styles.browserWindowMenuIcon}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div>
      </div>

      <div className={styles.browserWindowBody}>
        {children}
      </div>
    </div>
  );
}

export default BrowserWindow;
