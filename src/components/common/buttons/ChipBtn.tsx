import { getTheme } from "@/helpers"
import { getModeBoxShadowColor } from "@/styles/helpers"
import { IIconBtnSize, IPlacement } from "@/types/style_types"
import { Chip, Tooltip } from "@mui/material"
import React, { useEffect, useState } from "react"

type Props = {
  label?: string
  textColor: string
  buttonColor: string
  handler: Function
  placement?: IPlacement
  size?: IIconBtnSize
}

const ChipBtn = ({
  label,
  textColor,
  buttonColor,
  handler,
  placement = "top-start",
}: Props) => {
  const [mode, setMode] = useState<string>("light")
  const theme = getTheme()

  useEffect(() => {
    handleThemeEventListener()
  }, [theme])

  useEffect(() => {
    window.addEventListener("storage", handleThemeEventListener)
    return () => window.removeEventListener("storage", handleThemeEventListener)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleThemeEventListener() {
    const _theme = getTheme()
    _theme &&
      Object.keys(_theme).includes("mode") &&
      setMode(_theme?.mode ? _theme.mode : "light")
  }
  const shadowColor = getModeBoxShadowColor(mode)

  return (
    <Tooltip title={label} placement={placement} arrow>
      <Chip
        label={label}
        size="small"
        onClick={() => handler()}
        sx={{
          m: "0.5rem",
          px: "0.825rem",
          justifyContent: "space-between",
          textTransform: "uppercase",
          color: textColor || "whitesmoke",
          fontWeight: 550,
          bgcolor: buttonColor,
          boxShadow: `0px 4px 5px -1px ${shadowColor}`,
        }}
      />
    </Tooltip>
  )
}

export default ChipBtn
