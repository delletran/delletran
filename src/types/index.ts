interface IUserProp {
    userId: string
    userName: string
    userPermission?: string
}

interface IError {
    message: string
    status?: number
}

interface IWebAuthUser {
    user_id: string
    username: string
}

interface IWebAuth {
    accessToken: string
    refreshToken?: number
}

interface IWebAuthInstance {
    domain?: string | undefined
    clientID?: string | undefined
}

interface IDimensionKeys {
    id: number;
    display_name: string;
};

interface IDimensionData {
    id: number;
    display_name: string;
};

type IDimensionAttribute = { [k: string]: IObjectAny[] };

type IObjectAny = { [k: string]: any };
type IObjectString = { [k: string]: string };
type IObjectNumber = { [k: string]: number };
type IObjectBoolean = { [k: string]: boolean };
type IObjectArrayString = { [k: string]: string[] };
type IArrayString = string[];


interface IObject<T> {
    [key: string]: T
}


export type {
    IDimensionKeys,
    IDimensionData,
    IDimensionAttribute,
    IUserProp,

    IObject,
    IObjectAny,
    IObjectString,
    IObjectNumber,
    IObjectBoolean,
    IObjectArrayString,
    IArrayString,
    IError,
    IWebAuthUser,
    IWebAuth,
    IWebAuthInstance
}