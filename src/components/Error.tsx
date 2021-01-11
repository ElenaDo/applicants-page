import React from 'react';
import styles from './Error.module.css';

function Error({ message, reload }: {message: string, reload: any}) {
  return (
    <div>
      <p className={styles.error}>{message}</p>
      <button className={styles.btn} type="button" onClick={reload}>Try again</button>
    </div>
  );
}

export default Error;
