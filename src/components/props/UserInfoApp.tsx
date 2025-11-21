import UserInfo from "./UserInfo.tsx";
import AdminInfo from "./AdminInfo.tsx";
import type {AdminInfoList, Info} from "./types.ts";

const UserInfoApp = () => {
    const user: Info = {
        id: 1,
        name: "John Doe",
        email: "john@doe.com",
    }
    
    const admin: AdminInfoList = {
        id: 2,
        name: "Jane Smith",
        email: "jan@smith.com",
        role: "admin",
        lastLogin: new Date(),
    }
    
    return (
        <div>
            <UserInfo user={user} />
            <AdminInfo admin={admin} />
        </div>
    )
}
export default UserInfoApp
