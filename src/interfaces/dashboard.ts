export interface UsersList{
    data: User[],
    total: number
}

export interface User{
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    status: USER_STATUSES,
    role: USER_ROLES
}

export enum USER_ROLES{
    OWNER="Owner",
    ADMIN="Admin",
    DEV="Dev",
    TRANSLATOR="Translator",
    USER="User",
    TESTER="Tester",
}

export enum USER_STATUSES{
    ACTIVE="Active",
    INACTIVE="Inactive",
    UNVERIFY="Unverify",
    DELETED="Deleted",
    BANNED="Banned",
}