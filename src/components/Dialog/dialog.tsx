import { Dialog, DialogProps as ReachDialogProps } from '@reach/dialog'

import useMediaQuery from 'lib/use-media-query'

export type DialogProps = Omit<ReachDialogProps, 'isOpen'> & {
  className?: string
  // Expand the modal to the edges of the viewport; 'auto' by default: fullscreen on mobile only
  fullscreen?: boolean | 'auto'
  onDismiss: () => void // Required
  open?: boolean // Renamed from isOpen for local lexical consistency
}

export default function CustomDialog({
  open,
  fullscreen = 'auto',
  ...rest
}: DialogProps) {
  const isScreenMobile = useMediaQuery('(max-width: 640px)')
  const isFullscreen = !fullscreen
    ? false
    : !!fullscreen
    ? true
    : isScreenMobile
  console.log('fs', isFullscreen, fullscreen, isScreenMobile)

  return <Dialog isOpen={open} data-fullscreen={isFullscreen} {...rest} />
}
