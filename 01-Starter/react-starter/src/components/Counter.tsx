import { useState } from 'react'
import styles from './Counter.module.css'

export default function Counter() {
  const [count, setCount] = useState<number>(0)

  function increment() {
    setCount(count + 1)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Counter</div>
      <div className={styles.display} >
        {count}
      </div>
      <div className={styles.controls}>
        <button className={styles.button} onClick={increment} >
          +
        </button>
      </div>
    </div>
  )
}
