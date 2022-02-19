import Tooltip from '../Tooltip'
import Button, { ButtonProps } from '.'

export type IconButtonProps = ButtonProps & {
  tooltip?: string
}

function IconButton({ children, ...rest }: any) {
  return (
    <Button icon={true} {...rest}>
      {children}
    </Button>
  )
}

function CustomIconButton({ tooltip, ...rest }: IconButtonProps) {
  return (
    <>
      {tooltip ? (
        <Tooltip label={tooltip}>
          <IconButton aria-label={tooltip} {...rest} />
        </Tooltip>
      ) : (
        <IconButton {...rest} />
      )}
    </>
  )
}
export default CustomIconButton
