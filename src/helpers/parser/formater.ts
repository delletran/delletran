import { IObject } from "@/types";


const formatToId = (s: string) => s.replaceAll(' ', '-').toLowerCase()


const formatObjectDisplayName = (obj: IObject<any>, attribKeys: string[], uniquieKey = 'id', padUniqueCount = 0) => {
  /**
   * returns: "uniquieKey | attribKey[n] | attribKey[n...] "
   */
  let displayName = ''
  let strId = ''

  var index = attribKeys.indexOf(uniquieKey);
  strId = index !== -1 && (obj[uniquieKey]).toString().padStart(padUniqueCount, '0')

  attribKeys.forEach(i => {
    displayName += i != uniquieKey ? ` | ${obj[i]}` : ''
  });

  return strId ? `${strId}${displayName}` : displayName
}

const sortObjects = (data: IObject<any>[], by: string) => {
  const sorted = [...data]

  sorted && sorted.length > 0 &&
    sorted.sort((itemA: any, itemB: any) =>
      (itemA[by] > itemB[by]) ? 1 : (itemA[by] < itemB[by]) ? -1 : 0)

  return sorted
}


export {
  formatToId,
  formatObjectDisplayName,
  sortObjects,
  
}
