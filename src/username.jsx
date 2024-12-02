
import { useState } from "react"
export default function Usernameform(){
    const [username,setUsername] = useState("tiuy")
    const updateename = (e) => {
        setUsername(e.target.value)
    }
    return (
        <div>
            <h1>Username</h1>
            <input type="text" placeholder="username" value={username}
             onChange={updateename}/>
            <button>Submit</button>
        </div>
    )
}