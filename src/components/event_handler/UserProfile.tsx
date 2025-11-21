import {useState} from "react";

interface UserProfileState {
    name: string,
    age: number,
    email: string,
}
const UserProfile = () => {
    const [profile, setProfile] = useState<UserProfileState>({
        name: '',
        age: 0,
        email: '',
    })
    
    const updateName = (name: string) => {
        setProfile((prev) => ({...prev, name}))
    }
    
    const updateAge = (age: number) => {
        setProfile((prev) => ({...prev, age}))
    }
    
    const updateEmail = (email: string) => {
        setProfile((prev) => ({...prev, email}))
    }
    return (
        <div>
            <input
                type="text"
                placeholder="Enter Name"
                value={profile.name}
                onChange={(e) => { updateName(e.target.value)}}
            />
            
            <input
                type="number"
                placeholder="Enter Age"
                value={profile.age}
                onChange={(e) => { updateAge(Number(e.target.value))}}
            />
            
            
            <input
                type="email"
                placeholder="Enter Email"
                value={profile.email}
                onChange={(e) => { updateEmail(e.target.value)}}
            />
            
            <h3>Profile Summary</h3>
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
            <p>Email: {profile.email}</p>
        </div>
    )
}
export default UserProfile
