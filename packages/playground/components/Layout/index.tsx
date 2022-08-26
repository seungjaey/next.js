import React, { ReactElement } from 'react'
import styles from './Layout.module.css'

interface Props {
  children: ReactElement | ReactElement[]
}

export default function Layout({ children }: Props) {
  return <div className={styles.wrap}>{children}</div>
}
