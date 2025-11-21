import type {ReactNode} from "react";

interface UserShape {
    children: ReactNode;
}

const UserChildren = ({children}: UserShape) => {
    return (
        <div>
            <h1>{children}</h1>
        </div>
    )
}
export default UserChildren
