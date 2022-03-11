import {
  useState,
  useReducer,
  forwardRef,
  cloneElement,
  SyntheticEvent,
  ChangeEvent,
} from 'react'

import classes from './Form.module.scss'

export type FormProps = {
  children: React.ReactChild | React.ReactChild[]
  className?: string
} & React.ComponentPropsWithoutRef<'form'>

export function Form({ children, className = null, ...rest }: FormProps) {
  const classNameString = [classes.form, className].filter(i => !!i).join(' ')

  return (
    <form className={classNameString} {...rest}>
      {children}
    </form>
  )
}

export type FormGroupProps = {
  label: string
  input: React.ReactElement<HTMLInputElement>
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
  const id = `form__${label.replace(/[\s_]+/g, '-').toLowerCase()}`

  return (
    <div className={classNameString}>
      <label htmlFor={id}>{label}</label>
      {cloneElement(input, { id })}
      {helperText && <div role="note">{helperText}</div>}
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
  type?: 'text' | 'date' | 'email' | 'number' | 'password' | 'tel' | 'url'
  name: string
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

export function SubmitRow({ children }) {
  return <menu className={classes.submitRow}>{children}</menu>
}

type FormStateLoading = {
  loading: boolean
}
type FormStateError = {
  error: null | {
    inputName?: string
    message?: string
  }
}
type FormState = FormStateLoading & FormStateError
type FormNewState = FormStateLoading | FormStateError

export function useForm<T>(initialData: T) {
  const [form, setForm] = useReducer(
    (form: FormState & { data: T }, newState: FormNewState | { data: T }) => ({
      ...form,
      ...newState,
    }),
    {
      data: initialData,
      loading: false,
      error: null,
    }
  )

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    value: string | number | boolean | null
  ) => {
    const { name } = event.target as HTMLInputElement

    if (form.error?.inputName === name) {
      setForm({ error: null })
    }

    setForm({ data: { ...form.data, [name]: value } })
  }

  const isError = (inputName?: string) => {
    if (inputName) {
      return form.error?.inputName === inputName
    }

    return !!form.error
  }

  return { form, setForm, handleChange, isError }
}
