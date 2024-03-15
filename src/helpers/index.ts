import { IAppTheme } from "@/types/style_types";

const getTheme = () => {
  return typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('theme') as string) as IAppTheme
    : {}
}

export {
    getTheme
}