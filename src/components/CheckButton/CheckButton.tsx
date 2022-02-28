import { memo } from 'react'

import {
  OverloadedElement,
  OverloadedElementProps,
} from 'interfaces/OverloadedElement'
import classes from './CheckButton.module.scss'

export const checkButtonContainerClass = classes.container

export type CheckButtonProps = {
  name: string
  value: string
  checked?: boolean
  id?: string
  onChange?: (value: boolean) => void
  children: React.ReactNode
}

function CheckButton({
  name,
  value,
  checked = false,
  id,
  onChange = () => {},
  children,
}: CheckButtonProps) {
  const toggleChecked = () => onChange(!checked)

  if (!id) {
    id = `checkButton__${name}__${value}`
  }

  return (
    <div className={classes.checkButton}>
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        id={id}
        className="visually-hidden"
        onChange={toggleChecked}
      />
      <label htmlFor={id} className="button">
        {children}
      </label>
    </div>
  )
}

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
