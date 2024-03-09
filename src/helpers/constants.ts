import { IObject, IArrayString } from "@/types"


const SEARCH_STATUS: IObject<string> = {
    'INACTIVE': 'Search',
    'PENDING': 'Searching',
    'FAILED': 'Failed',
    'LOADED': 'Loaded'
}

const ADD_STATUS: IObject<string> = {
    'INACTIVE': 'Add',
    'PENDING': 'Adding',
    'FAILED': 'Failed',
    'LOADED': 'Loaded'
}

const REFRESH_STATUS: IObject<string> = {
    'INACTIVE': 'Refresh',
    'PENDING': 'Refreshing',
    'FAILED': 'Failed',
    'LOADED': 'Loaded'
}

const BUTTON_ACTION: IObject<string> = {
    'ADD': 'Add',
    'SAVE': 'Save',
    'SEARCH': 'Search',
    'DELETE': 'Delete',
    'DELETE_ALL': 'Delete All',
    'ADD_FILTER': 'Add a filter',
    'ADD_COLUMN': 'Add a column',
    'SELECT': 'Select'
}

const BANNER_LABEL: IObject<string> = {
    'MAIN': 'Power Plant Curation Tool',
    'SEARCH': 'Search Records',
    'ADD': 'Add Records',
    'SAVE': 'Save Records'
}

const HEADER_MESSAGE: IObject<string> = {
    'info': 'Information',
    'success': 'Success!',
    'danger': 'You got an error!',
    'warning': 'Warning!'
}

const MESSAGE_TYPE: IObject<string> = {
    'INFO': 'info',
    'SUCCESS': 'success',
    'ERROR': 'danger',
    'WARNING': 'warning'
}

const VISIBILITY_STATUS = {
    SHOW: 'show',
    HIDE: 'hide',
    BLOCK: 'block'
} as const

const DEFAULT_USER_ID = ['0', '99', '999']

const RECORD_METADATA = ['input_time', '_user_id']

const COMPONENT_PREFIX: IObject<string> = {
    'COMBO_BOX': 'COMBO_BOX'
}

const ELEMENT_SUFFIX: IObject<string> = {
    'INPUT': 'input'
}

const ONCLICK_STATUS: IObject<boolean> = {
    'INACTIVE': false,
    'CLICK': true
}

const VISBILITY_MAP = {
    OBJECT: ['curation_metadata', 'visibility'],
    REFERENCE_OBJECT: ['curation_metadata', 'visibility', 'reference'],
    SEARCH_FILTER: ['curation_metadata', 'search', 'default_search_criteria'],
    SEARCH_RESULT: ['curation_metadata', 'search', 'default_search_result']
} as const

const DOMAIN_TAB_KEYS: IObject<string> = {
    'ENTITY_DOMAIN': 'entity-domain-tab',
    'DATA_DOMAIN': 'data-domain-tab'
} as const

const EXTERNAL_META_KEYS: IArrayString = [
    'domain_api',
    'tab_name',
    'domain_main_object',
    'reference_attribute_to_entity_main_object'
]

const MODEL_KEY_MAP = {
    ATTRIBUTE: ['attributes'],
    FOREIGN_KEY: ['type', 'foreign_key'],
    REFERENCE_DIMENSION: ['curation_metadata', 'reference', 'dimension']
} as const

const PRELOAD_TYPE = {
    FOREIGN_KEY: 'foreign_key',
    DEPENDENCY_TABLE: 'dependency_table'
} as const

const DISPLAY_RECORD_STATUS: IObject<string> = {
    'ACTIVE': '1',
    'INACTIVE': '0'
}

const STATUS_CODE: IObject<number> = {
    'OK': 200,
    'CREATED': 201,
    'SERVER_NOT_FOUND': 400,
    'FORBIDDEN': 403,
    'SERVER_ERROR': 500
}

const ERROR_MESSAGES: IObject<string> = {
    'SERVER_ERROR': "Instruction: Please contact the administrator.",
    'ENV_ERROR': 'Instruction: Please check environment variable.',
    'SEARCH_QUERY_ERROR': 'Instruction: Please check if the input value is valid and existing or not.',
    'DATA_DOMAIN_ERROR': 'Instruction: Please add new power plant record.'
}

const DEFAULT_NUMBER_SYSTEM = 10

const POPOVER_HEADER_TITLE: IObject<string> = {
    'ADDITIONAL_FILTERS': "List of Search Filters",
    'ADDITIONAL_COLUMN': "List of Columns"
}

const POPOVER_PLACEMENT: IObject<string> = {
    'ADDITIONAL_FILTERS': "right",
    'ADDITIONAL_COLUMN': "left"
}

const INPUT_TYPE: IObject<string> = {
    'int': "number",
    'float': "number",
    'date': "date",
    'string': "text"
}

const PAGINATION: IObject<number> = {
    'PAGE_DEFAULT_NUMBER': 1,
    'PAGE_DEFAULT_INDEX': 0,
    'MAX_LIMIT_PER_PAGE': 15,
    'BETWEEN_COUNT': 4,
    'ELLIPSIS_COUNT': 1
}

const SORT_ORDER: IObject<number> = {
    'ASCENDING': -1,
    'DESCENDING': 1,
    'NORMAL': 0
}

const CERBERUS_MSG: string = "cerberus_message"

const DEFAULT_PRECISION = 3

const USER_PERMISSION = {
    ADMIN: 'ADMIN',
    WRITE: 'WRITE',
    READ: 'READ'
}  as const

const PERMISSION_STATUS: IObject<boolean> = {
    'PERMITTED': true,
    'NOT_PERMITTED': false
}

const EXPANDED_STATUS: IObject<boolean> = {
    'OPEN': true,
    'CLOSED': false
}

const sortBy = ['exact', 'eq', 'startswith', 'contains', 'gt', 'lt']

export {
    BANNER_LABEL,
    SEARCH_STATUS,
    ADD_STATUS,
    REFRESH_STATUS,
    BUTTON_ACTION,
    HEADER_MESSAGE,
    MESSAGE_TYPE,
    DEFAULT_USER_ID,
    RECORD_METADATA,
    VISIBILITY_STATUS,
    VISBILITY_MAP,
    COMPONENT_PREFIX,
    ELEMENT_SUFFIX,
    ONCLICK_STATUS,
    DOMAIN_TAB_KEYS,
    EXTERNAL_META_KEYS,
    MODEL_KEY_MAP,
    PRELOAD_TYPE,
    DEFAULT_NUMBER_SYSTEM,
    DISPLAY_RECORD_STATUS,
    STATUS_CODE,
    ERROR_MESSAGES,
    POPOVER_HEADER_TITLE,
    POPOVER_PLACEMENT,
    INPUT_TYPE,
    PAGINATION,
    CERBERUS_MSG,
    SORT_ORDER,
    DEFAULT_PRECISION,
    USER_PERMISSION,
    PERMISSION_STATUS,
    EXPANDED_STATUS,
    sortBy
};