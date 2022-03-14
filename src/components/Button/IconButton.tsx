import Tooltip from '../Tooltip'
import Button, { ButtonProps } from '.'

export type IconButtonProps = ButtonProps & {
  tooltip?: string
}

/**
 * Sugar for <Button shape="circle"><Icon /></Button>
 * <Button> is preferred; This component may be depreciated in future
 */
function IconButton({ children, shape = 'circle', ...rest }: IconButtonProps) {
  return (
    <Button shape={shape} {...rest}>
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
