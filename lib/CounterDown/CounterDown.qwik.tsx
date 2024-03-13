/** @jsxImportSource @builder.io/qwik */

import {
  CSSProperties,
  ClassList,
  Slot,
  component$,
  useSignal,
  useTask$,
  useVisibleTask$,
} from '@builder.io/qwik'
import { colorFlagsOptions } from '../Theme/ColorFlags'
import { selectedFlag } from '../Theme/selectedFlag'
import { CCounterDownProps, counterVariantFlagsOptions } from './CounterDown.common'
import styles from './CounterDown.module.css'

export interface CounterDownProps extends CCounterDownProps {
  class?: ClassList
  style?: CSSProperties
  beerTime?: number
  started?: boolean
}

export const CounterDown = component$(({ beerTime, started = true, ...props }: CounterDownProps) => {

  const variant = selectedFlag(props, counterVariantFlagsOptions)

  const now = useSignal(new Date().getTime())
  const beerTimed = beerTime ? useSignal(beerTime) : useSignal( now.value + 1000 * 60 * 60 * 24 * 7)
  

  const days = useSignal(0)
  const hours = useSignal(0)
  const minutes = useSignal(0)
  const seconds = useSignal(0)
  const interval = useSignal<any>()

  const distance = useSignal(0)
  useVisibleTask$(({ track }) => {
    track(() => days.value)
    track(() => hours.value)
    track(() => minutes.value)
    track(() => seconds.value)
    track(() => now.value)
    track(() => started)
    track(() => beerTimed.value)

    if (started) {
       interval.value = setInterval(() => {
        now.value = new Date().getTime()
        distance.value = beerTimed.value - now.value
  
        days.value = Math.floor(distance.value / (1000 * 60 * 60 * 24))
        hours.value = Math.floor(
          (distance.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        minutes.value = Math.floor((distance.value % (1000 * 60 * 60)) / (1000 * 60))
        seconds.value = Math.floor((distance.value % (1000 * 60)) / 1000)
  
        if (distance.value < 0) {
          clearInterval(interval.value)
          days.value = 0
          hours.value = 0
          minutes.value = 0
          seconds.value = 0
          
        }
       
      }, 1000)
    }

   
    return () => clearInterval(interval.value)
  })

  if (variant === 'counterdown') {
     return  <div class={styles.counterdown}>{seconds}</div>
  }

  if (variant === 'clock') {
    return (
      <div style={props.style} class={[props.class, styles.root]}>
        
        <div class={styles.clock}>
          <div class={styles.count}>{hours}</div>
          <div class={styles.titleCount}>h</div>
        </div>
  
        <div class={styles.clock}>
          <div class={styles.count}>{minutes}</div>
          <div class={styles.titleCount}>m</div>
        </div>
  
        <div class={styles.clock}>
          <div class={styles.count}>{seconds}</div>
          <div class={styles.titleCount}>s</div>
        </div>
  
  
      </div>
    )
  }

  if (variant === 'full') {
    return (
      <div class={[props.class, styles.root]}>
        <div class={styles.countdown}>
          <div class={styles.count}>{days}</div>
          <div class={styles.titleCount}>Days</div>
        </div>
        
        <div class={styles.countdown}>
          <div class={styles.count}>{hours}</div>
          <div class={styles.titleCount}>Hours</div>
        </div>
  
        <div class={styles.countdown}>
          <div class={styles.count}>{minutes}</div>
          <div class={styles.titleCount}>Minutes</div>
        </div>
  
        <div class={styles.countdown}>
          <div class={styles.count}>{seconds}</div>
          <div class={styles.titleCount}>Seconds</div>
        </div>
  
  
      </div>
    )
  }

  return  <div class={styles.counterdown}>{seconds}</div>
 
})
