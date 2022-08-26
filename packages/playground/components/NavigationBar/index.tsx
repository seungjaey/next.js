import React from 'react'
import Link from 'next/link'
import styles from './NavigationBar.module.css'

const LINK_LIST = [
  {
    href: '/default/csr',
    as: '/default/csr',
    label: 'default CSR',
  },
  {
    href: '/default/ssr',
    as: '/default/ssr',
    label: 'default SSR',
  },
  {
    href: '/default/ssg',
    as: '/default/ssg',
    label: 'default SSG',
  },
  {
    href: '/dynamic/csr/[id]',
    as: '/dynamic/csr/1',
    label: 'dynamic CSR',
  },
  {
    href: '/dynamic/ssr/[id]',
    as: '/dynamic/ssr/1',
    label: 'dynamic SSR',
  },
  {
    href: '/dynamic/ssg/[id]',
    as: '/dynamic/ssg/1',
    label: 'dynamic SSG',
  },
]

export default function NavigationBar() {
  return (
    <nav className={styles.wrap}>
      {
        LINK_LIST.map((item, index) => {
          const { href, as, label } = item
          return (
            <Link
              key={`navigation-bar-${index}`}
              href={href}
              as={as}
              passHref
            >
              <a>{label}</a>
            </Link>
          )
        })
      }
    </nav>
  )
}
