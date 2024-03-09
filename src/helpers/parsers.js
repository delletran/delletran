import { VISIBILITY_STATUS,
    VISBILITY_MAP,
    USER_PERMISSION,
    PERMISSION_STATUS,
    DEFAULT_PRECISION,
    DEFAULT_NUMBER_SYSTEM,
    SORT_ORDER
} from "./constants";

// const OLDEST_TIME = new Date("1900-01-01").getTime()

function getValueFromDict(fieldName, dataDict){
if (dataDict) {
    return dataDict.hasOwn(fieldName) ? dataDict[fieldName] : null;
}
else {
    return null;
}
}

function convertTime(timeInt) {

if (!timeInt) {
    return null;
}

return new Date(timeInt).toISOString().split('T')[0];
}

function convertDateTime(timeInt) {

if (!timeInt) {
    return null;
}

return new Date(timeInt).toUTCString();
}


function createPayload(fieldName, recordId) {
return {
    [fieldName]: recordId
};
}


function dynamicSort(property) {
var sortOrder = 1;
if(property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
}
return function (a,b) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
}
}

function isAttributeFKOfObject(attribute, objectName) {
return attribute.type.foreign_key == objectName
}

/*Get the number ordinal*/
function nth(n){return n+["st","nd","rd"][((n+90)%100-10)%10-1]||"th"}

function getUnicityLabel(keys, value) {
var defaultUnicityLabel = "unicity"
let labelMap = {[keys] : defaultUnicityLabel}

// Applicable for tables that have more than set of unicity
if (typeof(keys) == 'object'){
    labelMap = Object.assign({}, ...keys.map((x) => ({[x]: nth(value+1) + ' ' + defaultUnicityLabel})));
}

return labelMap
}

function createUnicityMap(unicityList) {
let unicityMap = Object.assign({}, ...unicityList.map((x, index) => (getUnicityLabel(x, index))));
return unicityMap
}

function getUnictyList(datamodel, object) {
const attribute = datamodel.filter(attr => {return attr.name == object}).map(x => x)[0]
let unicityMap = createUnicityMap(attribute.unicity)

return unicityMap
}

function findReferencingObjects(datamodel, objectName) {
// Given a datamodel and the objectName
// return a dictionary containing the objects that references objectName, and the attribute that stores the record_id of objectName
// e.g.
// {
//     refObjectName: power_unit,
//     refAttributeName: power_plant_id
// }

return datamodel ? datamodel.flatMap((object) => {
    const refAttribute = object.attributes.filter(attr => isAttributeFKOfObject(attr, objectName))[0];
    return refAttribute ? {
        refObjectName: object.name,
        refAttributeName: refAttribute.name,
        refUnicity: createUnicityMap(object.unicity[0]),
        visibility: isVisible(object, VISBILITY_MAP['REFERENCE_OBJECT'])
    } : []
}) : []
}

function getObjectFromDatamodel(datamodel, objectName) {
const objectModels = datamodel.filter(object => {
    return object.name == objectName
})

return objectModels.length ? objectModels[0] : null
}

function getAttributeModel(objectModel, attributeName){
return objectModel && objectModel.hasOwn('attributes') ?
    objectModel.attributes.find(attr => attr.name == attributeName) : null
}


function isVisible(objectModel, keys=VISBILITY_MAP['OBJECT'], displayMode=VISIBILITY_STATUS.SHOW) {
    var visibilityStatus = getVisibilityStatus(objectModel, keys, displayMode)
    return visibilityStatus == VISIBILITY_STATUS.SHOW
}

function getVisibilityStatus(object, keys=VISBILITY_MAP['OBJECT'], displayMode=VISIBILITY_STATUS.SHOW) {
const visibilityStatus = getModelParsedValue(object, keys)
return visibilityStatus ? String(visibilityStatus).toLowerCase() : displayMode
}

function removeHiddenObjects(datamodel){
return datamodel.filter((object) => {
    const visibilityStatus = getVisibilityStatus(object)
    return visibilityStatus != VISIBILITY_STATUS.HIDE;
})
}

function isForeignKey(dataType) {
return typeof(dataType) != "string"
}

function getModelParsedValue(obj, keys) {
/**
 * Given the object and keys return the key value
 * e.g.
 * {
 *      obj: generator,
 *      keys: ['curation_metadata', 'visibility']
 * }
 */

return keys.reduce((obj, level) => obj && obj[level], obj)
}

function isDisplaySearchItem(attributeModel, attributeData, visilibiltyMap){
/**
 * Determine if the attribute is search filter/column or additional filter/column
 *  - attributeModel: parsed attribute description from data model that will be checked if attribute is default search filter/column
 *  - attributeData: fetched attribute data from API
 *  - visilibiltyMap: keys that will be used to check if the attribute set as "show" or not
 */

var resultIndex = 0
var attributeDesc = attributeModel.filter(attrDesc => { return attrDesc.name == attributeData.name })
return attributeData.required || isVisible(attributeDesc[resultIndex], visilibiltyMap, VISIBILITY_STATUS['HIDE'])
}

function sortData(data, key, order=SORT_ORDER.ASCENDING){
    /**
     * Sort the array of objects based on given key
     *  - data: set of records
     *  - key: reference key that will be used for sorting
     */
    var sortedData = []

    if(order == SORT_ORDER.DESCENDING){
        sortedData = data.sort((currentElement, nextElement) => {
            return nextElement[key]?.toString()
                    .localeCompare(currentElement[key]?.toString(),  undefined, {numeric: true, sensitivity: 'base'}) })
    }
    else{
        sortedData = data.sort((currentElement, nextElement) => {
            return currentElement[key]?.toString()
                    .localeCompare(nextElement[key]?.toString(),  undefined, {numeric: true, sensitivity: 'base'}) })
    }

    return sortedData
}

function createSearchParam(parameter_key, parameter_values){
/**
 * Create search parameters that will be used in API calls
 *  - parameter_key: search parameter name
 *  - parameter_values: possible values for parameter key. It could be string, boolean, number or array.
 */

var searchParam = new URLSearchParams(parameter_values.map(r => [parameter_key, r]))

return searchParam.toString()

}

function isCerberusAvailable(value){
return  value? value.toLowerCase() == 'true' : false
}

function getRowCellData(rowData, columnId, isForeignKeyValue){
/**
 * Get the row data based on given column
 * If the data is foreign key, extract the foreign key id
 * else, return the given row cell data
 *  - rowData: get value from cell data
 *  - columnId: accessorKey of the column
 *  - isForeignKeyValue: indicator if the data is foreign key or not
 */

const fkIndex = 0
var cellData = rowData.getValue(columnId)
cellData = cellData? cellData : '';
return isForeignKeyValue? (cellData? parseInt(cellData[fkIndex].split(' |')[fkIndex], DEFAULT_NUMBER_SYSTEM) : cellData) : cellData
}

function getRowOrder(cellA, cellB){
/**
 * Sort the row by descending or ascending order
 *  - cellA: 1st cell to compare
 *  - cellB: 2nd cell to compare
 */

return cellA < cellB ? SORT_ORDER.DESCENDING : cellA > cellB ? SORT_ORDER.ASCENDING : SORT_ORDER.NORMAL;
}

function sortColumn(rowA, rowB, columnId, columnData){
/**
 * Created customize sorting function to include sorting in foreign key id
 *  - rowA: 1st row to compare
 *  - rowB: 2nd row to compare
 *  - columnId: accessorKey of the column
 *  - columnData: column data that consists the name(accessorKey) and display_name (header)
 */

const isForeignKeyValue = columnData.foreign_key != null
var cellA = getRowCellData(rowA, columnId, isForeignKeyValue)
var cellB = getRowCellData(rowB, columnId, isForeignKeyValue)

return getRowOrder(cellA, cellB)
}

function getColumnMap(columns, enableHiding=true){
/**
 * Given the list of columns, create the column map by including the following:
 *  - accessorKey: key that will be used to join the data from the data keys.
 *  - header: display name for table columns
 *  - enableHiding: column option if the column can be hide or not.
 *  - mantineTableHeadCellProps/mantineTableBodyCellProps: props that can be used to adjust styles
 *
 *  Example of accessor and header property between column map and data map:
 *      column_map = [{accessorKey: "record_id", header: "Record ID"}]
 *      data_map = [{record_id: 1}]
 *
 *      The accessorKey must match one of the keys in your data, or else no data will show up in the column.
 *      In this example, accessorKey "record_id" match with the "record_id" key found in data_map.
 */

return columns.map((column) =>
                ({  accessorKey : column.name,
                    enableColumnPinning: true,
                    header: column.display_name,
                    enableHiding: enableHiding,
                    muiTableHeadCellProps: { align: 'center'},
                    muiTableBodyCellProps: { align: 'center'},
                    sortingFn: (rowA, rowB, columnId ) => { return sortColumn(rowA, rowB, columnId, column)}
                }))
}

function getConfidenceScore(confidenceScoreValue){
/**
 * Return the '-' if there are no value else the given confidence score will be returned.
 *  - confidenceScoreValue: confidence score or blank value
 */


return confidenceScoreValue ? confidenceScoreValue.toPrecision(DEFAULT_PRECISION): '-'
}

function sortByConfidenceScore(data, recordIdsLength){
/**
 * Sort data by confidence score (used when searching records with non-unicity filters)
 *  - data: records
 *  - recordIdsLength: used to check if there are record ids in eddie API result
 */

return recordIdsLength? data.sort(dynamicSort('confidence_score')).reverse(): data
}

function getRankPermission(userPermission){
/**
 * Get the highest/priority permission
 * The ranking of permission is:
 *  1. ADMIN
 *  2. WRITE
 *  3. READ
 *
 * If you are ADMIN, you have can test other permission by setting the test environment variable
 */

if(userPermission.includes(USER_PERMISSION.ADMIN)){
    // If you are ADMIN, you can test the permission by setting the test environment variable
    var test_permission = process.env.NEXT_PUBLIC_TEST_PERMISSION
    var isValidPermission = test_permission && Object.values(USER_PERMISSION).includes(test_permission)
    return isValidPermission? test_permission : USER_PERMISSION.ADMIN
}
else if(userPermission.includes(USER_PERMISSION.WRITE)){
    return USER_PERMISSION.WRITE
}
else {
    return USER_PERMISSION.READ
}

}

function getPermissionStatus(userPermission, permitted_list=[USER_PERMISSION.ADMIN, USER_PERMISSION.WRITE]){
/**
 * Get the permission status based on permitted list
 *  - userPermission: highest rank user attic permission
 *  - permitted_list: list of attic permission that have access
 */
return permitted_list.includes(userPermission)? PERMISSION_STATUS.PERMITTED: PERMISSION_STATUS.NOT_PERMITTED
}


function isExternalForeignKey(foreignKey){
/**
 * Check if the foreign key is value connected to other data model
 *  - foreignKey: foreign key name (example: ds_pu_power_plant_entities.power_plant)
 */
return foreignKey && foreignKey.includes('.')
}


function updateExternalFkToInt(datamodel){
/**
 * Convert the external model attribute type from foreign key to int
 *  - datamodel: imported model
 *
 * Example:
 *  External model attribute:
 *     {
 *          'name': 'power_plant_entity_id',
 *          'type': {'foreign_key': 'ds_pu_power_plant_entities.power_plant'}
 *     }
 *
 *  It will be updated to:
 *     {
 *          'name': 'power_plant_entity_id',
 *          'type': 'int'
 *     }
 *
 */

var updatedDatamodel = datamodel

datamodel.map((objects, objectIndex) => {
    objects.attributes.map((attribute, attrIndex) => {
        const fkValue = typeof(attribute.type) == 'object' ? getModelParsedValue(attribute, ['type', 'foreign_key']): null
        isExternalForeignKey(fkValue)? updatedDatamodel[objectIndex]['attributes'][attrIndex]['type'] = 'int': null
    })
})

return updatedDatamodel
}

const sortByList = ({ data, sortBy, sortField }) => {
    /**
     * Sort the data based on custom list
     *  - data: records that will be sorted
     *  - sortBy: custom list
     *  - sortField: key that will be used for sorting
     */

    const sortByObject = sortBy.reduce((obj, item, index) => {
        return {
            ...obj,
            [item]: index,
        };
    }, {});

    return data.sort(
        (a, b) => sortByObject[a[sortField]] - sortByObject[b[sortField]]
    );
};


export {
convertTime,
convertDateTime,
getValueFromDict,
createPayload,
dynamicSort,
findReferencingObjects,
isAttributeFKOfObject,
createUnicityMap,
getUnictyList,
isVisible,
getVisibilityStatus,
getObjectFromDatamodel,
getAttributeModel,
getModelParsedValue,
removeHiddenObjects,
isForeignKey,
isDisplaySearchItem,
sortData,
createSearchParam,
isCerberusAvailable,
getColumnMap,
getConfidenceScore,
sortByConfidenceScore,
getRankPermission,
getPermissionStatus,
isExternalForeignKey,
updateExternalFkToInt,
sortByList
};
