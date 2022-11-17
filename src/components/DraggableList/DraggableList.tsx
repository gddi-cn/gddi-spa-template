import React from 'react'
import { useSprings, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import _ from 'lodash'

import styles from './styles.module.css'

const items = ['JavaScript', 'Rust', 'Cpp', 'Go']

function _toConsumableArray<T>(arr: Array<T>) {
  if (Array.isArray(arr)) {
    let arr2 = Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  else {
    return Array.from(arr);
  }
}

function swap<T>(array: Array<T>, moveIndex: number, toIndex: number): Array<T> {
  let item = array[moveIndex];
  let length = array.length;
  let diff = moveIndex - toIndex;

  if (diff > 0) {
    // move left
    return ([] as Array<T>).concat(
      _toConsumableArray(array.slice(0, toIndex)),
      [item],
      _toConsumableArray(array.slice(toIndex, moveIndex)),
      _toConsumableArray(array.slice(moveIndex + 1, length))
    );
  } else if (diff < 0) {
    // move right
    return ([] as Array<T>).concat(
      _toConsumableArray(array.slice(0, moveIndex)),
      _toConsumableArray(array.slice(moveIndex + 1, toIndex + 1)),
      [item],
      _toConsumableArray(array.slice(toIndex + 1, length))
    );
  }
  return array;
}

const fn = (
  order: number[],
  active = false,
  originalIndex = 0,
  curIndex = 0,
  y = 0
) => (index: number) =>
  active && index === originalIndex
    ? {
      y: curIndex * 50 + y,
      scale: 1.1,
      zIndex: 1,
      shadow: 15,
      immediate: (key: string) => key === 'y' || key === 'zIndex',
    }
    : {
      y: order.indexOf(index) * 50,
      scale: 1,
      zIndex: 0,
      shadow: 1,
      immediate: false,
    }

const DraggableList: React.FC = () => {
  const order = React.useRef(items.map((_, idx) => idx))
  const [springs, api] = useSprings(items.length, fn(order.current))

  const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex)
    const curRow = _.clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)
    const newOrder = swap(order.current, curIndex, curRow)
    api.start(fn(newOrder, active, originalIndex, curIndex, y)) // Feed springs new style data, they'll animate the view without causing a single render
    if (!active) order.current = newOrder
  })

  return (
    <div className={styles.container}>
      <div className={styles.content} style={{ height: items.length * 50 }} >
        {springs.map(({ zIndex, shadow, y, scale }, i) => (
          <animated.div
            {...bind(i)}
            key={i}
            style={{
              zIndex,
              boxShadow: shadow.to(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
              y,
              scale,
            }}
            children={items[i]}
          />
        ))}
      </div>
    </div>
  )
}

export default DraggableList
