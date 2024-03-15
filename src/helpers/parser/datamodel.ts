import {
    VISIBILITY_STATUS,
    VISBILITY_MAP,
    MODEL_KEY_MAP,
} from '@/helpers/constants'
import { IAttributeDescription, IDatamodelObjects, IDatamodelObjectsAttributes, IObject } from "@/types"


const mainObject = process.env.MAIN_OBJECT


export const isForeignKey  = (attribute: IObject<any>) => {
    return attribute.foreign_key? true: false
}

export const getAttributeName = (attribute: IObject<any>) => {
    return attribute?.type == 'fk' ? attribute.foreign_key : attribute.name
}





const getDataForKeys = (objects: IDatamodelObjects[], keys: readonly string[]) => {
    var result = Object.values(objects).map((object: IObject<any>) => getModelParsedValue(object, keys))
    return result.filter((res: any) => res) as any[]
}


const getModelParsedValue = (object: IObject<any>, keys: readonly string[] = VISBILITY_MAP.OBJECT) => {
    /**
     * Given the object and keys return the key value
     * e.g.
     * {
     *      obj: generator,
     *      keys: ['curation_metadata', 'visibility']
     * }
    */
    return keys.reduce((o, level) => o && o[level], object) as IObject<any>[]
}


function isExternalForeignKey(foreignKey: any) {
    /**
     * Check if the foreign key is value connected to other data model
     *  - foreignKey: foreign key name (example: ds_pu_power_plant_entities.power_plant)
     */
    return foreignKey && foreignKey.includes('.') as boolean
}


function updateExternalFkToInt(datamodelObjects: IDatamodelObjects[]) {
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

    let updatedDatamodel = datamodelObjects

    datamodelObjects.map((objects: IDatamodelObjects, objectIndex: number) => {
        objects.attributes.map((attribute: IDatamodelObjectsAttributes, attrIndex: number) => {
            const fkValue = typeof (attribute.type) == 'object'
                ? getModelParsedValue(attribute, MODEL_KEY_MAP.FOREIGN_KEY)
                : null
            isExternalForeignKey(fkValue)
                ? updatedDatamodel[objectIndex]['attributes'][attrIndex]['type'] = 'int'
                : null
        })
    })

    return updatedDatamodel
}



const flattenKeys = (foreignKeyList: string[]) => {
    // Flatten the fetched foreign keys
    let flatten_level = 1
    foreignKeyList = foreignKeyList.flat(flatten_level)

    //Remove main object as key
    let filteredForeignKeyList = foreignKeyList.filter(function (fk: string) {
        return fk != mainObject;
    });

    return filteredForeignKeyList
}

function getVisibilityStatus(object: IDatamodelObjects, keys: readonly string[], displayMode: string = VISIBILITY_STATUS.SHOW) {
    const visibilityStatus = getModelParsedValue(object, keys)
    return visibilityStatus ? String(visibilityStatus).toLowerCase() : displayMode
}

function removeHiddenObjects(datamodel: IDatamodelObjects[]) {
    let filteredDatamodel: IObject<any>[] = []
    if (datamodel && datamodel.length > 0) {
        filteredDatamodel = datamodel?.filter((item) => {
            return getVisibilityStatus(item, VISBILITY_MAP.OBJECT) != VISIBILITY_STATUS.HIDE;
        });
    }
    return filteredDatamodel
}


function isVisible(objectModel: IDatamodelObjects, keys: readonly string[], displayMode: string = VISIBILITY_STATUS.SHOW) {
    var visibilityStatus = getVisibilityStatus(objectModel, keys, displayMode)
    return visibilityStatus == VISIBILITY_STATUS.SHOW
}

function isDisplaySearchItem(attributeModel: IObject<any>, attributeData: IObject<any>, visilibiltyMap: readonly string[]) {
    /**
     * Determine if the attribute is search filter/column or additional filter/column
     *  - attributeModel: parsed attribute description from data model that will be checked if attribute is default search filter/column
     *  - attributeData: fetched attribute data from API
     *  - visilibiltyMap: keys that will be used to check if the attribute set as "show" or not
    */
    var resultIndex = 0
    var attributeDesc = attributeModel.filter((attrDesc: IAttributeDescription) => attrDesc.name == attributeData.name)
    return attributeData.required || isVisible(attributeDesc[resultIndex], visilibiltyMap, VISIBILITY_STATUS.HIDE)
}

const isAllObjectsLoaded = (obj: IObject<boolean>) => {
    const fkValues = Object.values(obj)
    const fkEntries = Object.entries(obj)
    const isLoaded: boolean = fkValues.every((v) => v === true) && fkEntries.length > 0

    return isLoaded
}

const removeObjectFromList = (items: any[], value: string, by = 'name') => items.filter((obj) => obj[by] !== value)

const isAttributeFKOfObject = (attribute: IDatamodelObjectsAttributes, objectName: string) => {
    const attrib_type = attribute.type as IObject<any>

    return attrib_type.foreign_key == objectName
}

const nth = (n: number) => { return n + ["st", "nd", "rd"][((n + 90) % 100 - 10) % 10 - 1] || "th" }

const getUnicityLabel = (keys: any, value: number) => {
    var defaultUnicityLabel = "unicity"
    let labelMap = { [keys]: defaultUnicityLabel }

    // Applicable for tables that have more than set of unicity
    if (typeof (keys) == 'object') {
        labelMap = Object.assign({}, ...keys.map((x: string) => ({ [x]: nth(value + 1) + ' ' + defaultUnicityLabel })));
    }

    return labelMap
}

const createUnicityMap = (unicityList: string[]) => {
    let unicityMap = Object.assign({}, ...unicityList.map((x, index) => (getUnicityLabel(x, index))));
    return unicityMap
}

const findReferencingObjects = (datamodel: IDatamodelObjects[], objectName: string) => {
    /*
    Given a datamodel and the objectName
    return a dictionary containing the objects that references objectName, and the attribute that stores the record_id of objectName
    e.g.
    {
        refObjectName: power_unit,
        refAttributeName: power_plant_id
    }
    */

    return datamodel
        ? datamodel.flatMap((object: IDatamodelObjects) => {
            const refAttribute = object.attributes.filter(attr => isAttributeFKOfObject(attr, objectName))[0];
            return refAttribute
                ? {
                    refObjectName: object.name,
                    refAttributeName: refAttribute.name,
                    refUnicity: createUnicityMap(object.unicity[0]),
                    visibility: isVisible(object, VISBILITY_MAP.REFERENCE_OBJECT)
                }
                : []
        })
        : []
}

const getAttributeModel = (objectName: string, datamodel: IDatamodelObjects[]) => {
    const datamodelKeys = Object.keys(datamodel);

    if (datamodelKeys.length > 0 && !(objectName in datamodelKeys)) {
      const resultIndex = 0
      const objects = removeHiddenObjects(datamodel)
      const attributeModel = objects.filter(object => object.name == objectName)
      const objectAttrModel = attributeModel.length > 0? attributeModel[resultIndex]['attributes']: []

      return objectAttrModel as IDatamodelObjectsAttributes[]
    }
  }

  const getMetadatDescription = (attributeModel: IDatamodelObjectsAttributes, cerberusData: any) => {
    /**
     * Get the metadata description from data model and cerberus data
     *  - attributeModel: part of datamodel where the curation metadata description can found
     *  - cerberusData: column in fetch-data API where the other description can found
     */

    // Get the description from data model curation metadata
    var descFromDataModel = attributeModel && Object.keys(attributeModel).includes('curation_metadata') &&
    attributeModel.curation_metadata?.hasOwn('description') ? attributeModel.curation_metadata.description : ''

    // Get the description from found monsters in cerberus
    var descFromCerberus = cerberusData && cerberusData.hasOwn('description') ? cerberusData.description: ''

    // Priority to display the description from data model
    return descFromDataModel? descFromDataModel: descFromCerberus
}


/**
 * Get the foreign key attribute
 *
 * @param referenceData
 * @param objectName
 * @returns
 */
export const getRefAttributeName = (referenceData: any, objectName?: string | undefined) => {
    let refAttributeName = referenceData?.filter((refObj: any)=> {return refObj.refObjectName == objectName})[0]
    return objectName && refAttributeName? refAttributeName?.refAttributeName: 'record_id'
}


/**
 * Get the display name of the object records
 *
 * @param record
 * @param refObjectName
 * @returns
 */
export const getDisplayName = (attributeModel: IObject<any>, refObjectName: string) => {
    const disp = attributeModel?.[refObjectName]?.filter((item: IObject<any>) => (
        item?.curation_metadata?.display_name?.visibility == VISIBILITY_STATUS.SHOW
    ))[0]

    return disp?.name || 'record_id'
}



export {
    getDataForKeys,
    getModelParsedValue,
    updateExternalFkToInt,

    flattenKeys,
    removeHiddenObjects,
    isDisplaySearchItem,

    isAllObjectsLoaded,
    removeObjectFromList,

    findReferencingObjects,
    getAttributeModel,
    getMetadatDescription,
    getUnicityLabel
}
