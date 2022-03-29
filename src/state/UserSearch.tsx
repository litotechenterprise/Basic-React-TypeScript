import { stringify } from "querystring";
import { useState } from "react";

const users = [
    {name:"Peter", age: 34},
    {name:"Frank", age: 20},
    {name:"Pablo", age: 25},
    {name:"Sam", age: 44},
]

const UserSearch: React.FC = () => {

    const [name, setName] = useState('')
    const [user, setUser] = useState<{name:string, age:number} | undefined>();

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        })

        setUser(foundUser);
    }

    return <div>
        User Search
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick} >Find User</button>
        <div>
            {user && user.name}
        </div>
        </div>
}


export default UserSearch;