import { EXTERNAL_META_KEYS } from "./constants"

function getMissingParams(metadata) {
    return EXTERNAL_META_KEYS.filter(key => !Object.keys(metadata).includes(key))
}

function validateMetadata(metaDataList) {
    const incompleteMeta = metaDataList.map(metadata => getMissingParams(metadata)).filter(param => param.length)
    if (incompleteMeta.length) {
        throw "Incomplete metadata key(s) set in configuration. missing: " + JSON.stringify(incompleteMeta)
    }
}

function validateExternalDomainMetadata() {
    const externalDomainMetaString = process.env.NEXT_PUBLIC_EXTERNAL_DOMAIN_METADATA
    if (externalDomainMetaString) {
        try {
            const externalDomainList = JSON.parse(externalDomainMetaString)
            validateMetadata(externalDomainList)
        }
        catch(error) {
            console.log(error)
            throw error
        }
    }
}

export {
    getMissingParams,
    validateMetadata,
    validateExternalDomainMetadata
}
