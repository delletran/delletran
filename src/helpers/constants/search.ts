import { IObject } from "@/types"


export const SEARCH_HEADER: IObject<string> = {
    'RETRIEVE_RECORD': 'Retrieve Record',
    'SEARCH_RECORD': 'Search',
    'SEARCH_RESULTS': 'Search Results',
    'COMPANY': 'Search Company'
}

export const SEARCH_BUTTON: IObject<string> = {
    'SEARCH': 'Search',
    'RESET': 'Reset',
    'EXPORT': 'Export All Data'
}

export const TABLE_SETTING: IObject<any> = {
    'PAGINATION_DISPLAY': 'pages',
    'DENSITY': 'compact',
    'FULLSCREEN_MODE': false
}

export const PAGINATION: IObject<number> = {
    'PAGE_DEFAULT_NUMBER': 1,
    'PAGE_DEFAULT_INDEX': 0,
    'MAX_LIMIT_PER_PAGE': 15,
    'BETWEEN_COUNT': 4,
    'ELLIPSIS_COUNT': 1
}

export const SELECT_BUTTON: IObject<string> = {
    'SELECT': 'Select',
    'ADD': 'Select and Add'
}