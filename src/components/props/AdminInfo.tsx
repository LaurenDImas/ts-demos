import React from 'react'
import type {AdminInfoList} from "./types.ts";

type AdminInfoProp = {
    admin: AdminInfoList,
}

const AdminInfo : React.FC<AdminInfoProp>= ({admin}) => {
    return (
        <div>
            <div>Admin Information</div>
            <p>ID: {admin.id}</p>
            <p>Name: {admin.name}</p>
            <p>Email: {admin.email}</p>
            <p>Role: {admin.role}</p>
            <p>Last Login: {admin.lastLogin.toLocaleString()}</p>
        </div>
    )
}
export default AdminInfo
