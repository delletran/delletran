import { useEffect } from 'react'


export const useLeavePageConfirm = (active = true) => {
  const beforeUnloadListener = (event: any) => {
    event.preventDefault()
    return (event.returnValue = "")
  }

  useEffect(() => {
    if (active) {
      addEventListener("beforeunload", beforeUnloadListener)
    } else {
      removeEventListener("beforeunload", beforeUnloadListener)
    }
  }, [active])
}
