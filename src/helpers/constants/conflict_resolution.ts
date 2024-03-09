const ACTION_PERFORMED = {
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
} as const

const SHADOW_COLOR = {
    DARK: '#FFFFFF33',
    LIGHT: '#000000AA'
} as const


const TABLE_COLOR = {
  chip: {
    bgColor: {
      DARK: '#CCE6FF'
    },
    color: {
      DARK: '#13398D',
      LIGHT: '#0080FF'
    }
  },
  head: {
    color: {
      DARK: '#555',
      LIGHT: '#f5f5f5'
    }
  },
  cell: {
    DARK: "#13398D"
  },
  shadow: {
    DARK: '#FFFFFF33',
    LIGHT: '#000000AA'
  }
} as const


const ACTION_COLOR = {
  ACCEPT: '#027ABD',
  REJECT: '#FC860F',
  ACCEPTED: '#04C004',
  REJECTED: '#FC860F',
  ACCEPT_ALL: '#0BB7EE',
  REJECT_ALL: '#B95F02',
  UNDO: '#9500ae',
} as const


export {
  ACTION_PERFORMED,
  TABLE_COLOR,
  ACTION_COLOR,
  SHADOW_COLOR
}