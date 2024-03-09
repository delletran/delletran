import { IObject } from "@/types"

function createSearchParam(parameter_key: string, parameter_values: IObject<any>){
    /**
     * Create search parameters that will be used in API calls
     *  - parameter_key: search parameter name
     *  - parameter_values: possible values for parameter key. It could be string, boolean, number or array.
     */

    var searchParam = new URLSearchParams(parameter_values.map((r: any) => [parameter_key, r]))

    return searchParam.toString()
}

function convertQueryToParam(query: IObject<any>){
    /**
     * Create search parameters that will be used in API calls
     *  - query: list of key value pairs. The possible values could be string, boolean, number or dict.
     */

    let updatedQuery: any = {}

    Object.entries(query).forEach(([attrib_name, value]) => {
        updatedQuery[attrib_name] = JSON.stringify(value)
    })
    var searchParam = new URLSearchParams(updatedQuery)

    return searchParam.toString()
}


export {
    createSearchParam,
    convertQueryToParam
}