import type {Info} from "./types.ts";

type UserInfoProp ={
    user: Info;
}
const UserInfo = ({ user }: UserInfoProp) => {
    return (
        <div>
            <h2>User Information</h2>
            <p>ID:  {user.id}</p>
            <p>ID:  {user.name}</p>
            <p>ID:  {user.email}</p>
        </div>
    )
}
export default UserInfo
