import React from 'react'
import useMeasure from 'react-use-measure'
import { useSpring, animated } from '@react-spring/web'

import styles from './styles.module.css'

const SpringDemo: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false)

  const [ref, { width }] = useMeasure()
  const props = useSpring({ width: open ? width : 0 })

  return (
    <div className={styles.container}>
      <div ref={ref} className={styles.main} onClick={() => setOpen(o => !o)}>
        <animated.div className={styles.fill} style={props} />
        <animated.div className={styles.content}>{props.width.to(x => x.toFixed(0))}</animated.div>
      </div>
    </div>
  )
}

export default SpringDemo
