

/**
 * Check if the record page will be displayed is add page or not
 *
 * @param objectName
 * @param objectAddList
 * @returns
 */
export const isAddRecordPage = (objectName: string, objectAddList: any) => {
    return Object.keys(objectAddList).includes(objectName)
}


/**
 * Get the record id based on the id availability
 *
 * @param recordId
 * @param refRecordID
 * @returns
 */
export const getRecordId = (id: string, refId: string|undefined) => {
    return refId || id
}