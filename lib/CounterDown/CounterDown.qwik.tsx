/** @jsxImportSource @builder.io/qwik */

import {
  CSSProperties,
  ClassList,
  component$,
  useComputed$,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik'
import { selectedFlag } from '../Theme/selectedFlag'
import {
  CCounterDownProps,
  counterVariantFlagsOptions,
} from './CounterDown.common'
import styles from './CounterDown.module.css'

export interface CounterDownProps extends CCounterDownProps {
  class?: ClassList
  style?: CSSProperties
  beerTime: number
  started: boolean
}

export const CounterDown = component$((props: CounterDownProps) => {
  const variant = selectedFlag(props, counterVariantFlagsOptions)
  const nowSig = useSignal(new Date().getTime())

  const times = useComputed$(() => {
    const now = nowSig.value
    const _beerTime = props.beerTime
    const distance = Math.max(_beerTime - now, 0)

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    return {
      days,
      hours,
      minutes,
      seconds,
    }
  })

  const { days, hours, minutes, seconds } = times.value

  const intervalSig = useSignal<any>()

  useVisibleTask$(({ track, cleanup }) => {
    const _started = track(() => props.started)

    intervalSig.value = setInterval(() => {
      if (_started) {
        nowSig.value = new Date().getTime()
      }
    }, 500)

    cleanup(() => clearInterval(intervalSig.value))
  })

  if (variant === 'counterdown') {
    return <div class={styles.counterdown}>{seconds}</div>
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

  return <div class={styles.counterdown}>{seconds}</div>
})
