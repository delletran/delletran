export type IMUIVariant = "filled" | "outlined" | "standard";

export type IMUISeverity = "error" | "info" | "success" | "warning";

export type IMUIColor = "primary" | "secondary" | "info" | "error";

export type IBtnColor = "#0BB7EE" | "#B95F02" | "info" | "error";

export type IIconBtnSize =  "small" | "medium" | "large"

export type IPlacement =
  | "top-start"
  | "bottom-end"
  | "bottom-start"
  | "bottom"
  | "left-end"
  | "left-start"
  | "left"
  | "right-end"
  | "right-start";

export interface IAppTheme {
  mode?: "light" | "dark";
}
