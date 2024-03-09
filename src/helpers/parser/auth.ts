import { USER_PERMISSION } from "@/helpers/constants"
import { IUserPermission } from "@/types"

function getRankPermission(userPermission: string[]) {
    /**
     * Get the highest/priority permission
     * The ranking of permission is:
     *  1. ADMIN
     *  2. WRITE
     *  3. READ
     *
     * If you are ADMIN, you have can test other permission by setting the test environment variable
     */

    if (userPermission.includes(USER_PERMISSION.ADMIN)) {
        return USER_PERMISSION.ADMIN
    }
    else if (userPermission.includes(USER_PERMISSION.WRITE)) {
        return USER_PERMISSION.WRITE
    }
    else {
        return USER_PERMISSION.READ
    }

}

const isAuthorized = (userPermission: IUserPermission = USER_PERMISSION.READ, authorization_list: IUserPermission[] = [USER_PERMISSION.ADMIN, USER_PERMISSION.WRITE]) => {
    // If you are ADMIN, you can test the permission by setting the test environment variable
    const test_permission = process.env.TEST_PERMISSION as IUserPermission
    const env = process.env.NODE_ENV

    if (env == 'development' && test_permission) {
        return authorization_list.includes(test_permission)
    }
    return authorization_list.includes(userPermission)
}

export {
    getRankPermission,
    isAuthorized
}