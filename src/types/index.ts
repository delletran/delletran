

interface IUser {
    email: string
    user_id: string
    username: string
    userPermission?: IUserPermission[]
    picture?: string
    family_name?: string
    gender?: string
    given_name?: string
    identities: {
        connection?: string,
        isSocial?: boolean
        provider?: string
        user_id?: string
    }[]
    locale?: string
    name?: string
    nickname?: string
    sub?: string
    updated_at?: string
    error?: any
}

type IUserPermission = 'ADMIN' | 'WRITE' | 'READ'

type IAttribCurationMetadata = IObject<any> | IObject<IObject<any>>
type IObjCurationMetadata = IObject<string>

interface IDatamodelObjectsAttributes {
    name: string
    type: string | IObject<any>
    curation_metadata?: IAttribCurationMetadata
}
interface IDatamodelObjects {
    name: string
    attributes: IDatamodelObjectsAttributes[]
    unicity: string[][]
    curation_metadata?: IObjCurationMetadata
}
interface IDatamodelData {
    model_name: string
    objects: IDatamodelObjects[]
    error?: IObject<any>
}

interface IAttributeDescription {
    name: string
    display_name: string,
    type: string,
    required: boolean,
    foreign_key: string | IObject<any>
    checked?: boolean
}

// {name: 'name', display_name: 'Name', type: 'string', required: true, foreign_key: null}

interface IDimensionKeys {
    id: number;
    display_name: string;
}

interface IDimensionData {
    id: number;
    display_name: string;
}

type IDimensionAttribute = { [k: string]: IObject<any>[] };


interface IReferencingObject {
    refObjectName: string
    refAttributeName: string
    refUnicity: IObject<any>,
    visibility: boolean
}

interface IRecordPayload {
    record_id: number
    record_time?: string | null
}
interface IObject<T> {
    [key: string]: T
}
type IObjectArrayString = { [k: string]: string[] };
type IArrayString = string[];

interface IError {
    message: string
    status?: number
}


interface ISelectedRecord {
    name: string
    record_id: string | null
    parent: IObject<any> | {
        name: string
        record_id: string | null
    }
}

interface INewData {
    [objectName: string]: {
        [record_id: string]: IObject<IObject<any> | string>
    }
}


type IStatus = 'idle' | 'pending' | 'succeeded' | 'failed'

export type {
    IUser,
    IUserPermission,

    IDatamodelData,
    IDatamodelObjects,
    IDatamodelObjectsAttributes,
    IObjCurationMetadata,
    IAttribCurationMetadata,

    IAttributeDescription,

    IDimensionKeys,
    IDimensionData,
    IDimensionAttribute,
    IReferencingObject,

    IRecordPayload,
    IObject,
    IObjectArrayString,
    IArrayString,

    IError,

    ISelectedRecord,
    INewData,
    IStatus
}