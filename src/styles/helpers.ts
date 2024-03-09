import { SHADOW_COLOR, TABLE_COLOR } from "@/helpers/constants/conflict_resolution"

export const getModeTableHeadBGColor = (mode = 'light') => {
    return mode === 'dark'
        ? TABLE_COLOR.head.color.DARK
        : TABLE_COLOR.head.color.LIGHT
}

export const getModeBoxShadowColor = (mode = 'light') => {
    return mode === 'dark'
        ? SHADOW_COLOR.DARK
        : SHADOW_COLOR.LIGHT
}