import UserProp from "./UserProp.tsx";

const UserPropApp = () => {
    return (
        <div>
            <UserProp name="alex" age={20} isStudent={true} />
            {/*<UserChildren>*/}
            {/*    <p>Hello</p>*/}
            {/*</UserChildren>*/}
        </div>
    )
}
export default UserPropApp
