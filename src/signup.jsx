import { useState } from "react"

export default function Signupform() { 
   
    const [fisrtname,setfirstmname] = useState("")
    const [lastname,setlastname] = useState("")
    const updatfirstname = (e) => {
        setfirstmname(e.target.value)
    }
    const updatelastname = (e) => {
        setlastname(e.target.value)
    }

    const handlesubmit = () => {
        alert(`Hello ${fisrtname} ${lastname}`)
    }

    return (
        <div>
            <h1>Username</h1>

            <lavbel htmlFor="firstname">First Name</lavbel>
            <input type="text" placeholder="username" value={fisrtname}
             onChange={updatfirstname}/>
           

        <br/>

        <lavbel htmlFor="lastname">First Name</lavbel>
            <input type="text" placeholder="username" value={lastname}
             onChange={updatelastname}/>
            <button onClick={handlesubmit}>Submit</button>
        </div>
    )
}