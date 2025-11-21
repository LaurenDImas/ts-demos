// type UserShape = {
//     name: string,
//     age: number,
//     isStudent: boolean
// };

import type {FC} from "react";

interface UserShape{
    name: string;
    age: number;
    isStudent: boolean;
}

const UserProp:FC<UserShape> = ({
    name,
    age,
    isStudent
}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{isStudent}</h2>
        </div>
    )
}
export default UserProp
