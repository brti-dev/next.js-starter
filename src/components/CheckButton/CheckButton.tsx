import { memo, forwardRef } from 'react'

import {
  OverloadedElement,
  OverloadedElementProps,
} from 'interfaces/OverloadedElement'
import classes from './CheckButton.module.scss'
import buttonClasses from 'components/Button/Button.module.scss'

export type CheckButtonProps = {
  name: string
  value: string
  checked?: boolean
  disabled?: boolean
  loading?: boolean
  id?: string
  className?: string
  onChange?: (value: boolean) => void
  children: React.ReactNode
}

const CheckButton = forwardRef<HTMLLabelElement, CheckButtonProps>(
  (props, ref) => {
    const {
      name,
      value,
      checked,
      disabled,
      loading,
      id: naturalId,
      className,
      onChange = () => {},
      children,
      ...rest
    } = props
    const id = naturalId || `checkButton__${name}__${value}`

    const toggleChecked = () => onChange(!checked)

    return (
      <div
        className={[className, classes.checkButton]
          .filter(cn => !!cn)
          .join(' ')}
        {...rest}
      >
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled || loading}
          id={id}
          className="visually-hidden"
          onChange={toggleChecked}
        />
        <label
          htmlFor={id}
          className={`button ${buttonClasses.button}`}
          data-loading={loading && 'true'}
          ref={ref}
        >
          {children}
        </label>
      </div>
    )
  }
)

export type CheckButtonGroupProps = OverloadedElementProps & {
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

export const CheckButtonGroup: OverloadedElement<CheckButtonGroupProps> = (
  props: CheckButtonGroupProps
) => {
  const {
    as: Component = 'div',
    className,
    orientation = 'horizontal',
    ...rest
  } = props

  const classNames = [className, classes.container]
  if (orientation === 'vertical') {
    classNames.push(classes.containerVertical)
  }
  const classNameString = classNames.filter(cn => !!cn).join(' ')

  return <Component className={classNameString} {...rest} />
}

export default memo(CheckButton)
