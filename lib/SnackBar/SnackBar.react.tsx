/** @jsxImportSource react */
import classNames from 'classnames'
import styles from './SnackBar.module.css'

export function SnackBar() {
  return (
    <div className={classNames([styles.container, styles.bottomRight])}>
      <div
        className={classNames([
          styles.snackBar,
          styles.bottomRight,
          styles.darkThemeBackground,
        ])}
      >
        <p className={styles.darkTextLabel}>Message</p>
        <p
          className={classNames([
            styles.textAction,
            styles.lightTextAction,
            styles.primary,
          ])}
        >
          ACTION
        </p>
      </div>
    </div>
  )
}
