import { IObject } from "@/types"


export const RECORD_BUTTON: IObject<string> = {
    'ADD': 'Add',
    'SAVE': 'Save',
    'DELETE': 'Delete',
    'DELETE ALL': 'Delete All',
    'CANCEL': 'Cancel',
    'DISCARD': 'Discard'
}

export const DELETE_MODAL: IObject<string> = {
    'HEADER': "Delete Confirmation ",
    'BODY_1': "Are you sure want to delete this record including its associated objects?",
    'BODY_2': "Below are the record_id that will be deleted per object:"
}

export const UNSAVED_CHANGES_MODAL: IObject<string> = {
    'HEADER': "Unsaved Changes",
    'BODY_1': "You have unsaved changes in the current view. Do you want to discard the changes?",
    'BODY_2': "If not, save first before clicking on another record."
}

export const ADD_ITEM = 'Add New Item'

export const ERROR_HEADER : IObject<string> = {
    'Add': 'Error in adding new record',
    'Save': 'Error in updating the record',
    'Delete': 'Error in deleting the record',
    'DEFAULT': 'Error in curating the record'
}

export const MONSTER_ALERT : IObject<string> = {
    'HEADER': 'Found data issue',
    'NO_MONSTER_MSG': 'No monsters found',
    'LOADING': 'Checking data quality'
}

export const WARNING_HEADER = 'Found data issue'
export const NO_MONSTER_MSG = 'No monsters found'