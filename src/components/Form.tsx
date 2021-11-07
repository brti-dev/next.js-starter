import { useState, forwardRef, cloneElement, SyntheticEvent } from 'react'

import classes from 'styles/components/form.module.scss'

export type Form = {
  children: React.ReactElement
  className?: string
} & React.ComponentPropsWithoutRef<'form'>

export function Form({ children, className = null, ...rest }) {
  const classNameString = [classes.form, className].filter(i => !!i).join(' ')

  return (
    <form className={classNameString} {...rest}>
      {children}
    </form>
  )
}

export type FormGroupProps = {
  label: string
  input: React.ReactElement
  className?: string
  error?: boolean
  helperText?: string
} & React.ComponentPropsWithoutRef<'div'>

export function FormGroup({
  label,
  input,
  className = null,
  error = false,
  helperText = null,
}: FormGroupProps) {
  const classNames = [classes.formGroup, className]
  if (error) classNames.push(classes.error)
  const classNameString = classNames.filter(i => !!i).join(' ')
  const id = `form__${label}`

  return (
    <div className={classNameString}>
      <label htmlFor={id}>{label}</label>
      {cloneElement(input, { id })}
      {helperText && <p>{helperText}</p>}
    </div>
  )
}

function format(text) {
  return text != null ? text : ''
}

function unformat(text: string) {
  return text.trim().length === 0 ? null : text
}

export type TextInputProps = {
  type?: string
  name?: string
  value?: string
  multiline?: boolean
  rows?: number
  // maxRows?: number
  onChange?: (event: any, text: string) => void
} & Omit<JSX.IntrinsicElements['input'], 'onChange'> & // Necessary because of some strange error
  Omit<JSX.IntrinsicElements['textarea'], 'onChange'>

export const TextInput = forwardRef<
  HTMLTextAreaElement & HTMLInputElement,
  TextInputProps
>((props, ref) => {
  const {
    type = 'text',
    name,
    value,
    multiline = false,
    rows = 1,
    // maxRows,
    onChange = null,
    ...fieldProps
  } = props
  const [textValue, setTextValue] = useState<string | null>(format(value))

  const handleBlur = (event: SyntheticEvent) => {
    if (onChange) {
      onChange(event, unformat(textValue))
    }
  }

  const handleChange = (event: SyntheticEvent) => {
    const { value } = event.target as HTMLInputElement
    setTextValue(value)
  }

  if (multiline) {
    return (
      <textarea
        {...fieldProps}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        rows={rows}
        ref={ref}
        className="input"
        value={textValue}
      />
    )
  }

  return (
    <input
      type={type}
      {...fieldProps}
      name={name}
      value={textValue}
      onBlur={handleBlur}
      onChange={handleChange}
      ref={ref}
      className="input"
    />
  )
})
