import { IIconBtnSize, IPlacement } from "@/types/style_types";
import { IconButton, Tooltip, TooltipProps } from "@mui/material";
import React from "react";
import { MdCheck } from "react-icons/md";

type Props = {
  title?: string;
  color: string;
  icon: JSX.Element;
  handler: Function;
  placement?: IPlacement;
  size?: IIconBtnSize;
};

const IconBtn = ({
  title,
  icon,
  color,
  handler,
  placement = "top-start",
  size = "small",
}: Props) => {
  return (
    <Tooltip title={title} placement={placement} arrow>
      <IconButton size={size} sx={{ color: color }} onClick={() => handler()}>
        {icon || <MdCheck />}
      </IconButton>
    </Tooltip>
  );
};

export default IconBtn;
