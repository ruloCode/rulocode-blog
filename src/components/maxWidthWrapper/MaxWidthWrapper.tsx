import React from 'react'
import styles from './MaxWidthWrapper.module.scss'
import { cn } from '@/utils/utils'

interface Iprops {
  children: React.ReactNode
  className?: string
}
export const MaxWidthWrapper = ({ children, className }: Iprops) => {
  return <div className={cn(styles.wrapper, className)}>{children}</div>
}

export default MaxWidthWrapper
