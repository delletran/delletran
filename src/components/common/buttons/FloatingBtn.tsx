import React, { Dispatch, SetStateAction } from "react"
import { Fab } from "@mui/material"
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md"
import { IIconBtnSize, IPlacement } from "@/types/style_types"
import { IObject } from "@/types"

type Props = {
  title?: string
  color: string
  icon: JSX.Element
  handler: Function
  placement?: IPlacement
  size?: IIconBtnSize
  style: IObject<any>
}

const FloatingBtn = ({
  title,
  icon,
  color = "navy",
  handler,
  placement = "top-start",
  size = "medium",
}: Props) => {
  return (
    <Fab
      color="primary"
      size={size}
      aria-label={title}
      onClick={() => handler()}
      sx={{
        position: "fixed",
        top: "50%",
        right: "1rem",
        backgroundColor: "transparent",
        zIndex: 9999,
      }}
    >
      {icon}
      {/* {icon.props({ size: 48, style: { color: color } })} */}
      <MdOutlineChevronRight size={48} style={{ color: color }} />
    </Fab>
  )
}

export default FloatingBtn
